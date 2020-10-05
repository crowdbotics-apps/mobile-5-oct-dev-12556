from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import BVhgvhViewSet

router = DefaultRouter()
router.register("bvhgvh", BVhgvhViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
