import { Router } from 'express'
import Member from '../controlers/Member'

const route = Router()

route.route('').get(Member.GetMemberbyEmail)
route.route('/members').get(Member.GetAllMemberData)
route.route('/getmember').get(Member.GetMemberbyEmail)
route.route('/update').put(Member.updateMemberData)
route.route('/delete').delete(Member.deleteMember)

export default route