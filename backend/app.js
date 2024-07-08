const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const userRouter = require('./routes/user');

dotenv.config();
const app = express();

app.use(express.json())
app.use(userRouter);


const PORT = process.env.PORT;
db();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});