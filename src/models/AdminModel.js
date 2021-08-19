class AdminModel {
  static getAll() {
    return new Promise((resolve, reject) => {
      const allAdmin = require('../db.json').admins;
      if (!allAdmin) reject(null);
      resolve(allAdmin);
    });
  }
}

module.exports = AdminModel;
