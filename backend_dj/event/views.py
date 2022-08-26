from asyncio import events
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Event
from .serializers import EventSerializer


@api_view(['GET'])
def all_events(request):
    events = Event.objects.all()
    data = EventSerializer(events, many=True)
    return Response(data.data)

@api_view(['GET'])
def single_event(request, pk):
    event = Event.objects.get(id=pk)
    data = EventSerializer(event)
    return Response(data.data)

@api_view(['POST'])
def add_event(request):
    event = EventSerializer(data=request.data)
    if event.is_valid():
        event.save()
    return Response(event.data)

@api_view(['PUT'])
def update_event(request, pk):
    event = Event.objects.get(id=pk)
    data = EventSerializer(instance=event, data=request.data)
    if data.is_valid():
        data.save()
    return Response(data.data)

@api_view(['DELETE'])
def delete_event(request, pk):
    event = Event.objects.get(id=pk)
    if event:
        event.delete()
    return Response({"message": "DELETED"})

@api_view(['GET'])
def single_user_all_events(request, pk):
    events = Event.objects.filter(user=pk)
    data = EventSerializer(events, many=True)
    return Response(data.data)
    
@api_view(['GET'])
def single_user_single_event(request, event_pk, user_pk):
    event = Event.objects.get(id=event_pk, user=user_pk)
    data = EventSerializer(event)
    return Response(data.data)

@api_view(['GET'])
def single_user_completed_events(request, pk):
    events = Event.objects.filter(user=pk, completed=True)
    data = EventSerializer(events, many=True)
    return Response(data.data)
    
@api_view(['GET'])
def single_user_missed_events(request, pk):
    events = Event.objects.filter(user=pk, missed=True)
    data = EventSerializer(events, many=True)
    return Response(data.data)
    
@api_view(['GET'])
def single_user_active_events(request, pk):
    events = Event.objects.filter(user=pk, active=True)
    data = EventSerializer(events, many=True)
    return Response(data.data)
