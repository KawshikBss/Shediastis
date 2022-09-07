import uuid
from django.db import models

from user.models import User


class Event(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, null=False, blank=False)
    title = models.CharField(max_length=50, null=False, blank=False)
    description = models.TextField(null=True, blank=True, max_length=500)
    completed = models.BooleanField(default=False, null=True, blank=True)
    missed = models.BooleanField(default=False, null=True, blank=True)
    active = models.BooleanField(default=True, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True, null=False, blank=False, editable=False)
    due = models.DateTimeField(auto_now_add=True, null=False, blank=False, editable=True)

    @property
    def set_completed(self):
        self.completed = True
        self.missed = False
        self.active = False
