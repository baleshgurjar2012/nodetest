const express=require('express');
const router=express.Router();
const Contact=require('../models/contacts');

router.get('/contacts',(req,res,next)=>{

    Contact.find(function(err,contact){
res.json(contact);
    })
})

router.post('/contact',(req,res,next)=>{
let newContact=new Contact({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    phonenumber:req.body.phonenumber
});

newContact.save((err,contact)=>{
    if(err)
    {
        res.json({msg:'failed to add contact'});
    }else{
        res.json({msg:'contact added sucessfully'});
        
    }
});
})
module.exports=router;