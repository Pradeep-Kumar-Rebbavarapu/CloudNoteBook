"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from api import views
from api.views import *

urlpatterns = [
    # path('signup/',Signup.as_view()),
    path('signup/',Signup.as_view()),
    # path('send_otp/',send_otp.as_view()),
    # path('verify_otp/',verify_otp.as_view()),
    path('Login/',Login.as_view()),
    path('getUser/',getUser.as_view()),
    path('AddNote/',AddNote.as_view()),
    path('GetUserNotes/',GetUserNotes.as_view()),
    path('DeleteNote/<int:pk>/',DeleteNote.as_view()),
    path('UpdateNote/<int:pk>/',UpdateNote.as_view()),
    
]