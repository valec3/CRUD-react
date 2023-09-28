from django.db import models

# Create your models here.

class Programa(models.Model):
    programa_id = models.IntegerField(primary_key=True)
    facultad_id = models.IntegerField()
    nombre = models.CharField(max_length=100)
    cod_programa = models.CharField(max_length=100)
    tipo = models.CharField(max_length=10)
    
    def __str__(self) -> str:
        return self.nombre
    
class Facultad(models.Model):
    facultad_id = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=100)
    abreviatura = models.CharField(max_length=20)
    id_area = models.IntegerField()
    def __str__(self):
        return self.nombre