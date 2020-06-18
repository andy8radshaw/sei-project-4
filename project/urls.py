from django.contrib import admin
from django.urls import path, include, re_path
from .views import index

urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/auth/', include('jwt_auth.urls')),
    path('api/resources/', include('resources.urls')),
    path('api/jobs/', include('jobs.urls')),
    path('api/job-status/', include('job_status.urls')),
    path('api/tasks/', include('tasks.urls')),
    path('api/contacts/', include('contacts.urls')),
    re_path(r'^.*$', index),
]
