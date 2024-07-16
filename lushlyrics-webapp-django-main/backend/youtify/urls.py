from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect
from main.views import redirect_to_login
# def redirect_to_login(request):
#     return redirect('http://localhost:5173/login')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/',include('djoser.urls.jwt')),
    path('auth/', include('djoser.urls.authtoken')),
    path('api/', include('main.urls')),
    path('',redirect_to_login),
]

