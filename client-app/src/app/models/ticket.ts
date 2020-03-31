export interface ITicket {
    id: string;
    title: string;
    description: string;
    category: string;
    customer: string;
    telephone: string;
    notes: string;
    dateIn: Date;
    dateOut: Date;
    place: string;
    progress: number;
}