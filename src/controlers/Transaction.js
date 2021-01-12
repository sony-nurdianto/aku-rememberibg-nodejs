import TransactionModel from "../models/member";
import Transaction from "../models/transaction";
import TransactionDetailModel from "../models/transaction-details"
import transactionDetails from "../models/transaction-details";
// import MemberModel from "../models/member";5870002744


class TransactionControler {

    GetMemberTransaction = async (req, res) => {
        const memberId = req.locals.id
        try {

            // "5e79bd501a160c1ee89c9dc8" 

            const TransactionDetail = await TransactionDetailModel.findOne({ memberId: "5e79bd501a160c1ee89c9dc8" }).populate('transId').populate('memberId')
            if (!TransactionDetail) {
                return res.status(400).json({ status: false, message: "data not found" })
            }

            return res.status(400).json({ status: true, data: TransactionDetail })

        } catch (error) {
            return res.status(500).json(error)
        }
    }

    GetMemberByNumberNo = async (req, res) => {
        const memberNo = req.locals.member_no

        try {
            // 5870002744
            const memberData = await TransactionModel.findOne({ member_no: "5870002744" })
            if (!memberData) {
                return res.status(400).json({ status: false, message: "transaction data not found" })
            }
            const transactionData = await Transaction.findOne({ member_no: memberData.member_no }).populate('details').populate('memberDetails')

            if (!transactionData) {
                return res.status(200).json({ status: true, message: "there are no transaction yet" })
            }

            return res.status(200).json({ status: true, data: transactionData.toJSON({ virtuals: true }) })

        } catch (error) {
            return res.status(500).json(error)
        }

    }

}


export default new TransactionControler