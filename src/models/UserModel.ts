import db from '../db.json';

export class UserModel {
  static getAll() {
    return new Promise((resolve, reject) => {
      const allUsers = db.users;
      if (!allUsers) reject(null);
      resolve(allUsers);
    });
  }
}
