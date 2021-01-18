import Transaction from "../models/transaction";
import TransactionDetailModel from "../models/transaction-details"



class TransactionControler {


    GetTotalTransactionByDate = async (req, res) {
        const { pStartDate, pEndDate } = req.query;
        let startDate = JSON.parse(pStartDate);
        let enDate = JSON.parse(pEndDate);
        try {
            const totalTransaction = await Transaction.aggregate([
                {
                    $match: {
                        createdAt: {
                            $gte: new Date("2020-04-22 11:04:42.711Z"),
                            $lte: new Date("2021-01-04 11:04:42.711Z")
                        }
                    },
                    $group: {
                        _id: {
                            payment_type: "virtual_account"
                        },
                        TotalTransactionVitual: {
                            $sum: "$grand_total"
                        }
                    }
                }
            ])

            console.log(totalTransaction)
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