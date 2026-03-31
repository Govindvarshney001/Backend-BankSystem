const mongoose = require("mongoose");

/**
 * - Create a new transaction
 * THE 10-STEP TRANSFER FLOW:
     * 1. Validate request
     * 2. Validate idempotency key
     * 3. Check account status
     * 4. Derive sender balance from ledger
     * 5. Create transaction (PENDING)
     * 6. Create DEBIT ledger entry
     * 7. Create CREDIT ledger entry
     * 8. Mark transaction COMPLETED
     * 9. Commit MongoDB session
     * 10. Send email notification
 */

const transactionSchema = new mongoose.Schema({
    fromAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: [true, "Sender account is required for creating a transaction"],
        index: true,
    },
    toAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: [true, "Receiver account is required for creating a transaction"],
        index: true,
    },
    status: {
        type: String,
        enum: {
            values: ["PENDING", "COMPLETED", "FAILED","REVERSED"],
            message: "Status can be either PENDING, COMPLETED or FAILED",
        },
        default: "PENDING",
    },
    amount: {
        type: Number,
        required: [true, "Amount is required for creating a transaction"],  
        min : [0 , "Amount should be a positive number"]

    },
    idempotencyKey: {
        type: String,
        required: [true, "Idempotency key is required for creating a transaction"],
        unique: true,
        unique: true,
        trim: true,
    },
}, {
    timestamps: true,
});

const transactionModel = mongoose.model("transaction", transactionSchema);

module.exports = transactionModel;