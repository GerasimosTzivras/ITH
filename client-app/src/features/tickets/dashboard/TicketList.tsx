import React from 'react'
import { Segment, Item, Button } from 'semantic-ui-react'
import { ITicket } from '../../../app/models/ticket'

interface IProps {
    tickets: ITicket[]
}

export const TicketList: React.FC<IProps> = ({tickets}) => {
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
                                <Button floated='right' content='View' color='blue'/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}
