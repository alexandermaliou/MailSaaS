# Generated by Django 3.1.4 on 2021-03-25 22:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mailaccounts', '0010_merge_20210326_0602'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='emailaccount',
            name='warming_enabled',
        ),
        migrations.AlterField(
            model_name='calendarstatus',
            name='updated_datetime',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='sendingcalendar',
            name='block_days',
            field=models.PositiveIntegerField(default=96),
        ),
        migrations.CreateModel(
            name='WarmingStatus',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('warming_enabled', models.BooleanField(default=False)),
                ('days_passed', models.IntegerField(default=0)),
                ('status_updated_at', models.DateTimeField()),
                ('mail_account', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mailaccounts.emailaccount')),
            ],
        ),
        migrations.CreateModel(
            name='WarmingLog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sent_at', models.DateTimeField(auto_now_add=True)),
                ('mail_account', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mailaccounts.emailaccount')),
            ],
        ),
    ]
