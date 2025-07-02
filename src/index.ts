import express from "express"
import { createTicket } from "./controllers/TicketController";

export const app = express();

app.use(express.json());

app.post("/api/v1/tickets", createTicket);

