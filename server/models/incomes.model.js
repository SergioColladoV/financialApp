const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const incomesSchema = new Schema(
    {
        concept: String,
        quantity: Number,
        category: String,
        subcategory: String,
        date: String,
        workExpense: Boolean,
        notComputable: Boolean,
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

const Incomes = mongoose.model("Incomes", incomesSchema);
module.exports = Incomes;
