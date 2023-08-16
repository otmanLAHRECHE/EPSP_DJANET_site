
from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('', include('app.urls')),
    re_path(r'^(?:.*)/?$', include('frontend.urls')),
]
