from django.db import models

# Create your models here.

class Person(models.Model):
    name = models.CharField(max_length=50) 
    edad = models.IntegerField()
    email = models.EmailField()
    phone = models.CharField(max_length=10)
    insulina = models.FloatField()
    glucosa = models.FloatField()
    peso = models.FloatField()
    presion = models.FloatField()
    diagnostico = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.name
    
class Facultad(models.Model):
    facultad_id = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=50)
    abreviatura = models.CharField(max_length=10)
    id_area = models.IntegerField()
    def __str__(self):
        return self.nombre