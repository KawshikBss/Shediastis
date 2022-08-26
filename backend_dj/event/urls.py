from django.urls import path
from . import views


urlpatterns = [
    path('events-all/', views.all_events),
    path('events-single/<str:pk>', views.single_event),
    path('events-add/', views.add_event),
    path('events-update/<str:pk>', views.update_event),
    path('events-delete/<str:pk>', views.delete_event),
    path('events-user-all/<str:pk>', views.single_user_all_events),
    path('events-user-single/<str:event_pk>/<str:user_pk>', views.single_user_single_event),
    path('events-user-completed/<str:pk>', views.single_user_completed_events),
    path('events-user-missed/<str:pk>', views.single_user_missed_events),
    path('events-user-active/<str:pk>', views.single_user_active_events),
]
