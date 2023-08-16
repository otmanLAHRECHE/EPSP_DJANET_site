from rest_framework import serializers
from .models import *

class MessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Message
        fields = ['id', 'name', 'email', 'message']


class ArticleDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = ['id', 'title', 'desc', 'date', 'article_type', 'file']


class ArticleListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = ['id', 'title', 'desc', 'date', 'article_type', 'small_image']


class SlidingImagesSerializer(serializers.ModelSerializer):

    class Meta:
        model = SlidingImage
        fields = ['id', 'image']