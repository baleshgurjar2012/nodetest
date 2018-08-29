 const express=require('express');
 const router=express.Router();
// const Contact=require('../models/contacts');

// router.get('/contacts',(req,res,next)=>{
// console.log('get',req.params);
//     Contact.find({firstname:'balesh'},function(err,contact){
// res.json(contact);
//     })
// })

// router.post('/contact',(req,res,next)=>{
// let newContact=new Contact({
//     firstname:req.body.firstname,
//     lastname:req.body.lastname,
//     phone:req.body.phone
// });
// newContact.save(function(error){
//     if(error)
//     {
//         res.json({msg:'failed to add contact'+ error});
//     }else{
//         res.json({msg:'contact added sucessfully'});
        
//     }
// });
// })
//module.exports=router;

// GET home page.
router.get('/', function(req, res) {
    res.redirect('/catalog');
  });