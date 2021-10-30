const express = require("express");
const Expense = require('../models/expense');
const router = new express.Router();

router.post('/expenses', async (req, res) => {

  const expenses = new Expense(req.body);

  try {
    await expenses.save();
    res.status(201).send(expenses);
  } catch (error) {
    res.status(400).send(error);
  }
})

module.exports = router;