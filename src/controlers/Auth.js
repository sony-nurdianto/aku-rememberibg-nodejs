import MemberModel from "../models/member"
import md5 from 'md5'
import jwt from 'jsonwebtoken'


class AuthController {


    register = async (req, res) => {
        const { email, password } = req.body

        try {
            const emailRegxp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const check = emailRegxp.test(email)
            if (email === "") {
                return res.status(400).json({ status: false, message: "email required" })
            }

            if (!check) {
                console.log(check)
                return res.status(400).json({ status: false, message: "email invalid" })
            }

            const isEmailExist = await MemberModel.findOne({ email })

            if (isEmailExist) {
                return res.status(400).json({ status: false, message: "email is alredy exist" })
            }

            const add = new MemberModel({
                member_name: req.body.name,
                member_email: req.body.email,
                member_phone: req.body.phone,
                member_no: req.body.no,
                member_bdate: req.body.bdate,
                member_password: md5(req.body.password)
            })

            add.save((err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(400).json({ message: err })
                }
                console.log(result)
                return res.status(200).json({ status: true, data: result })
            })

            // await MemberModel.create({
            //     member_name: req.body.name,
            //     member_email: req.body.email,
            //     member_phone: req.body.phone,
            //     member_no: req.body.no,
            //     member_bdate: req.body.bdate,
            //     member_password: md5(req.body.password)
            // })


        } catch (error) {
            return res.status(400).json({ message: error })
        }
    }

    login = async (req, res) => {
        const { email, password } = req.body
        try {
            if (!email) return res.status(401).json({ status: false, message: 'Email required!' })
            if (!password) return res.status(401).json({ status: false, message: 'Password required!' })
            const check = await MemberModel.findOne({
                member_email: email,
                member_password: md5(password)
            })
            if (check) {
                const payload = {
                    id: check._id,
                    member_email: check.member_email,
                    member_no: check.member_no,
                    member_name: check.member_name,
                }
                const token = await jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1d' })
                return res.json({ status: true, message: 'OK', data: { ...payload, token } })
            }
            return res.status(400).json({ status: false, message: 'Email or Password Wrong!' })
        } catch (error) {
            console.log(error)
            res.status(500).json({ status: false, message: 'Internal server error!' })
        }
    }


    getUSer = async (req, res) => {
        try {

            const member = await MemberModel.find()
            if (!member) {
                return res.status(400).json({ status: false, message: "data not exist" })
            }

            return res.json({ status: true, data: member })

        } catch (err) {
            console.log(err)
            res.status(500).json({ status: false, message: 'Internal server error!' })
        }
    }

}
export default new AuthController()