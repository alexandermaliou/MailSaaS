# Generated by Django 3.1.4 on 2021-03-18 22:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('campaign', '0005_auto_20210319_0558'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campaignrecipients',
            name='campaign',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='campaign.campaigns'),
        ),
    ]
