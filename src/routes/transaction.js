import { Router } from 'express'
import Transaction from '../controlers/Transaction'
import midleware from '../midleware/midleware'

const route = Router()


route.route('').get(midleware.validateUser, Transaction.GetMemberByNumberNo)



export default route