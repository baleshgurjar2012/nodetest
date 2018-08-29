var Author= require('../models/author');
var jwt = require('jsonwebtoken');
var config = require('../config');

exports.create_author= function(req,res){

    var token = req.headers['x-access-token'];
    console.log('header',token);
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token,config.secret,function(error,decoded){
        if (error) return res.status(500).send({ auth: false, message:error+ 'Failed to authenticate token.' });
       // res.status(200).send(decoded);
    

    let author= new Author({
        first_name:req.body.first_name,
        family_name:req.body.family_name,
        date_of_birth:new Date(req.body.date_of_birth),
        date_of_death: req.body.date_of_death

    });

    console.log('author',req.body.date_of_death);
    author.save(function(err){
        if(err)
            {
                res.send({msg:'failed to add author'+ err});
            }else{
                res.send({msg:'author added sucessfully'});
                
            }
    });
});
};

exports.get_author= function(req,res){

   

};