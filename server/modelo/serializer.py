from rest_framework import serializers
from .models import Person, Facultad


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        # fields = ('id','name','edad','email','phone','insulina','glucosa','peso','presion','diagnostico')
        fields = '__all__' 
        
class FacultadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Facultad
        fields = '__all__'