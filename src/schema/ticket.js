import Joi from "joi";

const ticketSchema = Joi.object({
  title: Joi.string().required(),
  ticket_price: Joi.number().min(0).required(),
  from_location: Joi.string().required(),
  to_location: Joi.string().required(),
  to_location_photo_url: Joi.string().uri().required(),
  owner_id: Joi.string().required(),
});

export default ticketSchema;
