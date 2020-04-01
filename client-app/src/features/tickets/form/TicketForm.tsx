import React, {useState, FormEvent} from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { ITicket } from '../../../app/models/ticket'
import {v4 as uuid} from 'uuid'

interface IProps {
    ticket: ITicket | null
    setEditMode: (editMode: boolean) => void
    createTicket: (ticket: ITicket) => void
    editTicket: (ticket: ITicket) => void
}

export const TicketForm:React.FC<IProps> = ({
    ticket: initialFormState, setEditMode,
    createTicket, editTicket}) => {
    
    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState
        } else {
            return {
                id: '',
                title: '',
                description: '',
                category: '',
                customer: '',
                telephone: '',
                notes: '',
                dateIn: '',
                dateOut: '',
                place: '',
                progress: ''
            }
        }
            
    }

    const [ticket, setTicket] = useState<ITicket>(initializeForm)

    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.currentTarget
        setTicket({...ticket, [name]: value})
    } 

    const handleSubmit = () => {
        if (ticket.id.length === 0) {
            let newTicket = {
                ...ticket,
                id: uuid()
            }
            createTicket(newTicket)
        }
        else {
            editTicket(ticket)
        }
    }

    return (
        <Segment clearing> 
            <Form onSubmit={handleSubmit}>
                <Form.Input 
                    onChange={handleInputChange}
                    name='title' 
                    placeholder='Title' 
                    value={ticket.title}/>
                <Form.TextArea
                    onChange={handleInputChange} 
                    rows={2} 
                    name='description'
                    placeholder='Description' 
                    value={ticket.description}/>
                <Form.Input 
                    onChange={handleInputChange}
                    name='category' 
                    placeholder='Category' 
                    value={ticket.category}/>
                <Form.Input 
                    onChange={handleInputChange} 
                    name='customer'
                    placeholder='Customer' 
                    value={ticket.customer}/>
                <Form.Input 
                    onChange={handleInputChange} 
                    name='telephone'
                    placeholder='Telephone' 
                    value={ticket.telephone}/>
                <Form.Input 
                    onChange={handleInputChange} 
                    name='notes'
                    placeholder='Notes' 
                    value={ticket.notes}/>
                <Form.Input 
                    onChange={handleInputChange} 
                    name='place'
                    placeholder='Place' 
                    value={ticket.place}/>
                <Form.Input 
                    onChange={handleInputChange} 
                    type='datetime-local'
                    name='dateIn' 
                    placeholder='DateIn' 
                    value={ticket.dateIn}/>
                <Form.Input 
                    onChange={handleInputChange} 
                    type='datetime-local'
                    name='dateOut'
                    placeholder='DateOut' 
                    value={ticket.dateOut}/>
                <Form.Input 
                    onChange={handleInputChange} 
                    name='progress'
                    placeholder='Progress' 
                    value={ticket.progress}/>
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={() => setEditMode(false)} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}
