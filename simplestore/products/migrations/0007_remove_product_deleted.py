# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-08-31 18:55
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_product_deleted'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='deleted',
        ),
    ]
