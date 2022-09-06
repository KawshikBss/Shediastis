import React from 'react'
import styled from 'styled-components'
import { AiFillPlusCircle } from 'react-icons/ai'
import SingleEvent from './SingleEvent'
import {
  getEvents,
  getSingleEvent,
  addEvent,
  deleteEvent,
} from '../../api/EventRequests'
import {
  useQuery,
  useMutation,
} from 'react-query'

function Events() {
  const {
    isLoading,
    isError,
    error,
    data: events
  } = useQuery('events', getEvents)

  return (
    <Container>
      <EventsHeader>
        <HeaderText>Today's Events</HeaderText>
        <EventBtn>
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
              completed={ event.completed }
              missed={ event.missed }
              dueTime={ '9:30AM' }
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