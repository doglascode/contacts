import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';

import routes from './routes';
import cors from './app/middlewares/cors';

const PORT = 3000;
const MONGO_URL = 'mongodb://localhost:27017';

mongoose.connect(MONGO_URL).then(() => {
  const app = express();

  app.use(cors);
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
  
  app.use(routes);

  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
});
