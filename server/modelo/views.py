from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ProgramaSerializer, FacultadSerializer
from .models import Programa,Facultad

# Create your views here.
class ProgramaView(viewsets.ModelViewSet):
    serializer_class = ProgramaSerializer
    queryset = Programa.objects.all()

class FacultadView(viewsets.ModelViewSet):
    serializer_class = FacultadSerializer
    queryset = Facultad.objects.all()