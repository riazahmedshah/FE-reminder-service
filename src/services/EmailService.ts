import { sender } from "../config/nodemailar"
import { TicketRepsitory } from "../repositories/TicketRepository";
import { TicketProps } from "../types/ticketTypes";

export class TicketService{
    static sendBasicEmail(mailFrom:string ,mailTo:string,mailSubject:string,mailBody:string){
        sender.sendMail({
            from:mailFrom,
            to:mailTo,
            subject:mailSubject,
            text:mailBody
        });
    }

    static async getAllTickets(){
        try {
            return await TicketRepsitory.getAllTickets();
        } catch (error) {
            console.error(error);
            throw new Error("Error from service:GET_ALL_TICKETS");
        }
    }
    static async getPendingTickets(){
        try {
            return await TicketRepsitory.getPendingTickets();
        } catch (error) {
            console.error(error);
            throw new Error("Error from service:GET_PENDING_TICKETS");
        }
    }

    static async createTicket(data:TicketProps){
        try {
            return await TicketRepsitory.createTicket(data);
        } catch (error) {
            console.error(error);
            throw new Error("Error from service:CREATE_TICKET");
        }
    }
}

