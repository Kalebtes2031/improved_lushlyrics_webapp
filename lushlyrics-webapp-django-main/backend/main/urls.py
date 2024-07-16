from django.urls import path
from . import views
from django.conf import settings

urlpatterns = [
    path("", views.default, name='default'),
    path("playlist/", views.playlist, name='your_playlists'),
    path("search/", views.search, name='search_page'),
    path('logout/', views.logout_view, name='logout'),  # Redirect to home after logout
 
]