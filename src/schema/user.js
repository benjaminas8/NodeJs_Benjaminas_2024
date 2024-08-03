import Joi from "joi";

export default Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  moneyBalance: Joi.number().required(),
});
