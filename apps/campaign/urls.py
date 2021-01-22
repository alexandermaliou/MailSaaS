from django.urls import path
from . import views


urlpatterns = [
    path('start/', views.create_campaign_start.as_view(), name='create_campaign_start'),
    path('recipients/', views.create_campaign_recipients.as_view(), name='create_campaign_recipients'),
    path('message/', views.create_campaign_message.as_view(), name='create_campaign_message'),
    path('personalize/', views.CampaignGetAllEmailsPreview.as_view(), name='CampaignGetAllEmailsPreview'),
    path('options/', views.create_campaign_options.as_view(), name='create_campaign_options'),
    path('view/',views.CampaignView.as_view(),name = 'campaign_view'),
    path('leads_catcher/',views.LeadsView.as_view(),name = 'leads_catcher'),
    path('Get_overview/',views.Get_campaign_overview.as_view(),name = 'Get_campaign_overview'),
]