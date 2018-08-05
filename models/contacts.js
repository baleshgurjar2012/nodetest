const mongoose=require('mongoose');


const ContactSchema = mongoose.Schema({

    firstname:  { type: String },
    lastname:   { type: String},
    phone: { type: String }   
});


module.exports =mongoose.model('ContactInfo',ContactSchema);