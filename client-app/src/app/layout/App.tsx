import React, { useState, useEffect } from 'react';
import {Container} from 'semantic-ui-react';
import axios from 'axios';
import { ITicket } from '../models/ticket';
import { NavBar } from '../../features/nav/NavBar';
import { TicketDashboard } from '../../features/tickets/dashboard/TicketDashboard';

const App = () => {
    const [tickets, setTickets] = useState<ITicket[]>([])

    useEffect(() => {
        axios
          .get<ITicket[]>('http://localhost:5000/api/tickets')
          .then(response => {
            setTickets(response.data)
          })
    }, []) //This ensures that useEffect runs one time only and doesnt continuously run
  
    return (
      <div>
       <NavBar />
       <Container style={{marginTop:'4em'}}>
        <TicketDashboard tickets={tickets}/>
       </Container>
       
      </div>
    )
}

export default App;
