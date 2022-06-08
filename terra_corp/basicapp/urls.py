from django.urls import path
from basicapp import views

app_name = 'basicapp'

urlpatterns=[
    path('carrers/', views.carrers, name = 'carrers'),
    path('about_me/', views.about_me, name = 'about_me'),
    path('essay/', views.essay, name='essay'),
]
