from django.db import models



class Message(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=130)
    email = models.CharField(max_length=130)
    message = models.CharField()


class SlidingImage(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    image = models.ImageField(upload_to='images/')


class Article(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField()
    desc = models.CharField()
    date = models.DateField()
    article_type = models.CharField(max_length=50)
    small_image = models.ImageField(upload_to='images_art/')
    file = models.FileField(upload_to='files')


    