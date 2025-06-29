import cron from "node-cron";

export const setupJob = () => {
    cron.schedule('*/5 * * * *', () => {
        console.log('Running task in every 5th minutes')
    })
}