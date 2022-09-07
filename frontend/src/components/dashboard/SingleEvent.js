import React from 'react'
import styled from 'styled-components'
import { FaBars, FaTrashAlt } from 'react-icons/fa'

function SingleEvent({ children, completed, missed, dueTime, deleteAction, setCompletedAction }) {
  return (
    <Event>
        <EventInfoContainer>
            <InfoText>
                <EventCheckbox
                    onClick={ setCompletedAction }
                    completed={ completed }
                    missed={ missed }
                />
                <EventText
                    completed={ completed }
                    missed={ missed }
                >
                    { children }
                </EventText>
            </InfoText>
            <InfoTime>
                { dueTime }
            </InfoTime>
        </EventInfoContainer>
        <EventActionsContainer>
            <EventActions>
                <FaBars />
            </EventActions>
            <EventActions onClick={ deleteAction }>
                <FaTrashAlt />
            </EventActions>
        </EventActionsContainer>
    </Event>
  )
}

const Event = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 6px 20px;
gap: 20px;
`

const EventText = styled.p`
font-size: 16px;
color: ${props => (props.missed)? '#FF6363': '#DDD'};
text-decoration: ${props => (props.completed || props.missed)? 'line-through': 'none'};
`

const EventCheckbox = styled.button`
cursor: pointer;
width: 25px;
height: 25px;
background-color: ${props => (props.completed)?
                '#6C63FF': (props.missed)?
                '#FF6363': 'rgba(35, 35, 35, 50%)'};
border-radius: 5px;
border: 3px dashed ${props => (props.completed || props.missed)?
                'rgba(35, 35, 35, 50%)': '#6C63FF'};
`

const EventInfoContainer = styled.div`
display: flex;
flex-direction:row;
justify-content: space-between;
align-items: center;
background-color: rgba(35, 35, 35, 50%);
width: 100%;
padding: 0 20px;
border-radius: 20px;
`

const InfoText = styled.div`
display: flex;
flex-direction:row;
align-items: center;
gap: 10px;
`

const InfoTime = styled.div`
color: #232323;
background-color: rgba(221, 221, 221, 30%);
border-radius: 20px;
padding: 10px;
`

const EventActionsContainer = styled.div`
display: flex;
gap: 20px;
`

const EventActions = styled.button`
background: transparent;
cursor: pointer;
border: none;
color: rgba(35, 35, 35, 50%);
width: 15px;
height: 15px;
    &:hover {
        color: #6C63FF;
    }
    svg {
        width: 15px;
        height: 15px;
    }
`

export default SingleEvent