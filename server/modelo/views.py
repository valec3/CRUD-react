from django.shortcuts import render
from rest_framework import viewsets
from .serializer import PersonSerializer, FacultadSerializer
from .models import Person,Facultad

# Create your views here.
class PersonView(viewsets.ModelViewSet):
    serializer_class = PersonSerializer
    queryset = Person.objects.all()

class FacultadView(viewsets.ModelViewSet):
    serializer_class = FacultadSerializer
    queryset = Facultad.objects.all()