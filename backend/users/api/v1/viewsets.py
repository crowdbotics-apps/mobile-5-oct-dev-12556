from rest_framework import authentication
from users.models import BVhgvh
from .serializers import BVhgvhSerializer
from rest_framework import viewsets


class BVhgvhViewSet(viewsets.ModelViewSet):
    serializer_class = BVhgvhSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = BVhgvh.objects.all()
