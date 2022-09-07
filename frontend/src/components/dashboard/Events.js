import React, { useState } from 'react'
import styled from 'styled-components'
import { AiFillPlusCircle } from 'react-icons/ai'
import SingleEvent from './SingleEvent'
import {
  getEvents,
  getSingleEvent,
  addEvent,
  deleteEvent,
  setCompletedEvent
} from '../../api/EventRequests'
import {
  useQuery,
  useMutation,
  useQueryClient,
} from 'react-query'

function Events() {
  const queryClient = new useQueryClient()
  const {
    isLoading,
    isError,
    error,
    data: events
  } = useQuery('events', getEvents)

  const addEventMutation = useMutation('events-add', addEvent, {
    onSuccess: () => {
      queryClient.invalidateQueries('events')
    },
    onError: (error) => {
      console.log(error)
    }
  })
  
  const deleteEventMutation = useMutation('events-delete', deleteEvent, {
    onSuccess: () => {
      queryClient.invalidateQueries('events')
    }
  })

  const completeEventMutation = useMutation('events-set-completed', setCompletedEvent, {
    onSuccess: () => {
      queryClient.invalidateQueries('events')
    }
  })

  const [addEventExtended, setAddEventExtended] = useState(false)
  const [newEvent, setNewEvent] = useState('')

  return (
    <Container>
      <EventsHeader>
        <HeaderText>Today's Events</HeaderText>
        <AddEventInput
          extended={ addEventExtended }
          onChange={ (e) => {
            setNewEvent(e.target.value)
          }}
        />
        <EventBtn onClick={() => {
          if (addEventExtended) {
            if (newEvent.length > 0) {
              addEventMutation.mutate({
                title: newEvent,
                description: newEvent,
                user: '817e9283-c422-4b81-a857-cea3dd7570f8'
              });
              setNewEvent('');
            }
            setAddEventExtended(false);
          } else {
            setAddEventExtended(true);
          }
        }}>
          <AiFillPlusCircle />
        </EventBtn>
      </EventsHeader>
      <StyledEvents>
        {
          (isLoading)?
            (<h6>Loading...</h6>):
          (isError)?
            (<h6>{ error }</h6>):
          events.map(event => {
            return (<SingleEvent
              key={ event.id }
              completed={ event.completed }
              missed={ event.missed }
              dueTime={ '9:30AM' }
              
              deleteAction={ () => { deleteEventMutation.mutate(event.id); queryClient.invalidateQueries('events'); } }
              setCompletedAction={ () => { completeEventMutation.mutate(event.id); queryClient.invalidateQueries('events'); } }
            >
              { event.description }
            </SingleEvent>)
          })
        }
      </StyledEvents>
    </Container>
  )
}

const Container = styled.div`
height: fit-content;
width: 50%;
margin: 10px;
padding: 10px;
border-radius: 20px;
background-color: rgba(221, 221, 221, 30%);
`

const EventsHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0 10px;
`

const HeaderText = styled.h3`
color: #DDD;
`

const AddEventInput = styled.input`
background-color: rgba(221, 221, 221, 30%);
color: #DDD;
border-radius: 20px;
border: none;
padding: 5px 20px;
width: ${ props => props.extended? '50%': '0%' };
opacity: ${ props => props.extended? '1': '0' };
transition: 1s ease-in-out;
pointer-events: ${ props => props.extended? 'all': 'none' };
margin: 0 10px;
`

const EventBtn = styled.button`
color: #6C63FF;
background: transparent;
border: none;
cursor: pointer;
  svg {
    width: 28px;
    height: 28px;
  }
`

const StyledEvents = styled.div`
display: flex;
flex-direction: column;
height: 36vh;
overflow: hidden;
overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(23, 23, 23, 70%);
        border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb:hover {
      border: 1px solid rgba(221, 221, 221, 30%);
  }
`

export default Events