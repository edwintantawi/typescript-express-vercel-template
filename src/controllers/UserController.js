const { UserModel } = require('../models');

class UserController {
  static async getAll(req, res) {
    try {
      const allUsers = await UserModel.getAll();
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(404).json({ message: 'Users not found' });
    }
  }
}

module.exports = UserController;
