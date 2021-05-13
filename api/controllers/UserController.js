const Joi = require("joi");
//const JoiDate = require("@hapi/joi-date")

module.exports = {
  createUser: async function (req, res) {
    try {
      let schema = Joi.object().keys({
        dob: Joi.string(),
        name: Joi.string(),
        address: Joi.string(),
        description: Joi.string(),
      });
      const { error } = schema.validate(req.body);
      if (error) {
        console.log(error);
        return res.status(400).send({ error: "Invalid request" });
      }
      let obj = await Users.create(req.body);
      return res.status(201).send(obj);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ error: "Internal Server Error" });
    }
  },

  getUser: async function (req, res) {
    try {
      const schema = Joi.object({
        userId: Joi.string()
          .pattern(new RegExp("^[0-9a-fA-F]{24}$"))
          .required(),
      });
      const { userId } = req.params;
      const { error } = schema.validate({ userId });
      if (error) {
        return res.status(400).send({ error: "Invalid Input" });
      }
      let user = await Users.findOne({ id: req.params.userId });
      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }
      return res.status(200).send(user);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ error: "Internal Server Error" });
    }
  },

  updateUser: async function (req, res) {
    try {
      const schema = Joi.object({
        userId: Joi.string()
          .pattern(new RegExp("^[0-9a-fA-F]{24}$"))
          .required(),
        dob: Joi.string(),
        name: Joi.string(),
        address: Joi.string(),
        description: Joi.string(),
      });

      const { error } = schema.validate({ ...req.params, ...req.body });
      if (error) {
        return res.status(400).send({ error: "Invalid Input" });
      }
      let user = await Users.findOne({ id: req.params.userId });
      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }

      let updatedUser = await Users.update({ id: req.params.userId }, req.body);
      return res.status(200).send(updatedUser[0]);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ error: "Internal Server Error" });
    }
  },

  deleteUser : async function(req,res){
    try{
      const schema = Joi.object({
        userId: Joi.string()
          .pattern(new RegExp("^[0-9a-fA-F]{24}$"))
          .required(),
      });
      const { userId } = req.params;
      const { error } = schema.validate({ userId });
      if (error) {
        return res.status(400).send({ error: "Invalid Input" });
      }
      let user = await Users.findOne({ id: req.params.userId });
      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }

      await Users.destroy({id:req.params.userId})
      return res.status(200).send({reponse:'User Deleted Successfully'})
    }catch(err){
      console.log(err);
      return res.status(500).send({ error: "Internal Server Error" });
    }
  }
};
