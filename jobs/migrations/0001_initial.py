# Generated by Django 3.0.7 on 2020-06-06 14:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('job_title', models.CharField(max_length=60)),
                ('company', models.CharField(max_length=50)),
                ('application_deadline', models.DateField(blank=True, null=True)),
                ('application_submitted', models.DateField(blank=True, null=True)),
                ('interview_date', models.DateTimeField(blank=True, null=True)),
                ('job_offer_date', models.DateField(blank=True, null=True)),
                ('offer_acceptance_date', models.DateField(blank=True, null=True)),
                ('job_url', models.CharField(max_length=400)),
                ('salary', models.IntegerField(blank=True, null=True)),
                ('city', models.CharField(max_length=60)),
                ('country', models.CharField(max_length=60)),
                ('last_modified', models.DateField(auto_now=True)),
            ],
        ),
    ]
