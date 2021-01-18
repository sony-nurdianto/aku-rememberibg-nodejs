import Transaction from "../models/transaction";
import TransactionDetailModel from "../models/transaction-details"
import mongoose from "mongoose"
const ObjectId = mongoose.Types.ObjectId



class TransactionControler {



    GetTransactionByMember = async (req, res) => {
        const { member } = req.query

        try {
            const memberTransaction = await Transaction.aggregate([
                {
                    $match: {
                        memberId: ObjectId(member)
                    }
                },
                {
                    $group: {
                        _id: "$payment_type",
                        TotalTransactionVitual: {
                            $sum: "$grand_total"
                        }
                    }
                }

            ])
            return res.status(200).json({ status: true, data: memberTransaction })
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" })
        }
    }


    GetTotalTransactionByDate = async (req, res) => {
        const { startDate, endDate } = req.query;

        try {
            const totalTransaction = await Transaction.aggregate([
                {
                    $match: {
                        createdAt: {
                            $gte: new Date(startDate),
                            $lte: new Date(endDate)
                        }
                    }
                },
                {
                    $group: {
                        _id: "$payment_type",
                        TotalTransactionVitual: {
                            $sum: "$grand_total"
                        }
                    }
                }
            ])

            return res.status(200).json({ status: true, data: totalTransaction })
        } catch (error) {
            if (error) {
                return res.status(400).json({ message: "internal Server Error" })
            }
        }
    }

    GetMemberTransaction = async (req, res) => {
        const memberId = req.locals.id
        try {

            // "5e79bd501a160c1ee89c9dc8" 

            const TransactionDetail = await TransactionDetailModel.findOne({ memberId: memberId }).populate('transId').populate('memberId')
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
            // const memberData = await TransactionModel.findOne({ member_no: memberNo })
            // if (!memberData) {
            //     return res.status(400).json({ status: false, message: "transaction data not found" })
            // }
            const transactionData = await Transaction.findOne({ member_no: memberNo }).populate('details').populate('memberDetails')

            if (!transactionData) {
                return res.status(200).json({ status: true, message: "there are no transaction yet", data: transactionData })
            }

            return res.status(200).json({ status: true, data: transactionData.toJSON({ virtuals: true }) })

        } catch (error) {
            return res.status(500).json(error)
        }

    }

}


export default new TransactionControler