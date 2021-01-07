import { Router } from 'express'
import Auth from '../controlers/Auth'
import HomeController from '../controlers/HomeControler'


const route = Router()

route.route('/home').get(HomeController.index)
route.route('/login').post(Auth.login)

export default route