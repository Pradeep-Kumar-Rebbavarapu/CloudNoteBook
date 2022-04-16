from django.contrib import admin
from django.contrib.auth.models import User
from .models import *
# Register your models here.

@admin.register(Note)
class StudentAdmin(admin.ModelAdmin):
    list_display=['note_id','title','desc','tag','timestamp']