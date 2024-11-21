const Book = require('../models/Book')
async function addBook(req,res){
    try{
        console.log(req.body, 'req.body');
        console.log("-----------------------");
        console.log(req.file, 'req.file')
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
      //  console.log(req.query, 'req.query')  //req.query is used  mainly for search bar
       // let books = await Book.find({})
       let books = await Book.find({bookName: new RegExp(req.query.search,"i")})
        //console.log(books, 'books');
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
        // console.log(book, 'book');
        // console.log("le gayi book")
        res.status(200).send({ success: true, data:book });
    }catch(err){
        console.log(err);
        res.status(200).send({ success: false });
    }
}
async function editBook(req,res){
    try{
        let id = req.params.id;
        let book = await Book.findOne({_id:id})
        // console.log(book, 'book');
        // console.log("---------------------------");
        // console.log(req.body,'req.body')
        book.bookName = req.body.bookName;
        book.authorName = req.body.authorName;
        book.description = req.body.description;
        book.price = req.body.price;
        book.publisher = req.body.publisher;
        book.isbnNo = req.body.isbnNo;
        await book.save();
        res.status(200).send({ success :true });
    
    }catch(err){
        console.log(err)
        res.status(400).send({ success:false });
    }
}
async function deleteBook(req,res){
    try{
        let id =req.params.id;
        await Book.deleteOne({_id:id})
        let books = await Book.find({});
        res.status(200).send({ success:true, data:books})
    }catch(err){
        console.log(err);
        res.status(400).send({ success: false});
    }
}
module.exports= {
    addBook,
    getBooks,
    getBook,
    editBook,
    deleteBook
}