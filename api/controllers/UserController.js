import {UserModel} from "../../models/user";

class UserController {

  async store(req, res) {
    try {
      const name = req.body.name;
      const newUser = new UserModel({name});
      const result = await newUser.save();
      return res.status(201).send({
        message: 'User created successfully',
        data: result
      })
    } catch (exception) {
      return res.status(500).send({
        message: 'An error occurred',
        data: null
      })
    }
  }

  async get(req, res) {
    try {
      const users = await UserModel.find({});
      return res.status(200).send({
        message: 'Operation successful',
        data: users
      });
    } catch (exception) {
      return res.status(500).send({data: null, message: exception.message});
    }
  }
}

const userController = new UserController();

export {
  userController
};