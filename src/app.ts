import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import usersRoute from './app/modules/users/users.route';

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//application route
app.use('/api/v1/users', usersRoute);

app.get('/', async (req: Request, res: Response) => {
  res.send('Server Running');
});

export default app;
