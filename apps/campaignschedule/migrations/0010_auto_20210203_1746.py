# Generated by Django 3.1.4 on 2021-02-03 12:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('campaignschedule', '0009_schedule_next_email_send_at_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='schedule',
            name='block_days',
            field=models.CharField(choices=[('sunday', 'Sunday'), ('monday', 'Monday'), ('tuesday', 'Tuesday'), ('wednesday', 'Wednesday'), ('thursday', 'Thursday'), ('friday', 'Friday'), ('saturday', 'Saturday')], max_length=50),
        ),
    ]
