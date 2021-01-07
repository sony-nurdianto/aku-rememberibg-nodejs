"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
var config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    pwd: process.env.DB_PWD,
    dbName: process.env.DB_NAME,
};
var MODE = process.env.NODE_ENV || 'development';
var db = function () {
    mongoose_1.default.Promise = global.Promise;
    var opt = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    };
    if (MODE === 'production') {
        mongoose_1.default.connect("mongodb://" + config.user + ":" + config.pwd + "@" + config.host + ":" + config.port + "/" + config.dbName + "?authSource=admin&w=1", opt, function (err) {
            if (err) {
                console.log('Not connected Trying 5 sec');
                setTimeout(function () { return exports.db(); }, 5000);
            }
            else {
                console.log("database connected");
            }
        });
    }
    else {
        mongoose_1.default.connect("mongodb://" + config.host + "/" + config.dbName, opt, function (err) {
            if (err) {
                console.log('Not connected Trying 5 sec');
                setTimeout(function () { return exports.db(); }, 5000);
            }
            else {
                console.log("database connected");
            }
        });
    }
};
exports.db = db;
