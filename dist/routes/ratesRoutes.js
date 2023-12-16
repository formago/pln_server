"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ratesController_1 = require("../controllers/ratesController");
const router = express_1.default.Router();
router.get('/:table', ratesController_1.getCurrentExchangeRateTable);
router.get('/:table/last/:topCount', ratesController_1.getLastExchangeRateTables);
router.get('/:table/today', ratesController_1.getTodayExchangeRateTable);
router.get('/:table/:date', ratesController_1.getExchangeRateTableByDate);
router.get('/:table/:startDate/:endDate', ratesController_1.getExchangeRateTablesByPeriod);
exports.default = router;
//# sourceMappingURL=ratesRoutes.js.map