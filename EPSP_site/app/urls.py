
from django.urls import path
from .views import *
from app import views


urlpatterns = [
    path('api/create_message/', views.createNewMessage),
    path('api/get_all_sliding_images/', views.getAllSlidingImages),
    path('api/get_list_article/', views.getListArticles),
    path('api/get_selected_article/<int:id>', views.getSelectedArticle),

]