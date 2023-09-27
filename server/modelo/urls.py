from django.urls import path ,include
from rest_framework import routers
from .views import PersonView, FacultadView
# Documentacion
from rest_framework.documentation import include_docs_urls
# Api versioning
router = routers.DefaultRouter()
router.register(r"modelo", PersonView, basename="person")
router.register(r"facultad", FacultadView, basename="facultad")

urlpatterns = [
    path("api/v1/",include(router.urls)),
    path("docs/",include_docs_urls(title="Person API",description="API para el modelo")),
    
]
