import React, { useState, useEffect, useContext } from 'react';
import {Container} from 'semantic-ui-react';
import { ITicket } from '../models/ticket';
import { NavBar } from '../../features/nav/NavBar';
import  TicketDashboard  from '../../features/tickets/dashboard/TicketDashboard';
import agent from '../api/agent';
import { LoadingComponent } from './LoadingComponent';
import TicketStore from '../stores/ticketStore'
import {observer} from 'mobx-react-lite'

const App = () => {
    const ticketStore = useContext(TicketStore)
    const [tickets, setTickets] = useState<ITicket[]>([])
    const [selectedTicket, setSelectedTicket] = useState<ITicket | null>(null)
    const [editMode, setEditMode] = useState(false)
    const [loading, setLoading] = useState(true)
    const [submitting, setSubmitting] = useState(false)

    const handleSelectedTicket = (id: string) => {
      setSelectedTicket(tickets.filter(a => a.id ===id)[0])
      setEditMode(false)
    }

    const handleOpenCreateForm = () => {
      setSelectedTicket(null)
      setEditMode(true)
    }

    const handleCreateTicket = (ticket: ITicket) => {
      setSubmitting(true)
      agent.Tickets.create(ticket).then(() => {
        setTickets([...tickets, ticket])
        setSelectedTicket(ticket)
        setEditMode(false)
      }).then(() => setSubmitting(false))
    }

    const handleEditTicket = (ticket: ITicket) => {
      setSubmitting(true)
      agent.Tickets.update(ticket).then(() => {
        setTickets([...tickets.filter(a => a.id !== ticket.id), ticket])
        setSelectedTicket(ticket)
        setEditMode(false)
      }).then(() => setSubmitting(false))
    }

    const handleDeleteTicket = (id: string) => {
      setSubmitting(true)
      agent.Tickets.delete(id).then(() => {
         setTickets([...tickets.filter(a => a.id !== id)])
      }).then(() => setSubmitting(false))
    }

    useEffect(() => {
       ticketStore.loadTickets()
    }, [ticketStore]) //This ensures that useEffect runs one time only and doesnt continuously run
  
    if (ticketStore.loadingInitial) return <LoadingComponent content='Loading...'/>

    return (
      <div>
       <NavBar openCreateForm={handleOpenCreateForm}/>
       <Container style={{marginTop:'4em'}}>
        <TicketDashboard 
          tickets={ticketStore.tickets} 
          selectTicket={handleSelectedTicket}
          selectedTicket={selectedTicket} 
          setSelectedTicket={setSelectedTicket}
          editMode={editMode}
          setEditMode={setEditMode}
          createTicket={handleCreateTicket}
          editTicket={handleEditTicket}
          deleteTicket={handleDeleteTicket}
          submitting={submitting}
          // selectedTicket={selectedTicket!} 
          //the exclamation mark here show that is basically going to define it as either a ticket 
          //or no so we're kind of overriding the type safety here and this is fine in this particular circumstance
          //The error is show from :      const [selectedTicket, setSelectedTicket] = useState<ITicket | null>(null)
          />
       </Container>
       
      </div>
    )
}

export default observer(App);
