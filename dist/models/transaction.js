"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var transactionsSchema = mongoose_1.default.Schema({
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
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model('transactions', transactionsSchema);
