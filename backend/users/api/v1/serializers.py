from rest_framework import serializers
from users.models import BVhgvh


class BVhgvhSerializer(serializers.ModelSerializer):
    class Meta:
        model = BVhgvh
        fields = "__all__"
