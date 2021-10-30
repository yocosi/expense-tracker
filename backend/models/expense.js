const mongoose = require("mongoose");

const expensesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: Number,
    required: true,
    trim: true,
    minlength: 1
  },
  date: {
    type: Date,
    required: true,
    trim: true
  }
});

const Expense = mongoose.model("Expense", expensesSchema);

module.exports = Expense;