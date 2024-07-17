const User = require('../models/user');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authorization = require('../middlewares/auth');

const router = express.Router();
router.post('/signup',async (req, res) => {
    try {
        const { fullNames, userName, email, password } = req.body;
        if(!fullNames || !userName || !email || !password) {
            res.status(400).json({message : "Fill all the fields"})
        }
    
        const userInDb =await User.findOne({userName});
        if(userInDb) {
            res.status(409).json({message : "Duplicate record. Username exists!" })
        }

        const hashedPass =await bcrypt.hash(password,10);

        const newUser = new User({
            fullNames,
            userName,
            email,
            password : hashedPass
        });

        const savedUser =await newUser.save();
        res.status(201).json(savedUser)
    }catch(err){
        console.error(err, {message: "Error not sign up"});
        res.status(500).json({message: "Could not signup user"})
    }
});
// router.post('/', authorization ,async (req, res) => {
router.post('/',async (req, res) => {
    res.send('hello!');
    const { userName, password } = req.body;
    if(!userName || !password) {
        res.status(400).json({message: "Missing information"})
    }

    const user = await User.findOne({userName});
    if(user) {
        const correctPass = await bcrypt.compare(password, user.password);
        if(correctPass){
            const options = {expiresIn : "1hr"}
            const token = jwt.sign({payload: user.userName}, process.env.jwt_key, options);
            res.status(200).json({token: token, user: user});
        }        
    }else{
        res.status(400).json("Invalid credentials!");
    }

});

//dashboard
router.get('/dashboard/:userName',async (req, res) => {
    const userName = req.params.userName;
    const user = await User.findOne({ userName });

    res.status(200).json(user)
    
}) 

//all users
router.get('/users',async (req, res) => {
    const users = await User.find();
    res.status(200).json(users)
    
}) 

module.exports = router;