const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/bookstore')
        console.log('Databse Connected');
        
    }catch(err){
        console.log(err.message);
        
    }
}
module.exports = connect;