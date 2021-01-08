import MemberModel from "../models/member"
import Validator from "./../service/validator"
import validator from "./../service/validator"


class Member {

    deleteMember = async (req, res) => {
        const { email } = req.body
        try {

            if (email === "") {
                return res.status(400).json({ message: "email is empty" })
            }

            const checkIsEmail = validator.emailValiator(email)

            if (!checkIsEmail) {
                return res.status(400).json({ message: "email in valid" })
            }

            const removeMember = await MemberModel.findOneAndRemove({ email })

            if (!removeMember) {
                return res.status(400).json({ message: "email not found" })
            }

            const payload = {
                member_email: removeMember.member_email,
                member_name: removeMember.member_name
            }

            return res.status(200).json({ status: true, data: payload })

        } catch (error) {
            return res.status(500).json(error)
        }
    }

    updateMemberData = async (req, res) => {

        const { email } = req.body

        try {

            if (email === "") {
                return res.status(400).json({ message: "email required" })
            }

            const checkIsEmail = Validator.emailValiator(email)

            if (!checkIsEmail) {
                return res.status(400).json({ message: "email is invalid" })
            }

            const oldData = await MemberModel.findOne({ email })

            if (!oldData) {
                return res.status(400).json({ message: "data not found" })
            }


            const updateData = {
                member_name: req.body.name ? req.body.name : oldData.member_name,
                member_email: req.body.email ? req.body.email : oldData.member_email,
                member_phone: req.body.phone ? req.body.phone : oldData.member_phone
            }


            const Update = await MemberModel.findOneAndUpdate({ email }, updateData)

            const payload = {
                member_name: Update.member_name,
                member_email: Update.member_email,
                member_phone: Update.member_phone
            }

            return res.status(200).json({ status: 200, data: payload })
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    GetMemberbyEmail = async (req, res) => {

        const email = req.body.email

        try {
            console.log(email)
            const User = await MemberModel.findOne({ member_email: email })


            if (!User) {
                return res.status(400).json({ status: false, Message: "email not found" })
            }

            const payload = {
                member_address: {
                    address: User.member_address.address,
                    city: User.member_address.city
                },
                member_name: User.member_name,
                member_photo: User.member_photo,
            }

            return res.status(200).json({ status: true, data: payload })

        } catch (err) {
            console.log(err)
            return res.status(500).json({ message: "internal server error" })
        }
    }

    GetAllMemberData = async (req, res) => {
        const data = []
        try {

            const UserData = await MemberModel.find()

            if (!UserData) {
                return res.status(400).json({ message: "data not found" })
            }

            UserData.map(result => {
                const payload = {
                    member_email: result.member_email,
                    member_name: result.member_name,
                    member_photo: result.member_photo,
                    member_phone: result.member_phone
                }

                data.push(payload)
            })

            return res.status(200).json({ status: true, data: data })
        } catch (error) {
            return res.status(500).json({ message: "internal server error" })
        }
    }

}


export default new Member