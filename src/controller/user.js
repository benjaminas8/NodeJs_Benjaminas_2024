import { v4 as uuidv4 } from "uuid";
import UserModel from "../model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const CREATE_USER = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);

    const hash = bcrypt.hashSync(req.body.password, salt);

    const company = {
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
      password: hash,
      moneyBalance: req.body.moneyBalance,
    };

    const response = await new CompanyModel(company);

    await response.save();

    return res
      .status(201)
      .json({ message: "User was created", response: response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error in aplication" });
  }
};

const LOGIN = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Your email or password was wrong" });
    }

    const isPasswordMatch = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isPasswordMatch) {
      return res
        .status(401)
        .json({ message: "Your email or password was wrong" });
    }

    const token = jwt.sign(
      { email: user.email, userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    return res.status(200).json({ token: token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error in aplication" });
  }
};

const GET_ALL_ACTIVE_USERS = async (req, res) => {
  try {
    const response = await UserModel.find();
    return res.status(200).json({ users: response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error in aplication" });
  }
};

const GET_USER_BY_ID = async (req, res) => {
  try {
    const response = await new UserModel.findOne({ id: req.params.id });

    await response.save();

    return res.status(200).json({ response: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "error in aplication" });
  }
};

export { CREATE_USER, LOGIN, GET_ALL_ACTIVE_USERS, GET_USER_BY_ID };
