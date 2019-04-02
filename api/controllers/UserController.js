import {UserModel} from "../../models/user";

class UserController {
  get(req, res) {
    try {
      const users = UserModel.find({});
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