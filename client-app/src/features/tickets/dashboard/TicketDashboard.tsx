import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { ITicket } from '../../../app/models/ticket'
import { TicketList } from './TicketList'

interface IProps {
    tickets: ITicket[]
}

export const TicketDashboard: React.FC<IProps> = ({tickets}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <TicketList tickets={tickets}/>    
            </Grid.Column>
        </Grid>
    )
}
