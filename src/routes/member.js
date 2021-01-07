import { Router } from 'express'
import Member from '../controlers/Member'

const route = Router()

route.route('').get(Member.GetMemberbyEmail)

export default route