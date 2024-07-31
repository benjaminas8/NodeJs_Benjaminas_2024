import mongoose from "mongoose";

const ticketSchema = mongoose.Schema({
  id: { type: String, requred: true },
  title: { type: String, requred: true },
  ticket_price: { type: Number, requred: true },
  from_location: { type: String, requred: true },
  to_location: { type: String, requred: true },
  to_location_photo_url: { type: String, requred: true },
  owner_id: { type: String, requred: true },
});

export default mongoose.model("Ticket", ticketSchema);
