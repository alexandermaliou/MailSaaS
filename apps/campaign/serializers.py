from rest_framework import serializers

from .models import (Campaign, CampaignLeadCatcher, CampaignRecipient,
                     DripEmailModel, EmailOnLinkClick, FollowUpEmail, CampaignLabel)


class CampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campaign
        fields = '__all__'


class CampaignEmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = CampaignRecipient
        fields = '__all__'


class FollowUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = FollowUpEmail
        fields = '__all__'


class OnclickSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailOnLinkClick
        fields = '__all__'


class DripEmailSerilizer(serializers.ModelSerializer):
    class Meta:
        model = DripEmailModel
        fields = '__all__'


class CampaignLeadCatcherSerializer(serializers.ModelSerializer):
    class Meta:
        model = CampaignLeadCatcher
        fields = '__all__'


class CampaignLabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = CampaignLabel
        fields = '__all__'


class ProspectsSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='full_name')
    created = serializers.SerializerMethodField()
    status = serializers.CharField(source='lead_status')
    campaign_count = serializers.SerializerMethodField()
    sent_count = serializers.SerializerMethodField()
    engaged_count = serializers.SerializerMethodField()

    class Meta:
        model = CampaignRecipient
        fields = '__all__'
        # fields = ('email', 'name', 'created', 'status', 'campaign_count', 'sent', 'engaged')

    def get_created(self, obj):
        return obj.created_date_time.strftime("%B %d, %Y")

    def get_campaign_count(self, obj):
        campaign_count = CampaignRecipient.objects.filter(email=obj.email).distinct('campaign').count()
        return campaign_count

    def get_sent_count(self, obj):
        sent = CampaignRecipient.objects.filter(email=obj.email, sent=True).count()
        return sent

    def get_engaged_count(self, obj):
        engaged = CampaignRecipient.objects.filter(email=obj.email, engaged=True).count()
        return engaged