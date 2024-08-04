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

router.post("/users", validate(userSchema), CREATE_USER);

router.post("/login", LOGIN);

router.post("/token/refresh", REFRESH_TOKEN);

router.get("/users", auth, GET_ALL_ACTIVE_USERS);

router.get("/users/:id", auth, GET_USER_BY_ID);

export default router;
