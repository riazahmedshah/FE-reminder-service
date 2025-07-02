import { Request, Response } from "express";
import { ResponseHandler } from "../utils/ResponseHandler";
import { NotificationSchema } from "../schemas/notificationSchema";
import { TicketService } from "../services/EmailService";

export const createTicket = async (req:Request, res:Response) => {
    const body = req.body;
    const {success,data,error} = NotificationSchema.safeParse(body);
    if(!success){
        return ResponseHandler.zodError(res, error.errors);
    }
    try {
        const newTicket = await TicketService.createTicket(data);
        return ResponseHandler.created(res, newTicket)
    } catch (error) {
        return ResponseHandler.json(res,{
            Error:error
        },500);
    }
}