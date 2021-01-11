import mongoose from "mongoose";


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
        transactionDetails: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'transactions'
            }
        ],
        no_va: {
            type: String
        },
        expired_date: {
            type: Date
        }
    },
    {
        timestamps: true
    }
);


export default mongoose.model('transactions', transactionsSchema)