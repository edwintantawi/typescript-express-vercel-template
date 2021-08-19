const { EndpointModel } = require('../models');

class MainController {
  static async getAll(req, res) {
    try {
      const endpoints = await EndpointModel.getAll();
      res.render('index', { endpoints });
    } catch (error) {
      res.status(404).json({ message: 'Endpoint not found' });
    }
  }
}

module.exports = MainController;
