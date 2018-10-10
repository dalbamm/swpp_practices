from django.urls import path

from . import views

urlpatterns = [
	path('', views.index, name='index'),
	path('<int:num>/',views.id, name='idid'),
	path('<str:namestr>/',views.namename, name='idid2'),
]
