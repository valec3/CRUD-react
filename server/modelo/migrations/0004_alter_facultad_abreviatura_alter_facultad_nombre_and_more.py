# Generated by Django 4.2.5 on 2023-09-28 05:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('modelo', '0003_programa_delete_person'),
    ]

    operations = [
        migrations.AlterField(
            model_name='facultad',
            name='abreviatura',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='facultad',
            name='nombre',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='programa',
            name='nombre',
            field=models.CharField(max_length=100),
        ),
    ]
