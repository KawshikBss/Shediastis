import email
from django.db import models
import uuid


class User(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    username = models.CharField(max_length=200, null=False, blank=False)
    email = models.CharField(max_length=200, null=False, blank=False, unique=True)
    profile_img = models.CharField(max_length=500, null=True, blank=True)
    password = models.CharField(max_length=200, null=False, blank=False)
    verified = models.BooleanField(default=False, null=True, blank=True)
    admin = models.BooleanField(default=False, null=True, blank=True)
    active = models.BooleanField(default=False, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True, editable=False, null=False, blank=False)
