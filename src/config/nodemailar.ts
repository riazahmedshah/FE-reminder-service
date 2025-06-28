import {createTransport} from "nodemailer"
import { EMAIL_ID, EMAIL_PASS } from "./serverConfig"

export const sender = createTransport({
    service: "Gmail",
    auth:{
        user:EMAIL_ID,
        pass:EMAIL_PASS
    }
})