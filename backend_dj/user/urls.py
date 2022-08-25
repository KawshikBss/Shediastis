from importlib.resources import path


from django.urls import path
from . import views


urlpatterns = [
    path('users-all/', views.all_users),
]
