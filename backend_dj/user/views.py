from urllib import response
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User
from .serializers import UserSerializer


@api_view(['GET'])
def all_users(request):
    users = User.objects.all()
    data = UserSerializer(users, many=True)
    return Response(data.data)
    
@api_view(['GET'])
def single_user(request, pk):
    user = User.objects.get(id=pk)
    data = UserSerializer(user)
    return Response(data.data)
    
@api_view(['POST'])
def add_user(request):
    user = request.data
    data = UserSerializer(data=user)
    if data.is_valid():
        data.save()
    return Response(data.data)

@api_view(['PUT'])
def update_user(request, pk):
    user = User.objects.get(id=pk)
    userData = request.data
    data = UserSerializer(instance=user, data=userData)
    if data.is_valid():
        data.save()
    return Response(data.data)

@api_view(['DELETE'])
def delete_user(request, pk):
    user = User.objects.get(id=pk)
    if user:
        user.delete()
    return Response({"message": "DELETED"})
