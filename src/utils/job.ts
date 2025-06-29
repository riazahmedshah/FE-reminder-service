import cron from "node-cron";

export const setupJob = () => {
    cron.schedule('*/1 * * * *', () => {
        console.log('Riyaz papa')
    })
}