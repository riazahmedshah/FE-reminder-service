import { sender } from "../config/nodemailar"
import { TicketRepsitory } from "../repositories/TicketRepository";

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
}

