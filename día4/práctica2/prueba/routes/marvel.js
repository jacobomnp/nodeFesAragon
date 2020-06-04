var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Marvel = require('../models/Marvel');

router.get('/comic/', (requ, res, next)=>{
	Marvel.find({},(err, datos)=>{
		if(err) res.status(500).json({error:"Eroor en la consulta"});
		if(datos) res.status(200).json(datos);
	});
})

module.exports=router;