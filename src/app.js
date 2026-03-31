const express = require('express');
const authRoutes = require('./routes/auth.routes');
const accountRouter = require('./routes/account.routes')
const cookieParser = require('cookie-parser');



const app = express();


app.use(express.json());
app.use(cookieParser());

const transactionRoutes = require('./routes/transaction.routes');

app.use("/api/auth", authRoutes);
app.use("/api/accounts" ,accountRouter)

module.exports = app;