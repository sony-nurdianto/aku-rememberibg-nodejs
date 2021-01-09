"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Member_1 = __importDefault(require("../controlers/Member"));
var midleware_1 = __importDefault(require("../midleware/midleware"));
var route = express_1.Router();
route.route('').get(Member_1.default.GetMemberbyEmail);
route.route('/members').get(midleware_1.default.validateUser, Member_1.default.GetAllMemberData);
route.route('/getmember').get(midleware_1.default.validateUser, Member_1.default.GetMemberbyEmail);
route.route('/update').put(midleware_1.default.validateUser, Member_1.default.updateMemberData);
route.route('/delete').delete(midleware_1.default.validateUser, Member_1.default.deleteMember);
exports.default = route;
