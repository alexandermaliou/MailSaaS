# Generated by Django 3.1.4 on 2021-03-24 00:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('campaign', '0008_auto_20210320_0757'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='campaigns',
            name='assigned',
        ),
        migrations.RemoveField(
            model_name='campaigns',
            name='from_address',
        ),
        migrations.RemoveField(
            model_name='campaigns',
            name='label_name',
        ),
        migrations.DeleteModel(
            name='CampaignRecipients',
        ),
        migrations.DeleteModel(
            name='Campaigns',
        ),
    ]