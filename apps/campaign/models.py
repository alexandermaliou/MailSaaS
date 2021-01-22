from django.db import models
from apps.users.models import CustomUser


class Campaign(models.Model):
    title = models.CharField(max_length=200)
    fromAddress = models.CharField(max_length=200)
    csvFile_op1 = models.FileField(upload_to='csv_uploads/', blank=True, null=True)
    created_date_time = models.DateTimeField(auto_now=True)
    assigned = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    trackOpens = models.BooleanField(default=False)
    trackLinkClick = models.BooleanField(default=False)
    scheduleThisSend = models.BooleanField(default=False)
    scheduleDateTime = models.DateTimeField(auto_now_add=True, blank=True, null=True) 
    termsAndLaws = models.BooleanField(default=False)

    def __str__(self):
        return self.title

    
LEAD_TYPE =( 
    ("none", "none"), 
    ("openLead", "openLead"), 
    ("wonLead", "wonLead"), 
    ("lostLead", "lostLead"), 
    ("ignoredLead", "ignoredLead"), 
) 
class Campaign_email(models.Model):
    campaign = models.ForeignKey('Campaign', on_delete=models.CASCADE)
    full_name = models.CharField(max_length=100,blank=True, null=True)
    email = models.CharField(max_length=200)
    subject = models.CharField(max_length=2000, blank=True, null=True)
    emailBody = models.TextField(blank=True, null=True)
    sent = models.BooleanField(default=False)
    leads = models.BooleanField(default=False)
    replies = models.BooleanField(default=False)
    opens = models.BooleanField(default=False)
    bounces = models.BooleanField(default=False)
    leadStatus = models.CharField(max_length=32,choices=LEAD_TYPE,default='none',blank = True, null = True)

    def __str__(self):
        return str(self.campaign)


class Follow_up_email(models.Model):
    campaign = models.ForeignKey('Campaign', on_delete=models.CASCADE)
    waitDays = models.PositiveIntegerField()
    subject = models.CharField(max_length=2000)
    emailBody = models.TextField()

    def __str__(self):
        return str(self.campaign)


class Drip_email(models.Model):
    campaign = models.ForeignKey('Campaign', on_delete=models.CASCADE)
    waitDays = models.PositiveIntegerField()
    subject = models.CharField(max_length=2000)
    emailBody = models.TextField()

    def __str__(self):
        return str(self.campaign)


class On_Link_Click(models.Model):
    campaign = models.ForeignKey('Campaign', on_delete=models.CASCADE)
    waitDays = models.PositiveIntegerField()
    url = models.CharField(max_length=2000)
    subject = models.CharField(max_length=2000)
    emailBody = models.TextField()

    def __str__(self):
        return str(self.campaign)