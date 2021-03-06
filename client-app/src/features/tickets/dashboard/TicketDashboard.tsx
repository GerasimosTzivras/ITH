import React, { useContext } from 'react'
import { Grid, List } from 'semantic-ui-react'
import { ITicket } from '../../../app/models/ticket'
import  TicketList  from './TicketList'
import { TicketPreview } from '../details/TIcketPreview'
import { TicketForm } from '../form/TicketForm'
import  TicketDetails  from '../details/TIcketDetails'
import { observer } from 'mobx-react-lite'
import TicketStore from '../../../app/stores/ticketStore'

interface IProps {
    tickets: ITicket[]
    selectTicket: (id: string) => void
    setEditMode: (editMode: boolean) => void
    setSelectedTicket: (ticket: ITicket | null) => void
    createTicket: (ticket: ITicket) => void
    editTicket: (ticket: ITicket) => void
    deleteTicket: (id: string) => void
    submitting: boolean
}

const TicketDashboard: React.FC<IProps> = ({
    tickets, selectTicket, 
    setEditMode, setSelectedTicket,
    createTicket, editTicket, deleteTicket,
    submitting
}) => {
    const ticketStore = useContext(TicketStore)
    const {editMode, selectedTicket} = ticketStore
    return (
        <Grid>
            <Grid.Column width={10}>
                <TicketList 
                    
                    deleteTicket={deleteTicket}
                    submitting={submitting}/>    
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedTicket && <TicketPreview ticket={selectedTicket} setSelectedTicket={setSelectedTicket} /> } 
                {selectedTicket && !editMode && (
                    <TicketDetails 
                        setSelectedTicket={setSelectedTicket} 
                        setEditMode={setEditMode}
                    />) }                    
                {editMode && (
                    <TicketForm 
                        key={selectedTicket && selectedTicket.id || 0}
                        setEditMode={setEditMode} 
                        ticket={selectedTicket!}
                        createTicket={createTicket}
                        editTicket={editTicket}
                        submitting={submitting}
                    />
                )}
            </Grid.Column>
        </Grid>
    )
}

export default observer(TicketDashboard)