import { prisma } from "../config/db";
import { TicketProps } from "../types/ticketTypes";

export class TicketRepsitory{

    static async createTicket(data:TicketProps){
        return await prisma.notification.create({
            data:{
                content:data.content,
                subject:data.subject,
                status:data.status,
                recepientEmail:data.recepientEmail,
                notificationTime:data.notificationTime,     
            }
        })
    }

    static async getAllTickets(){
        return await prisma.notification.findMany();
    }

    static async getPendingTickets(){
        return await prisma.notification.findMany({
            where:{
                status:'PENDING',
                notificationTime:{lte:new Date()},   
            }
        })
    }

    static async updateTicket(id:number){
        return await prisma.notification.update({
            where:{
                id
            },
            data:{
                status:"SUCCESS"
            }
        });
    }
}