from datetime import datetime, timezone, timedelta
from itertools import chain

import pytz
from django.db.models import Prefetch
from django.http import Http404, HttpResponseServerError, HttpResponseBadRequest
from pytracking.django import OpenTrackingView, ClickTrackingView
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from . import utils
from .models import EmailAccount, SendingCalendar, CalendarStatus, WarmingStatus
from .serializers import EmailAccountSerializer, SendingCalendarSerializer
from ..campaign.models import SendingObject
from .utils.smtp import send_mail_with_smtp
from .tasks import send_test_email

class EmailAccountListView(generics.ListCreateAPIView):
    queryset = EmailAccount.objects.all()
    serializer_class = EmailAccountSerializer
    permission_classes = (permissions.IsAuthenticated,)
    pagination_class = None

    def get_queryset(self):
        return super().get_queryset().filter(user=self.request.user.id)

    def post(self, request, *args, **kwargs):
        request.data['user'] = request.user.id

        is_valid, msg = utils.check_email(request=request)
        if not is_valid:
            return Response(msg, status=status.HTTP_400_BAD_REQUEST)

        return self.create(request, *args, **kwargs)


class EmailAccountView(generics.RetrieveUpdateDestroyAPIView):
    queryset = EmailAccount.objects.all()
    serializer_class = EmailAccountSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def update(self, request, *args, **kwargs):
        is_valid, msg = utils.check_email(request=request)
        if not is_valid:
            return Response(msg, status=status.HTTP_400_BAD_REQUEST)

        return super(EmailAccountView, self).update(request, *args, **kwargs)


class EmailAccountWarmingView(APIView):
    queryset = EmailAccount.objects.all()
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        # emailAccounts = EmailAccount.objects.filter(user=self.request.user.id)
        # warmingList = WarmingStatus.objects.filter()
        # for item in emailAccounts:
        #     for warming in warmingList:
        #         if item.id == warming.mail_account_id:
        #             item.warming = warming
        #             print("found")
        #             break
        # return Response(EmailAccount.objects.filter(user=self.request.user.id).prefetch_related(
        #         Prefetch('WarmingStatus_set',
        #                  queryset=WarmingStatus.objects.all(),
        #                  to_attr="WarmingStatus")
        #     ).values())
        return Response(WarmingStatus.objects.select_related("mail_account").filter(mail_account__user_id=self.request.user.id).values())

    def post(self, request, mail_account_id):
        warming_enabled = request.data['warming_enabled']
        warming = WarmingStatus.objects.filter(mail_account_id=mail_account_id)
        if len(warming) > 0:
            warming.update(warming_enabled=warming_enabled, status_updated_at=datetime.now())
        else:
            WarmingStatus.objects.create(mail_account_id=mail_account_id, warming_enabled=warming_enabled)
        return Response(True)


class SendingCalendarListView(generics.ListCreateAPIView):
    queryset = SendingCalendar.objects.all()
    serializer_class = SendingCalendarSerializer
    permission_classes = (permissions.IsAuthenticated,)
    pagination_class = None

    def get_queryset(self):
        return SendingCalendar.objects.filter(mail_account__user_id__exact=self.request.user.id)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class SendingCalendarView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SendingCalendar.objects.all()
    serializer_class = SendingCalendarSerializer
    permission_classes = (permissions.IsAuthenticated,)


class AvailableTimezonesView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        return Response(pytz.all_timezones)


class SendTestEmailView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        # mailAccountId = request.data['mailAccountId']
        # send_test_email.delay(mailAccountId)

        return Response("Ok")


class MyOpenTrackingView(OpenTrackingView):

    def notify_tracking_event(self, tracking_result):
        uuid = tracking_result.metadata['uuid']

        sending_object = SendingObject.objects.get(id=uuid)
        sending_object.opened += 1
        sending_object.opened_datetime = datetime.now(timezone.utc)
        sending_object.save()


class MyClickTrackingView(ClickTrackingView):

    def notify_tracking_event(self, tracking_result):
        uuid = tracking_result.metadata['uuid']

        sending_object = SendingObject.objects.get(id=uuid)
        sending_object.clicked += 1
        sending_object.clicked_datetime = datetime.now(timezone.utc)
        sending_object.save()
