const express = require("express");
require('./db/mongoose');
const expensesRouter = require("./routers/expenses");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(expensesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})