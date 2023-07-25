const express=require('express');
const router=express.Router();
const handleRefreshToken=require('../controllers/refreshController');
const { model } = require('mongoose');

router.get('/',handleRefreshToken);

module.exports=router;