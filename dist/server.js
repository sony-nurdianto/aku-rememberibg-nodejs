"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
var database_1 = require("./config/database");
var auth_1 = __importDefault(require("./routes/auth"));
require('dotenv').config();
var app = express_1.default();
app.use(cors_1.default());
app.use(cors_1.default({
    origin: ["*"],
    methods: ["GET", "HEAD", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
    credentials: false,
}));
app.use(helmet_1.default());
// app.use(compression())
app.use(morgan_1.default('combined'));
morgan_1.default.token('date', function () {
    var p = new Date().toString().replace(/[A-z]{3}\+/, '+').split(/ /);
    return (p[2] + '/' + p[1], +'/' + p[3] + ':' + p[4] + ' ' + p[5]);
});
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use('/', auth_1.default);
app.get('/', function (req, res, next) {
    return res.status(404).json('not found');
});
database_1.db();
var Port = process.env.PORT || 3000;
app.listen(Port, function () { return console.log('server runing'); });
