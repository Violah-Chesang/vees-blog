const User = require('../models/user');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
router.post('/',async (req, res) => {
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
            res.status(200).json(token);
        }        
    }else{
        res.status(400).json("Invalid credentials!");
    }

});

module.exports = router;