from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name='index'),
    path('countries/', views.get_countries, name="getCountries"),
    path('cities/<int:country_id>', views.get_cities, name="getCities")
]