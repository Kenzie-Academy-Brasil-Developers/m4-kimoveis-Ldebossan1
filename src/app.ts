import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { routes } from './routes/index.routes';
import { handleError } from './middlewares/handleErrors.middlewares';

const app = express();
app.use(express.json());

app.use('/', routes)

app.use(handleError)

export default app;
