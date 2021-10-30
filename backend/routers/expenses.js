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

router.delete('/expenses/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const expenses = await Expense.findByIdAndDelete({ _id: _id });
    if (!expenses) {
      return res.status(404).send({ error: "Unable to find the expense" });
    }
    res.status(200).send(expenses);
  } catch (error) {
    res.status(400).send(error);
  }
})

module.exports = router;