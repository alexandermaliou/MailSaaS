# Generated by Django 3.1.4 on 2021-02-11 11:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mailaccounts', '0002_auto_20210211_1708'),
        ('campaign', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campaign',
            name='from_address',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='mailaccounts.emailaccount'),
        ),
    ]
