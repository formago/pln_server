import express, { Request, Response } from 'express';
import axios from 'axios';
import ratesRoutes from './routes/ratesRoutes';

const app = express();
const port = process.env.PORT || 3000;

// Парсинг JSON и URL-encoded данных
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/rates', ratesRoutes);

// Проксирующий запрос к API для получения курсов валют
app.get('/rates', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      'https://api.nbp.pl/api/exchangerates/tables/A/',
    );
    res.json(response.data);
  } catch (error) {
    // Обработка ошибок запроса
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
