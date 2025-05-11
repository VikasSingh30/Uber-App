const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const userRouter = require('./routes/user.routes.js');
const captainRouter = require('./routes/captain.routes.js');

const connectToDB = require('./db/db.js');
connectToDB();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
}); 
app.use('/users', userRouter);
app.use('/captains', captainRouter);


module.exports = app;

