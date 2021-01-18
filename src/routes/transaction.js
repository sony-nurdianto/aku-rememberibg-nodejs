import { Router } from 'express'
import Transaction from '../controlers/Transaction'
import midleware from '../midleware/midleware'

const route = Router()


route.route('').get(midleware.validateUser, Transaction.GetMemberByNumberNo)
route.route('/totalTransaction').get(midleware.validateUser, Transaction.GetTotalTransactionByDate)
route.route('/memberTransaction').get(midleware.validateUser, Transaction.GetTransactionByMember)


export default route