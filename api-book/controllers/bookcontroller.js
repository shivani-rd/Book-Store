const Book = require('../models/Book')
const cloudinary = require('cloudinary')
async function addBook(req,res){
    try{
        // console.log(req.body, 'req.body');
        // console.log("-----------------------");
        // console.log(req.file, 'req.file')
        cloudinary.config({
       cloud_name :"dxe7unrwn",
       api_key : "671645553674566",
       api_secret : "8LAAiy9bqxyu0pbiYrsUTP_3NDU"
        })
        let book = new Book(req.body);
        if(req.file){
            const result = await cloudinary.uploader.upload(req.file.path)
            book.bookImage = result.secure_url;
        }
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
       console.log(req.query, 'req.query')  //req.query is used  mainly for search bar
       let page = req.query.page;
       let limit = req.query.limit
       let totalCounts = await Book.countDocuments({});
       // let books = await Book.find({})
       let books = await Book.find({bookName: new RegExp(req.query.search,"i")}).skip((page-1)*limit).limit(limit);
        //console.log(books, 'books');
        res.status(200).send({ success:true, data:books, totalCounts: totalCounts });
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