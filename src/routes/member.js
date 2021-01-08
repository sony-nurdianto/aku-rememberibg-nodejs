import { Router } from 'express'
import Member from '../controlers/Member'
import midleware from '../midleware/midleware'

const route = Router()

route.route('').get(Member.GetMemberbyEmail)
route.route('/members').get(midleware.validateUser, Member.GetAllMemberData)
route.route('/getmember').get(midleware.validateUser, Member.GetMemberbyEmail)
route.route('/update').put(midleware.validateUser, Member.updateMemberData)
route.route('/delete').delete(midleware.validateUser, Member.deleteMember)

export default route