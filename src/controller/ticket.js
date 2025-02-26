import { v4 as uuidv4 } from "uuid";
import TicketModel from "../model/ticket.js";
import UserModel from "../model/user.js";

const GET_USER_TICKETS = async (req, res) => {
  try {
    const response = await TicketModel.find();
    return res.status(200).json({ tickets: response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error in aplication" });
  }
};

const GET_TICKET_BY_ID = async (req, res) => {
  try {
    const response = await TicketModel.findOne({ id: req.params.id });
    console.log(response);
    return res.status(200).json({ tickets: response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error in aplication" });
  }
};

const CREATE_TICKET = async (req, res) => {
  try {
    const ticket = {
      id: uuidv4(),
      title: req.body.title,
      ticket_price: req.body.ticket_price,
      from_location: req.body.from_location,
      to_location: req.body.to_location,
      to_location_photo_url: req.body.to_location_photo_url,
      owner_id: req.body.owner_id,
    };

    const response = await new TicketModel(ticket);

    await response.save();

    return res.status(201).json({ message: "Ticket was created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error in aplication" });
  }
};

const DELETE_TICKET_BY_ID = async (req, res) => {
  try {
    const response = await TicketModel.findOneAndDelete({ id: req.params.id });

    if (!response) {
      return res.status(404).json({
        message: "This ticket does not exist so you cannot delete it",
      });
    }

    return res
      .status(200)
      .json({ message: "Ticket was deleted successfully", tickets: response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error in aplication" });
  }
};

const BUY_TICKET = async (req, res) => {
  try {
    const {
      userId,
      title,
      ticket_price,
      from_location,
      to_location,
      to_location_photo_url,
    } = req.body;

    const user = await UserModel.findOne({ id: userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.moneyBalance < ticket_price) {
      return res.status(400).json({ message: "Not enough money" });
    }

    const ticket = new TicketModel({
      id: uuidv4(),
      title,
      ticket_price,
      from_location,
      to_location,
      to_location_photo_url,
      owner_id: user.id,
    });

    const savedTicket = await ticket.save();

    user.bought_tickets.push(savedTicket.id);
    user.moneyBalance -= ticket_price;

    await user.save();

    return res
      .status(201)
      .json({
        message: "Ticket bought successfully",
        ticket: savedTicket,
        user,
      });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error in application" });
  }
};

export {
  GET_USER_TICKETS,
  GET_TICKET_BY_ID,
  CREATE_TICKET,
  DELETE_TICKET_BY_ID,
  BUY_TICKET,
};
