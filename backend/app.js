const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const userRouter = require('./routes/user');
const cors = require('cors');

dotenv.config();
const app = express();

app.use(cors({
    origin: ['https://vees-blog-fontend-qoa9moqmp-violahs-projects.vercel.app/'],
    methods: ['POST', 'GET'],
    credentials: true
}))

app.use(express.json())
app.use(userRouter);


const PORT = process.env.PORT;
db();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
