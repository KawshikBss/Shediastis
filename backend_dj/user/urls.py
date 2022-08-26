from importlib.resources import path


from django.urls import path
from . import views


urlpatterns = [
    path('users-all/', views.all_users),
    path('users-single/<str:pk>', views.single_user),
    path('users-add/', views.add_user),
    path('users-update/<str:pk>', views.update_user),
    path('users-delete/<str:pk>', views.delete_user),
]
