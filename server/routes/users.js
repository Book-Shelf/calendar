var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const User = require('../model/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const JWT_KEY = '@#dfsad324dalkvoapf;faoskdmcap[wldap[wldsa;,cawe@#%!@#DA';

const mongodbURL = 'mongodb+srv://blog1:1234@cluster0.34o8a.mongodb.net/dbtest?retryWrites=true&w=majority'; //you have to install mongoDB and host on localhost
mongoose.connect(mongodbURL,{useNewUrlParser: true, useUnifiedTopology: true});

router.post('/register', async function(req, res) {  
  const {username, email, textPassword} = req.body;
  
  if(!username || !email || !textPassword){
    return res.json({status : 'error', error : "invalid data"});
  }
  
  const password = await bcrypt.hash(textPassword, 10); //hashing password and save it to database

  try{
    const response = await User.create({
      username,
      email,
      password
    });
    console.log('inserted user => ', response);
  }catch(err){
    if(err.code == 11000){
      return res.json({status : 'error', error : Object.keys(err.keyPattern).pop() + " already in use"});
    }else{
      throw err;
    }
    
  }
  res.json({status : 'ok'});
})

router.post('/login', async function(req, res){
  const {username, textPassword} = req.body; 
  const user = await User.findOne({username}).lean();

  if(!user){
    return res.json({status:'error', error:"invalid username/password"})
  } 

  if(await bcrypt.compare(textPassword, user.password)){
    const token= jwt.sign({
      id: user._id,
      username : user.username
    },JWT_KEY)
    
    return res.json({status:'ok', data: token});
  }

  res.json({status:'error', error:"invalid username/password"})
})


module.exports = router;
