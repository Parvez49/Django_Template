
from rest_framework import serializers
from .models import User


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField(required=True)
    password = serializers.CharField(required=True, write_only=True)


class UserRegistrationSerializer(serializers.ModelSerializer):
    # password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    slug = serializers.SlugField(read_only=True)

    class Meta:
        model = User
        fields = ('id','first_name','last_name','slug','email','gender','date_of_birth','country','country_code', 'phone','favourite_color','profile_photo', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    

