# Generated by Django 4.2.5 on 2023-09-28 05:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('modelo', '0004_alter_facultad_abreviatura_alter_facultad_nombre_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='programa',
            name='cod_programa',
            field=models.CharField(max_length=100),
        ),
    ]
