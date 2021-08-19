const { AdminModel } = require('../models');

class AdminController {
  static async getAll(req, res) {
    try {
      const allUsers = await AdminModel.getAll();
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(404).json({ message: 'Admin not found' });
    }
  }
}

module.exports = AdminController;
