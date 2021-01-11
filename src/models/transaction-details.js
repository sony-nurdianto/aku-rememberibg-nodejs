import mongoose from "mongoose"
import { referrerPolicy } from "helmet"

const Schema = mongoose.Schema

const transactionDetailSchema = mongoose.Schema(
    {
        store_name: {
            type: String
        },
        code_courier: {
            type: String
        },
        type_courier: {
            type: String
        },
        price_courier: {
            type: Number
        },
        sub_total: {
            type: Number
        },
        total_weight: {
            type: Number
        },
        waybill: {
            type: String
        },
        trans_status: {
            type: String
        },
        disburse: {
            type: Boolean
        },
        order_id: {
            type: String
        },
        store_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "stores"
        },
        total_unit_weight: {
            type: String
        },
        items: [],
        transId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'transactions'
        },
        memberId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "member"
        },
        client_code: {
            type: String
        },
        communityId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comunities"
        }
    },
    {
        timestamp: true
    }
)

export default mongoose.model('transaction_details', transactionDetailSchema)