import { Router } from 'express'
import Member from '../controlers/Member'
import midleware from '../midleware/midleware'

const route = Router()

route.route('').get(midleware.validateUser, Member.GetMemberbyEmail)
route.route('/members').get(midleware.validateUser, Member.GetAllMemberData)
route.route('/getmember').get(midleware.validateUser, Member.GetMemberbyEmail)
route.route('/update').put(midleware.validateUser, Member.updateMemberData)
route.route('/delete').delete(midleware.validateUser, Member.deleteMember)
route.route('/param-delete/:id').delete(midleware.validateUser, Member.deleteMemberById)
route.route('/param-update/:id').put(midleware.validateUser, Member.updateMemberById)
route.route('/search').get(midleware.validateUser, Member.findByParams)

export default route