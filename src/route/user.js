import express from "express";

import {
  CREATE_USER,
  LOGIN,
  GET_USER_BY_ID,
  GET_ALL_ACTIVE_USERS,
  REFRESH_TOKEN,
} from "../controller/user.js";

import validate from "../middleware/validation.js";
import userSchema from "../schema/user.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// sign up
router.post("/user", validate(userSchema), CREATE_USER);

// login
router.post("/login", LOGIN);

// get new jwt token
router.post("/token/refresh", REFRESH_TOKEN);

// get all users
router.get("/users", GET_ALL_ACTIVE_USERS);

// get user by id
router.get("/user/:id", GET_USER_BY_ID);

// getUserByIdWithTickets
// router.delete("/tickets/:id", DELETE_TICKET_BY_ID);

export default router;
