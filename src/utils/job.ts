import cron from "node-cron";
import { TicketService } from "../services/EmailService";
import { sender } from "../config/nodemailar";

export const setupJob = () => {
    cron.schedule('*/1 * * * *', async() => {
        const response = await TicketService.getPendingTickets();
        response.forEach((email) => {
            sender.sendMail({
                from:"notificationservice516@gmail.com",
                to:email.recepientEmail,
                subject:email.subject,
                text:email.content
            }, async (err, data) => {
                if(err){
                    console.error(err);
                } else{
                    console.log(data);
                    await TicketService.updateTicket(email.id);
                }
            })
        })
    });
}