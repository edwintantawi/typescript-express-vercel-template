const routes = (app) => {
  const API_ROUTE = '/api';

  app.use('/', require('./mainRoutes'));
  // API
  app.use(`${API_ROUTE}/users`, require('./userRoute'));
  app.use(`${API_ROUTE}/admins`, require('./adminRoutes'));
};

module.exports = routes;
