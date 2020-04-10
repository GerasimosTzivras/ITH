import {observable, action } from 'mobx'
import { createContext } from 'react'
import { ITicket } from '../models/ticket'
import agent from '../api/agent'

class TicketStore {
    @observable tickets: ITicket[] = []
    @observable loadingInitial = false

    @action loadTickets = () => {
        this.loadingInitial = true
        agent.Tickets.list()
          .then(tickets => {
            tickets.forEach((ticket) => {
              ticket.dateIn = ticket.dateIn.split('.')[0]
              ticket.dateOut = ticket.dateOut.split('.')[0]
              this.tickets.push(ticket)
            })
          }).finally(() => this.loadingInitial = false)
    }
}

export default createContext(new TicketStore())