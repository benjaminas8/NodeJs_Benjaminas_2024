import express from "express";

import {
  GET_USER_TICKETS,
  GET_TICKET_BY_ID,
  CREATE_TICKET,
  DELETE_TICKET_BY_ID,
  BUY_TICKET,
} from "../controller/ticket.js";

import auth from "../middleware/auth.js";
import validate from "../middleware/validation.js";
import ticketSchema from "../schema/ticket.js";
import buyTicketSchema from "../schema/buyTicket.js";

const router = express.Router();

router.get("/users/:userId/tickets", GET_USER_TICKETS);
router.get("/tickets/:id", GET_TICKET_BY_ID);
router.post("/tickets", validate(ticketSchema), CREATE_TICKET);
router.post("/tickets/buy", auth, validate(buyTicketSchema), BUY_TICKET);
router.delete("/tickets/:id", DELETE_TICKET_BY_ID);

// buy ticket

export default router;
