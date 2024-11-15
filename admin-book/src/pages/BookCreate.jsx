import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
function BookCreate (){
    const navigate = useNavigate()    //usenavigate is used for moving one page to another page
    let [bookName, setBookName ] = useState('')
    let [authorName, setAuthorName ] = useState('')
    let [description, setDescription ] = useState('')
    let [price, setPrice] = useState('0')
    let [publisher, setPublisher] = useState('')
    let [isbnNo, setIsbnNo] = useState('')


    function addBook(){
        let data ={
            bookName: bookName,
            authorName: authorName,
            description: description,
            price: price,
            publisher: publisher,
            isbnNo: isbnNo
        }
        axios({ 
            url: 'http://localhost:3000/add/book',
            method: "post",
            data: data
        }).then((res)=>{
            console.log(res)
            if(res.data.success)
            navigate('/books')
        }).catch((res)=>{
            console.log(err)
        })
    }
    return(
        
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Book Name</Form.Label>
                <Form.Control type="text" placeholder="Book Name" onChange = {(e) => setBookName(e.target.value)} />
            </Form.Group>
            { bookName}
            <Form.Group className="mb-3" >
                <Form.Label>Author Name</Form.Label>
                <Form.Control type="text" placeholder="Author Name" onChange = {(e) => setAuthorName(e.target.value)} />
            </Form.Group>
            { authorName}
            <Form.Group className="mb-3" >
                <Form.Label>Description</Form.Label>
                <Form.Control type="textarea" placeholder="Description" onChange = {(e) => setDescription(e.target.value)} />
            </Form.Group>
            { description}
            <Form.Group className="mb-3" >
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Price" onChange = {(e) => setPrice(e.target.value)} />
            </Form.Group>
            { price}
            <Form.Group className="mb-3" >
                <Form.Label>Publisher</Form.Label>
                <Form.Control type="text" placeholder="Publisher" onChange = {(e) => setPublisher(e.target.value)}/>
            </Form.Group>
            { publisher}
            <Form.Group className="mb-3" >
                <Form.Label>ISBN No</Form.Label>
                <Form.Control type="text" placeholder="ISBN No"  onChange = {(e) => setIsbnNo(e.target.value)}/>
            </Form.Group>
            {isbnNo}
            <Container>
        <Button variant ="dark" onClick = { addBook }>Add Book</Button>
     </Container> 
           
      </Form>
    )
}
export default BookCreate