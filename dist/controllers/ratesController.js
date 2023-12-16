"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExchangeRateTablesByPeriod = exports.getExchangeRateTableByDate = exports.getTodayExchangeRateTable = exports.getLastExchangeRateTables = exports.getCurrentExchangeRateTable = void 0;
const axios_1 = __importDefault(require("axios"));
// Функция для получения текущей таблицы курсов валют
const getCurrentExchangeRateTable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { table } = req.params;
    try {
        const response = yield axios_1.default.get(`https://api.nbp.pl/api/exchangerates/tables/${table}/`, {
            headers: { Accept: 'application/json' },
        });
        res.json(response.data);
    }
    catch (error) {
        handleError(error, res);
    }
});
exports.getCurrentExchangeRateTable = getCurrentExchangeRateTable;
// Функция для получения последних {topCount} таблиц курсов валют
const getLastExchangeRateTables = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { table, topCount } = req.params;
    try {
        const response = yield axios_1.default.get(`https://api.nbp.pl/api/exchangerates/tables/${table}/last/${topCount}/`, {
            headers: { Accept: 'application/json' },
        });
        res.json(response.data);
    }
    catch (error) {
        handleError(error, res);
    }
});
exports.getLastExchangeRateTables = getLastExchangeRateTables;
// Функция для получения таблицы курсов валют, опубликованной сегодня
const getTodayExchangeRateTable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { table } = req.params;
    try {
        const response = yield axios_1.default.get(`https://api.nbp.pl/api/exchangerates/tables/${table}/today/`, {
            headers: { Accept: 'application/json' },
        });
        res.json(response.data);
    }
    catch (error) {
        handleError(error, res);
    }
});
exports.getTodayExchangeRateTable = getTodayExchangeRateTable;
// Функция для получения таблицы курсов валют, опубликованной на определенную дату
const getExchangeRateTableByDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { table, date } = req.params;
    try {
        const response = yield axios_1.default.get(`https://api.nbp.pl/api/exchangerates/tables/${table}/${date}/`, {
            headers: { Accept: 'application/json' },
        });
        res.json(response.data);
    }
    catch (error) {
        handleError(error, res);
    }
});
exports.getExchangeRateTableByDate = getExchangeRateTableByDate;
// Функция для получения серии таблиц курсов валют, опубликованных в заданный период
const getExchangeRateTablesByPeriod = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { table, startDate, endDate } = req.params;
    try {
        const response = yield axios_1.default.get(`https://api.nbp.pl/api/exchangerates/tables/${table}/${startDate}/${endDate}/`, {
            headers: { Accept: 'application/json' },
        });
        res.json(response.data);
    }
    catch (error) {
        handleError(error, res);
    }
});
exports.getExchangeRateTablesByPeriod = getExchangeRateTablesByPeriod;
// Функция для обработки ошибок
const handleError = (error, res) => {
    if (error.response && error.response.status === 404) {
        res.status(404).json({ error: 'Data not found' });
    }
    else {
        res.status(500).json({ error: error.message });
    }
};
//# sourceMappingURL=ratesController.js.map