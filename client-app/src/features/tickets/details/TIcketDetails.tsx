import React from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import { ITicket } from '../../../app/models/ticket'

interface IProps {
    ticket: ITicket
    setEditMode: (editMode: boolean) => void
    setSelectedTicket: (ticket: ITicket | null) => void
}

export const TicketDetails: React.FC<IProps> = ({
    ticket, setEditMode, setSelectedTicket}) => {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${ticket.category}.jpg`} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{ticket.title}</Card.Header>
                <Card.Meta>{ticket.category}</Card.Meta>
                <Card.Description>{ticket.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button onClick={() => setEditMode(true)}  basic color='blue' content='Edit' />
                    <Button onClick={() => setSelectedTicket(null)} basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
