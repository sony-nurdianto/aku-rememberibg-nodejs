import TransactionModel from "../models/member";
import MemberModel from "../models/member";


class TransactionControler {

    GetMemberByNumberNo = async (req, res) => {
        console.log(req.locals)
        // try {

        //     const transferData = await TransactionModel.findOne({member_no})

        //     if (!transferData) {
        //         return res.status(400).json({message: "member_no not found or not exist"})
        //     }

        //     const Member = await MemberModel.findOne({member_no})

        //     if(!Member) {
        //         return res.status(400).json({message: `no member has a transaction number ${member_no} `})
        //     }

        //     return res.status(200).json()
        // } catch (error) {

        // }
    }

}


export default new TransactionControler