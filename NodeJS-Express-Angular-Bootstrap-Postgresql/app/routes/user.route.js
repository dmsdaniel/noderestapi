module.exports = function(app) {
 
	var express = require("express");
	var router = express.Router();
	
	const users = require('../controllers/user.controller.js');
	
	var db = require('../queries');

    /*router.get('/api/puppies', db.getAllPuppies);*/
	router.get('/api/users/:id', db.getSingleUser);
	/*
    router.post('/api/puppies', db.createPuppy);
    router.put('/api/puppies/:id', db.updatePuppy);
    router.delete('/api/puppies/:id', db.removePuppy); */
	
	var path = __basedir + '/views/';
	
	router.use(function (req,res,next) {
		console.log("/" + req.method);
		next();
	});
	
	app.get('/', (req,res) => {
		res.sendFile(path + "index.html");
	});
 
    // Save a User to Postgresql
    app.post('/api/users/save', users.save);
 
    // Retrieve all Users
    app.get('/api/users/all', users.findAll);
	
	app.use("/",router);
 
	app.use("*", (req,res) => {
		res.sendFile(path + "404.html");
	});
}