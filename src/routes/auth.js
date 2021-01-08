import { Router } from 'express'
import Auth from '../controlers/Auth'
import HomeController from '../controlers/HomeControler'
import Member from '../controlers/Member'

const route = Router()

route.route('/home').get(HomeController.index)
route.route('/login').post(Auth.login)
route.route('/reg').post(Auth.register)
route.route('/all').get(Member.GetAllMemberData)
route.route('/getuser').get(Member.GetMemberbyEmail)
route.route('/update-user').put(Member.updateMemberData)
route.route('/delete-user').delete(Member.deleteMember)



export default route