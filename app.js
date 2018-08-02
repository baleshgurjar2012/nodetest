//import module

var express=require('express');
var mongoose=require('mongoose');

var bodyparser=require('body-parser');
var cors=require('cors');
var path=require('path');


var app=express();
var route=require('./routes/route');
var port=3000;


//adding middlewear-cors
app.use(cors());

//body-parser

app.use(bodyparser.json());

//static file

app.use(express.static(path.join(__dirname,'public')));

//route
app.use('/api',route);
//testing server
app.get('/',(req,res)=>{
    res.send('footer');
})
app.listen(port,()=>{
console.log('server started at port:',port);
})

//connect to mongoose db
//mongoose.connect('mongodb://localhost:27017/contactlist', { useNewUrlParser: true });
mongoose.connect("mongodb://localhost:27017/contactlist", { useNewUrlParser: true }, function(err, db) {
  if(!err) {
    console.log("We are connected");
      db.collection('Contact').insertOne({
        "first_name":"balesh",
            "last_name":"kumar",
        "phonenumber":"4545464",
    
    },function(err,result){
        
          db.close();
      })
    
  }
});
// mongoose.connection.on('connect',()=>{
// console.log('connected to mongodb');
// });
// mongoose.connection.on('error',(err)=>{
//     if(err){
//         console.log('error in db',err);
//     }
//     });