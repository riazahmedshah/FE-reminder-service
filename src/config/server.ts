import {app} from "../index"
import { sendBasicEmail } from "../services/EmailService";
// sendBasicEmail(
//     "notificationservice516@gmail.com", 
//     "khajamohdbaderuddin@gmail.com",
//     "Test Email - Please Ignore",
//     "This is a test email. Your phone is... just fine! (Or is it? 😉)\nDon't worry—this is just Riyaz testing my email service."
// );

app.listen(1400, () => {
    console.log("Server is running on PORT 1400");
})