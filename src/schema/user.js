import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[A-Z]/)
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).pattern(/\d/).required(),
  moneyBalance: Joi.number().min(0).required(),
});

export default userSchema;
