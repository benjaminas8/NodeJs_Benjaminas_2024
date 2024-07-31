import express from "express";

import {
  GET_USER_TICKETS,
  GET_TICKET_BY_ID,
  CREATE_TICKET,
  DELETE_TICKET_BY_ID,
} from "../controller/ticket.js";

const router = express.Router();

router.get("/tickets/user/:userId", GET_USER_TICKETS);
router.get("/tickets/:id", GET_TICKET_BY_ID);
router.post("/tickets", CREATE_TICKET);
router.delete("/tickets/:id", DELETE_TICKET_BY_ID);

// buy ticket

export default router;
