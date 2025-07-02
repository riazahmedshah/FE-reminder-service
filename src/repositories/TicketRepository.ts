import { prisma } from "../config/db";

export class TicketRepsitory{
    static async getAllTickets(){
        return await prisma.notification.findMany();
    }
}