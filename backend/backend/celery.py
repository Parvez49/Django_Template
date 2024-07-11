import os

from celery import Celery
from datetime import timedelta


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
app = Celery("backend")
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks()


# Configure Celery Beat schedule for the task
# app.conf.beat_schedule = {
#     "send-appointment-reminders": {
#         "task": "App.tasks.Task_Name",
#         "schedule": timedelta(minutes=1),
#     },
# }