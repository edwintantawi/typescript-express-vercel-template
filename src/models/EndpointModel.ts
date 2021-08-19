import db from '../db.json';

export class EndpointModel {
  static getAll() {
    return new Promise((resolve, reject) => {
      const allEndpoint = db.endpoints;
      if (!allEndpoint) reject(null);
      resolve(allEndpoint);
    });
  }
}
