const mongoose = require('mongoose');

mongoose.connect('mongodb:cluster0.91yvt.mongodb.net:27017',(err)=>{
    if(!err){
        console.log('connection is succcessful')
    }else{
        console.log('error in connection'+ err);
    }
})

module.exports = mongoose