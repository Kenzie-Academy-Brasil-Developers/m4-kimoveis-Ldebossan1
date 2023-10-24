import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { handleError } from './middlewares/handleError.middleware';
import { routes } from './routes/index.routes';

const app = express();
app.use(express.json());

app.use('/', routes)

app.use(handleError)

export default app;
