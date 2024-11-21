const express = require('express');
const router = express.Router();
const bookcontroller = require('../controllers/bookcontroller');
const multer = require('multer');
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended : false
}));
const uploader = multer({
    storage:multer.diskStorage({}),
    limits: { fileSize: 10 * 1024 * 1024},
});

router.post('/add/book',uploader.single("file"), (req,res)=>{
    // console.log("we are in add book route ")
    bookcontroller.addBook(req,res);
})
router.get('/books',(req,res)=>{
    //console.log("get book route")
    bookcontroller.getBooks(req,res);
})
router.get('/book/:id',(req,res)=>{
    // console.log("we are in get book route");
    bookcontroller.getBook(req,res)
})
router.put('/edit/book/:id',(req,res)=>{
    // console.log("edit route")
    bookcontroller.editBook(req,res)
})
router.delete('/delete/book/:id',(req,res)=>{
    //console.log("delete route ");
    bookcontroller.deleteBook(req,res)
})
module.exports = router;