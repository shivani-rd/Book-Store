const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps')
let Schema = mongoose.Schema;
const BookSchema = new Schema({
    bookName : { type : String },
    authorName : { type : String },
    description : { type : String },
    price : { type : String },
    publisher : { type : String },
    isbnNo : { type : String },
    createdAt : Date,
    updatedAt : Date,
})

BookSchema.plugin(timestamps , {index : true});
module.exports = mongoose.model('Book', BookSchema);

