import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { db } from './config/database'
import routes from './routes/auth'
import memberRoute from './routes/member'
import transactionRoute from './routes/transaction'
import path from 'path'
require('dotenv').config()




const app = express()

app.use(cors())
app.use(
    cors({
        origin: ["*"],
        methods: ["GET", "HEAD", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
        credentials: false,
    })
);
app.use(helmet())
// app.use(compression())
app.use(morgan('combined'))
morgan.token('date', function () {
    let p = new Date().toString().replace(/[A-z]{3}\+/, '+').split(/ /);
    return (p[2] + '/' + p[1], + '/' + p[3] + ':' + p[4] + ' ' + p[5]);
})
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static(__dirname + '/member_images'));


app.use('/', routes)
app.use('/users', memberRoute)
app.use('/transaction', transactionRoute)
app.get('/', (req, res, next) => {
    return res.status(404).json('not found')
})


db()
const Port = process.env.PORT || 3000
app.listen(Port, () => console.log('server runing'))