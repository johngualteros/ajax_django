from django.db import models


# Create your models here.
class Country(models.Model):
    name = models.CharField(max_length=50)
    number_habitants = models.PositiveBigIntegerField()

    def __str__(self):
        return "{}".format(self.name)

    class Meta:
        db_table = 'country'


class City(models.Model):
    name = models.CharField(max_length=50)
    mayor = models.CharField(max_length=100)
    country = models.ForeignKey(Country, null=False, blank=False, on_delete=models.CASCADE)

    def __str__(self):
        return "{} ({})".format(self.name,self.country.name)

    class Meta:
        db_table = 'city'
