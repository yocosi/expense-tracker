const express = require("express");
const Expense = require('../models/expense');
const router = new express.Router();
const cors = require('cors');

let corsOptions = {
  origin: '*',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200
}
router.use(cors());

router.post('/expenses', cors(corsOptions), async (req, res) => {

  const expenses = new Expense(req.body);

  try {
    await expenses.save();
    res.status(201).send(expenses);
  } catch (error) {
    res.status(400).send(error);
  }
})

router.get('/expenses', cors(corsOptions), async (req, res) => {
  try {
    let expense = await Expense.find();
    res.send(expense);
  } catch (error) {
    res.status(500).send(error);
  }
})

router.delete('/expenses/:id', cors(corsOptions), async (req, res) => {
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