class EndpointModel {
  static getAll() {
    return new Promise((resolve, reject) => {
      const allEndpoint = require('../db.json').endpoints;
      if (!allEndpoint) reject(null);
      resolve(allEndpoint);
    });
  }
}

module.exports = EndpointModel;
