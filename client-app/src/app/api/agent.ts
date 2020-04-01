import axios, { AxiosResponse } from 'axios'
import { ITicket } from '../models/ticket'
import { INote } from '../models/note'
import { IComputer } from '../models/computer'

axios.defaults.baseURL = 'http://localhost:5000/api'

const responseBody = (response: AxiosResponse) => response.data

const sleep = (ms: number) => (response: AxiosResponse) =>
    new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms))

const requests = {
    get: (url: string) => axios.get(url).then(sleep(1000)).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(sleep(1000)).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(sleep(1000)).then(responseBody),
    del: (url: string) => axios.delete(url).then(sleep(1000)).then(responseBody) 
}


const Tickets = {
    list: (): Promise<ITicket[]> => requests.get('/tickets'),
    details: (id: string) => requests.get(`/tickets/${id}`),
    create: (ticket: ITicket) => requests.post('/tickets', ticket),
    update: (ticket: ITicket) => requests.put(`tickets/${ticket.id}`, ticket),
    delete: (id: string) => requests.del(`/tickets/${id}`)
}

const Notes = {
    list: (): Promise<INote[]> => requests.get('/notes'),
    details: (id: string) => requests.get(`/notes/${id}`),
    create: (note: INote) => requests.post('/notes', note),
    update: (note: INote) => requests.put(`notes/${note.id}`, note),
    delete: (id: string) => requests.del(`/notes/${id}`)
}

const Computers = {
    list: (): Promise<IComputer[]> => requests.get('/computers'),
    details: (id: string) => requests.get(`/computers/${id}`),
    create: (computer: IComputer) => requests.post('/computers', computer),
    update: (computer: IComputer) => requests.put(`computers/${computer.id}`, computer),
    delete: (id: string) => requests.del(`/computers/${id}`)
}

export default {
    Tickets,
    Notes,
    Computers
}