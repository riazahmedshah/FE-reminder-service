import { sender } from "../config/nodemailar"

export const sendBasicEmail = (mailFrom:string ,mailTo:string,mailSubject:string,mailBody:string) => {
    sender.sendMail({
        from:mailFrom,
        to:mailTo,
        subject:mailSubject,
        text:mailBody
    })
}