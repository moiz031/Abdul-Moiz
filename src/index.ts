import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Security Middleware
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Client Hunter Secure API is running 🛡️');
});

// Secure Error Handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send({ error: 'An unexpected error occurred' }); // No stack trace leaked
});

app.listen(Number(port), '0.0.0.0', () => {
  console.log(`[server]: Server is running at http://0.0.0.0:${port}`);
});
