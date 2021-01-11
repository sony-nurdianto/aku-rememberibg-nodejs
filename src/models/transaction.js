import mongoose from "mongoose";
import transactionDetails from "./transaction-details";


const transactionsSchema = mongoose.Schema(
    {
        order_id: {
            type: String
        },
        payment_type: {
            type: String
        },
        card_type: {
            type: String
        },
        bank: {
            type: String
        },
        masked_card: {
            type: String
        },
        approval_code: {
            type: String
        },
        grand_total: {
            type: Number
        },
        transaction_status: {
            type: String
        },
        member_no: {
            type: String
        },
        send_to: {
            received: {
                type: String
            },
            address_name: {
                type: String
            },
            province: {
                type: String
            },
            city: {
                type: String
            },
            subdistrict: {
                type: String
            },
            postcode: {
                type: String
            },
            phone: {
                type: String
            }
        },
        no_va: {
            type: String
        },
        expired_date: {
            type: Date
        }
    },
    {
        timestamps: true
    },
    {
        toObject: { virtuals: true }
    },
    {
        toJSON: { virtuals: true }
    }
);

transactionsSchema.virtual('details', {
    ref: 'transaction_details',
    localField: '_id',
    foreignField: 'transId'
})

export default mongoose.model('transactions', transactionsSchema)