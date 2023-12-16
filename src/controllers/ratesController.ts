import { Request, Response } from 'express';
import axios from 'axios';

// Функция для получения текущей таблицы курсов валют
export const getCurrentExchangeRateTable = async (
  req: Request,
  res: Response,
) => {
  const { table } = req.params;
  try {
    const response = await axios.get(
      `https://api.nbp.pl/api/exchangerates/tables/${table}/`,
      {
        headers: { Accept: 'application/json' },
      },
    );
    res.json(response.data);
  } catch (error) {
    handleError(error, res);
  }
};

// Функция для получения последних {topCount} таблиц курсов валют
export const getLastExchangeRateTables = async (
  req: Request,
  res: Response,
) => {
  const { table, topCount } = req.params;
  try {
    const response = await axios.get(
      `https://api.nbp.pl/api/exchangerates/tables/${table}/last/${topCount}/`,
      {
        headers: { Accept: 'application/json' },
      },
    );
    res.json(response.data);
  } catch (error) {
    handleError(error, res);
  }
};

// Функция для получения таблицы курсов валют, опубликованной сегодня
export const getTodayExchangeRateTable = async (
  req: Request,
  res: Response,
) => {
  const { table } = req.params;
  try {
    const response = await axios.get(
      `https://api.nbp.pl/api/exchangerates/tables/${table}/today/`,
      {
        headers: { Accept: 'application/json' },
      },
    );
    res.json(response.data);
  } catch (error) {
    handleError(error, res);
  }
};

// Функция для получения таблицы курсов валют, опубликованной на определенную дату
export const getExchangeRateTableByDate = async (
  req: Request,
  res: Response,
) => {
  const { table, date } = req.params;
  try {
    const response = await axios.get(
      `https://api.nbp.pl/api/exchangerates/tables/${table}/${date}/`,
      {
        headers: { Accept: 'application/json' },
      },
    );
    res.json(response.data);
  } catch (error) {
    handleError(error, res);
  }
};

// Функция для получения серии таблиц курсов валют, опубликованных в заданный период
export const getExchangeRateTablesByPeriod = async (
  req: Request,
  res: Response,
) => {
  const { table, startDate, endDate } = req.params;
  try {
    const response = await axios.get(
      `https://api.nbp.pl/api/exchangerates/tables/${table}/${startDate}/${endDate}/`,
      {
        headers: { Accept: 'application/json' },
      },
    );
    res.json(response.data);
  } catch (error) {
    handleError(error, res);
  }
};

// Функция для обработки ошибок
const handleError = (error: any, res: Response) => {
  if (error.response && error.response.status === 404) {
    res.status(404).json({ error: 'Data not found' });
  } else {
    res.status(500).json({ error: error.message });
  }
};
