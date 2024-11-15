const Book = require('../models/Book')
async function addBook(req,res){
    try{
        console.log(req.body, 'req.body')
        let book = new Book(req.body);
        await book.save();
        let books = await Book.find({});
        res.status(200).send({success : true , message : 'Data sent sucessfully', books:book});
    }catch(err){
        console.log(err.message);
        res.status(400).send({success : false , message : 'something went wrong ... '});
    }
}
async function getBooks(req,res){
    try{
        let books = await Book.find({})
        console.log(books, 'books');
        res.status(200).send({ success:true, data:books });
    }catch(err){
        console.log(err);
        res.status(400).send({ success : false});
    }
}
async function getBook(req,res){
    try{
        let id = req.params.id;
        let book = await Book.findOne({_id:id})
        console.log(book, 'book');
        res.status(200).send({ success: true, data:book });
    }catch(err){
        console.log(err);
        res.status(200).send({ success: false });
    }
}
module.exports= {
    addBook,
    getBooks,
    getBook
}