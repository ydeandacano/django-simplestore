# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-06-14 11:08
from __future__ import unicode_literals

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('checkout', '0007_remove_order_payment_method'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='slug',
            field=models.UUIDField(default=uuid.uuid4, editable=False, null=True),
        ),
    ]