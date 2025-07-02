import { z } from "zod"

export const NotificationSchema = z.object({
    subject:z.string(),
    content:z.string(),
    status:z.enum(["SUCCESS" ,"PENDING" ,"FAILED"]),
    recepientEmail:z.string().email(),
    notificationTime:z.coerce.date()
})
