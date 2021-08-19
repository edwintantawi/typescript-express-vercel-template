import { Express } from 'express';
import mainRoute from './mainRoute';
import adminRoute from './adminRoute';
import userRoute from './userRoute';

const routes = (app: Express) => {
  const API_ROUTE = '/api';

  app.use('/', mainRoute);
  // API
  app.use(`${API_ROUTE}/admins`, adminRoute);
  app.use(`${API_ROUTE}/users`, userRoute);
};

export default routes;
