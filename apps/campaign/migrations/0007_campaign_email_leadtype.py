# Generated by Django 3.1.4 on 2021-01-22 10:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('campaign', '0006_leadtype'),
    ]

    operations = [
        migrations.AddField(
            model_name='campaign_email',
            name='leadType',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='campaign.leadtype'),
            preserve_default=False,
        ),
    ]