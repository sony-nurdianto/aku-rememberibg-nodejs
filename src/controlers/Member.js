import MemberModel from "../models/member"


class Member {

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

}


export default new Member