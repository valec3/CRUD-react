# Generated by Django 4.2.5 on 2023-09-14 16:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('edad', models.IntegerField()),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=10)),
                ('insulina', models.FloatField()),
                ('glucosa', models.FloatField()),
                ('peso', models.FloatField()),
                ('presion', models.FloatField()),
                ('diagnostico', models.BooleanField(default=False)),
            ],
        ),
    ]
