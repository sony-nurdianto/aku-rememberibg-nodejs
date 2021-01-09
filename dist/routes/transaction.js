"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Transaction_1 = __importDefault(require("../controlers/Transaction"));
var midleware_1 = __importDefault(require("../midleware/midleware"));
var route = express_1.Router();
route.route('/member-transaction-no').get(midleware_1.default.validateUser, Transaction_1.default.GetMemberByNumberNo);
exports.default = route;
