from django.shortcuts import render
from .models import Country, City
from django.http import JsonResponse


# Create your views here.
def index(request):
    return render(request, 'index.html')


def get_countries(_request):
    countries = list(Country.objects.values())

    if len(countries) > 0:
        data = {'message': 'Success', 'countries': countries}
    else:
        data = {'message': 'Not found'}

    return JsonResponse(data)


def get_cities(_request, country_id):
    cities = list(City.objects.filter(country_id=country_id).values())

    if len(cities) > 0:
        data = {'message': 'Success', 'cities': cities}
    else:
        data = {'message': 'Not found'}

    return JsonResponse(data)
