import TransactionModel from "../models/member";
// import MemberModel from "../models/member";5870002744


class TransactionControler {

    GetMemberByNumberNo = async (req, res) => {
        const memberNo = req.locals.member_no || 5870002744

        try {
            const transactionData = await TransactionModel.findOne({ member_no: memberNo })
            if (!transactionData) {
                return res.status(400).json({ status: false, message: "transaction data not found" })
            }

            const payload = {
                id: transactionData._id,
                member_email: transactionData.member_email,
                member_name: transactionData.member_name,
                member_photo: transactionData.member_photo,
                member_phone: transactionData.member_phone
            }

            return res.status(200).json({ status: 200, data: payload })
        } catch (error) {
            return res.status(500).json(error)
        }

    }

}


export default new TransactionControler