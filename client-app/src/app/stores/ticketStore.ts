import {observable, action } from 'mobx'
import { createContext } from 'react'
import { ITicket } from '../models/ticket'
import agent from '../api/agent'

class TicketStore {
    @observable tickets: ITicket[] = []
    @observable selectedTicket: ITicket | undefined 
    @observable loadingInitial = false
    @observable editMode = false

    @action loadTickets = async () => {
        this.loadingInitial = true
        try {
          const tickets = await agent.Tickets.list()
          tickets.forEach(ticket => {
            ticket.dateIn = ticket.dateIn.split('.')[0]
            ticket.dateOut = ticket.dateOut.split('.')[0]
            this.tickets.push(ticket)
          })
          this.loadingInitial = false
        } catch (error) {
          console.log(error)
          this.loadingInitial = false
        }
    }

    @action selectTicket = (id: string) => {
      this.selectedTicket = this.tickets.find(a => a.id === id)
      this.editMode = false 
    }
}

export default createContext(new TicketStore())