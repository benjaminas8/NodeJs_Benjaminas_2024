import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: { type: String, requred: true },
  name: { type: String, requred: true },
  email: { type: String, requred: true },
  password: { type: String, requred: true },
  moneyBalance: { type: String, requred: true },
});

export default mongoose.model("User", userSchema);

// VARTOTOJAS:
// id
// name
// email
// password
// money_balance
