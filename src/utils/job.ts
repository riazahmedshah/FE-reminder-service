import cron from "node-cron";
import { TicketService } from "../services/EmailService";

export const setupJob = () => {
    cron.schedule('*/1 * * * *', async() => {
        const response = await TicketService.getPendingTickets();
        console.log(response);
    });
}