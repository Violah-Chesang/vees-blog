const express = require('express');
const jwt = require('jsonwebtoken');
const dotevn = require('dotenv').config();
function authorization(req, res, next) {
    //store token in headers and access it here
    const { token }= req.headers;
    if(!token) {
        res.send('Access denied!');
    }
    try{
        // verify
        const jwtVerified = jwt.verify(token, process.env.jwt_key);

        if(!jwtVerified){
            res.send('Access denied!');
        }
        // login if the token verified successfully
        next();
    }  catch(err) {
        console.error(err);
        res.send('Access denied!');
    }  
}

module.exports = authorization;