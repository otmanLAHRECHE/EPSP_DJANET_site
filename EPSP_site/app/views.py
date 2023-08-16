import datetime

from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response

from .models import Article, Message, SlidingImage
from .serializers import *
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny


@api_view(['POST'])
@permission_classes((AllowAny, ))
def createNewMessage(request):
    if request.method == 'POST':
        name = request.data.pop('name')
        email = request.data.pop('email')
        message = request.data.pop('message')

        mes = Message.objects.create(name=name, email=email, message=message)


        if mes.id is not None:
            return Response(status=status.HTTP_201_CREATED, data = {"status":"message created"})
        else:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes((AllowAny, ))
def getAllSlidingImages(request):

    if request.method == 'GET':
        queryset = SlidingImage.objects.all()

        source_serial = SlidingImagesSerializer(queryset, many=True)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED)   
    



@api_view(['GET'])
@permission_classes((AllowAny, ))
def getListArticles(request):
    if request.method == 'GET':
        queryset = Article.objects.all().order_by('-date')

        source_serial = ArticleListSerializer(queryset, many=True)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED) 
    

@api_view(['GET'])
@permission_classes((AllowAny, ))
def getLastListArticles(request):
    if request.method == 'GET':
        queryset = Article.objects.all().order_by('-date')[:10]

        source_serial = ArticleListSerializer(queryset, many=True)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED) 
    

@api_view(['GET'])
@permission_classes((AllowAny, ))
def getSelectedArticle(request, id):
    if request.method == 'GET':
        queryset = Article.objects.get(id = id)

        source_serial = ArticleDetailsSerializer(queryset)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED)  