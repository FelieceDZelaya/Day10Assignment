"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Accounts_1 = require("../database/Accounts");
class Atm {
    constructor() {
        this.express = express();
        this.mountRoutes();
    }
    mountRoutes() {
        const atm = express.Router();
        const atmAccount = express.Router();
        const atmWithdraw = express.Router();
        const atmDeposit = express.Router();
        atm.get('/atm', (req, resp) => {
            resp.json({
                status: 0,
                message: 'OK'
            });
        });
        atmAccount.get('/atm/:account', (req, resp) => {
            resp.json({
                account: req.params.account,
                balance: Accounts_1.accounts.filter(acc => {
                    return acc.account === req.params.account;
                })[0].bal,
                name: Accounts_1.accounts.filter(acc => {
                    return acc.account === req.params.account;
                })[0].name
            });
        });
        atmWithdraw.get('/atm/withdraw/:account/amount/:amount', (req, resp) => {
            resp.json({
                account: req.params.account,
                previousbalance: Accounts_1.accounts.filter(acc => {
                    return acc.account === req.params.account;
                })[0].bal,
                balance: Accounts_1.accounts.filter(acc => {
                    return acc.account === req.params.account;
                })[0].bal - req.params.amount,
                name: Accounts_1.accounts.filter(acc => {
                    return acc.account === req.params.account;
                })[0].name,
                status: 0,
                message: 'OK'
            });
        });
        atmDeposit.get('/atm/deposit/:account/amount/:amount', (req, resp) => {
            resp.json({
                account: req.params.account,
                previousbalance: Accounts_1.accounts.filter(acc => {
                    return acc.account === req.params.account;
                })[0].bal,
                balance: Accounts_1.accounts.filter(acc => {
                    return acc.account === req.params.account;
                })[0].bal + req.params.amount,
                name: Accounts_1.accounts.filter(acc => {
                    return acc.account === req.params.account;
                })[0].name,
                status: 0,
                message: 'OK'
            });
        });
        this.express.use('/', atm);
        this.express.use('/', atmAccount);
        this.express.use('/', atmWithdraw);
        this.express.use('/', atmDeposit);
    }
}
exports.default = new Atm().express;
