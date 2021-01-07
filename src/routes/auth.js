import { Router } from 'express'
import Auth from '../controlers/Auth'
import HomeController from '../controlers/HomeControler'
import Member from '../controlers/Member'

const route = Router()

route.route('/home').get(HomeController.index)
route.route('/login').post(Auth.login)
route.route('/users/:email').get(Member.GetMemberbyEmail)



export default route