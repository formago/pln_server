import express from 'express';
import {
  getCurrentExchangeRateTable,
  getLastExchangeRateTables,
  getTodayExchangeRateTable,
  getExchangeRateTableByDate,
  getExchangeRateTablesByPeriod,
} from '../controllers/ratesController';

const router = express.Router();

router.get('/:table', getCurrentExchangeRateTable);
router.get('/:table/last/:topCount', getLastExchangeRateTables);
router.get('/:table/today', getTodayExchangeRateTable);
router.get('/:table/:date', getExchangeRateTableByDate);
router.get('/:table/:startDate/:endDate', getExchangeRateTablesByPeriod);

export default router;
