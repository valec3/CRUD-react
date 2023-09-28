from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ProgramaSerializer, FacultadSerializer
from .models import Programa,Facultad

from django.db import connection
from django.http import JsonResponse


# Create your views here.
class ProgramaView(viewsets.ModelViewSet):
    serializer_class = ProgramaSerializer
    queryset = Programa.objects.all()

class FacultadView(viewsets.ModelViewSet):
    serializer_class = FacultadSerializer
    queryset = Facultad.objects.all()
    

def obtener_reporte(request):
    with connection.cursor() as cursor:
        # Ejecuta tu consulta SQL personalizada aquí
        cursor.execute("""
                    SELECT ROW_NUMBER() OVER (ORDER BY dfa.facultad_id) AS numero_registro, dfa.abreviatura AS Abreviatura, dpr.nombre AS Programas
FROM modelo_facultad AS dfa
INNER JOIN modelo_programa AS dpr
ON dfa.facultad_id = dpr.facultad_id;
                    """)
        # Obtén los resultados de la consulta
        results = cursor.fetchall()

    # Convierte los resultados en una estructura que se pueda serializar a JSON
    data = results

    return JsonResponse(data, safe=False)
