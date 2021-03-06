import React, { useContext } from 'react'
import { Segment, Item, Button } from 'semantic-ui-react'
import { ITicket } from '../../../app/models/ticket'
import { observer } from 'mobx-react-lite'
import TicketStore from '../../../app/stores/ticketStore'

interface IProps {
    deleteTicket: (id: string) => void
    submitting: boolean
}

const TicketList: React.FC<IProps> = ({
    deleteTicket,
    submitting
}) => {
    const ticketStore = useContext(TicketStore)
    const {tickets, selectTicket} = ticketStore
    return (
        <Segment>
            <Item.Group divided>
                {tickets.map(ticket => (
                    <Item key={ticket.id}>
                        <Item.Content>
                            <Item.Header as='a'>{ticket.title}</Item.Header>
                            <Item.Meta>{ticket.dateIn}</Item.Meta>
                            <Item.Description>
                                <div>{ticket.category}</div>
                                <div>{ticket.description}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button 
                                    onClick={() => selectTicket(ticket.id)} 
                                    floated='right' 
                                    content='View' 
                                    color='blue'/>
                                <Button 
                                    onClick={() => deleteTicket(ticket.id)} 
                                    floated='right' 
                                    content='Delete' 
                                    color='red'/>
                                <Button 
                                    onClick={() => selectTicket(ticket.id)} 
                                    floated='right' 
                                    content='Preview' 
                                    color='green'/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}

export default observer(TicketList)