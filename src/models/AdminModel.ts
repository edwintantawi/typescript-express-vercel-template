import db from '../db.json';

export class AdminModel {
  static getAll() {
    return new Promise((resolve, reject) => {
      const allAdmin = db.admins;
      if (!allAdmin) reject(null);
      resolve(allAdmin);
    });
  }
}
