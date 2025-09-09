import express from 'express';
import cors from 'cors';
import bibleRoutes from './routes/bible.routes.js';
import errorMiddleware from './middlewares/errorMiddleware.js';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(
      cors({
        origin: 'http://127.0.0.1:8080',
      })
    );
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/api', bibleRoutes);
  }

  exceptionHandler() {
    this.server.use(errorMiddleware);
  }
}

export default new App().server;
