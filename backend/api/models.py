from django.db import models
from django.utils.timezone import now
from django.contrib.auth.models import User
from numpy import integer
# Create your models here.
import datetime
from datetime import date




class Note(models.Model):
    note_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE,
                             related_name='user_id', default=None, blank=True, null=True)
    title = models.CharField(max_length=225, null=True,
                             blank=True, default=None)
    desc = models.CharField(max_length=1000, null=True,
                            blank=True, default=None)
    tag = models.CharField(max_length=1000, null=True,
                           blank=True, default=None)
    datestamp = models.CharField(max_length=225, default=None)
    timestamp = models.CharField(max_length=225, default=None)
