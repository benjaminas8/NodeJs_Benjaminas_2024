import express from "express";

import {
  CREATE_USER,
  LOGIN,
  GET_USER_BY_ID,
  GET_ALL_ACTIVE_USERS,
} from "../controller/user.js";

const router = express.Router();

// sign up
router.post("/user", CREATE_USER);

// login
router.post("/login", LOGIN);

// get new jwt token
router.get("/user/:id", GET_USER_BY_ID);

// get all users
router.get("/users", GET_ALL_ACTIVE_USERS);

// get user by id
router.get("/user/:id", GET_USER_BY_ID);

// getUserByIdWithTickets
router.delete("/tickets/:id", DELETE_TICKET_BY_ID);

export default router;
