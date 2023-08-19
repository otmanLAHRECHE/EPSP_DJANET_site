
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include, re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('', include('app.urls')),
    path('Presentation/', include('frontend.urls')),
    path('Actualite/', include('frontend.urls')),
    path('Structure/', include('frontend.urls')),
    path('Contact/', include('frontend.urls')),
    path('ArticleDetails/', include('frontend.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
