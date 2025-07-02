export interface TicketProps{
    subject: string
    content:string
    status: Status
    recepientEmail:string
    notificationTime:Date
}

type Status = "SUCCESS" | "PENDING" | "FAILED"