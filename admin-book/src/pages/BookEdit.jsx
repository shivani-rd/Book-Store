import { useParams, useNavigate } from "react-router-dom"
import { useEffect} from "react"
import{ Form, Button,Container} from "react-bootstrap"
import { useState } from "react"
import axios from "axios"
function BookEdit(){
    let [book, setBook] = useState({
        bookName: '',
        authorName: '',
        description:'',
        price: 0,
        publisher: '',
        isbnNo: '',
    })
    let Navigate = useNavigate()
        let params = useParams()
    let id = params.id
    useEffect(()=>{
        axios({
            url: 'http://localhost:3000/book/' + id,  
            method: 'get'
    }).then((res)=>{
        //console.log(res);
        setBook(res.data.data);
    }).catch((err)=>{
        console.log(err);
    })
    },[params])
    function handleChange(e){
        let name = e.target.name
        let value = e.target.value
        setBook((prev)=>{
            return {
                ...prev, [name]:value
            }
        })
    }
    function editBook(){
        alert("ok");
        axios ({
            url: 'http://localhost:3000/edit/book/' +id,
            method: 'put',
            data: book
        }).then((res)=>{
            console.log(res);
            Navigate('/books')
        }).catch((err)=>{
            console.log(err);
        })
    }
    return(
        <Form>
        <Form.Group className="mb-3" >
            <Form.Label>Book Name</Form.Label>
            <Form.Control type="text" name="bookName"value={ book.bookName } onChange={ handleChange } />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Author Name</Form.Label>
            <Form.Control type="text" name="authorName" value={ book.authorName } onChange={ handleChange } />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Description</Form.Label>
            <Form.Control type="textarea" name="description" value={ book.description } onChange={ handleChange } />
        </Form.Group> 
        <Form.Group className="mb-3" >
            <Form.Label>Price</Form.Label>
            <Form.Control type="number"  name="price"value={ book.price } onChange={ handleChange } />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Publisher</Form.Label>
            <Form.Control type="text"  name="publisher" value={ book.publisher } onChange={ handleChange }/>
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>ISBN No</Form.Label>
            <Form.Control type="text"  name="isbnNo" value={ book.isbnNo } onChange={ handleChange } />
        </Form.Group>
        <Container>
    <Button variant ="dark" onClick={ editBook}>Edit Book</Button>
 </Container> 
  </Form>
    )
}
export default BookEdit