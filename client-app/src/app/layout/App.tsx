import React, { useState, useEffect } from 'react';
import {Container} from 'semantic-ui-react';
import { ITicket } from '../models/ticket';
import { NavBar } from '../../features/nav/NavBar';
import { TicketDashboard } from '../../features/tickets/dashboard/TicketDashboard';
import agent from '../api/agent';

const App = () => {
    const [tickets, setTickets] = useState<ITicket[]>([])
    const [selectedTicket, setSelectedTicket] = useState<ITicket | null>(null)
    const [editMode, setEditMode] = useState(false)

    const handleSelectedTicket = (id: string) => {
      setSelectedTicket(tickets.filter(a => a.id ===id)[0])
      setEditMode(false)
    }

    const handleOpenCreateForm = () => {
      setSelectedTicket(null)
      setEditMode(true)
    }

    const handleCreateTicket = (ticket: ITicket) => {
      agent.Tickets.create(ticket).then(() => {
        setTickets([...tickets, ticket])
        setSelectedTicket(ticket)
        setEditMode(false)
      })
    }

    const handleEditTicket = (ticket: ITicket) => {
      agent.Tickets.update(ticket).then(() => {
        setTickets([...tickets.filter(a => a.id !== ticket.id), ticket])
        setSelectedTicket(ticket)
        setEditMode(false)
      })
    }

    const handleDeleteTicket = (id: string) => {
      agent.Tickets.delete(id).then(() => {
         setTickets([...tickets.filter(a => a.id !== id)])
      })
    }

    useEffect(() => {
       agent.Tickets.list()
          .then(response => {
            let tickets: ITicket[] = []
            response.forEach((ticket) => {
              ticket.dateIn = ticket.dateIn.split('.')[0]
              ticket.dateOut = ticket.dateOut.split('.')[0]
              tickets.push(ticket)
            })
            setTickets(tickets)
          })
    }, []) //This ensures that useEffect runs one time only and doesnt continuously run
  
    return (
      <div>
       <NavBar openCreateForm={handleOpenCreateForm}/>
       <Container style={{marginTop:'4em'}}>
        <TicketDashboard 
          tickets={tickets} 
          selectTicket={handleSelectedTicket}
          selectedTicket={selectedTicket} 
          setSelectedTicket={setSelectedTicket}
          editMode={editMode}
          setEditMode={setEditMode}
          createTicket={handleCreateTicket}
          editTicket={handleEditTicket}
          deleteTicket={handleDeleteTicket}
          // selectedTicket={selectedTicket!} 
          //the exclamation mark here show that is basically going to define it as either a ticket 
          //or no so we're kind of overriding the type safety here and this is fine in this particular circumstance
          //The error is show from :      const [selectedTicket, setSelectedTicket] = useState<ITicket | null>(null)
          />
       </Container>
       
      </div>
    )
}

export default App;
