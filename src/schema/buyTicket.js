import Joi from "joi";

const buyTicketSchema = Joi.object({
  userId: Joi.string().required(),
  title: Joi.string().required(),
  ticket_price: Joi.number().min(0).required(),
  from_location: Joi.string().required(),
  to_location: Joi.string().required(),
  to_location_photo_url: Joi.string().uri().required(),
});

export default buyTicketSchema;
