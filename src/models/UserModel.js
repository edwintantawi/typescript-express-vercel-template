class UserModel {
  static getAll() {
    return new Promise((resolve, reject) => {
      const allUsers = require('../db.json').users;
      if (!allUsers) reject(null);
      resolve(allUsers);
    });
  }
}

module.exports = UserModel;
