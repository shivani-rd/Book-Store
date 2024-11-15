const express = require('express');
const router = express.Router();
const bookcontroller = require('../controllers/bookcontroller');

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended : false}));


router.post('/add/book', (req,res)=>{
    console.log("we are in add book route ")
    bookcontroller.addBook(req,res);
})
router.get('/books',(req,res)=>{
    //console.log("get book route")
    bookcontroller.getBooks(req,res);
})
router.get('/book/:id',(req,res)=>{
    console.log("we are in get book route")
    bookcontroller.getBook(req,res)
})
module.exports = router;