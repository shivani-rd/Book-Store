import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
function BookCreateImg (){
    const navigate = useNavigate()    //usenavigate is used for moving one page to another page
    let [bookName, setBookName ] = useState('')
    let [authorName, setAuthorName ] = useState('')
    let [description, setDescription ] = useState('')
    let [price, setPrice] = useState('0')
    let [publisher, setPublisher] = useState('')
    let [isbnNo, setIsbnNo] = useState('')
    let [file, setFile] = useState('')

    function addBook(){
        // let data ={
        //     bookName: bookName,
        //     authorName: authorName,
        //     description: description,
        //     price: price,
        //     publisher: publisher,
        //     isbnNo: isbnNo
        // }    
// for image
 let formData = new FormData()
 
 formData.append('bookName', bookName)
 formData.append('authorName', authorName)
 formData.append('description', description)
 formData.append('price', price)
 formData.append('publisher', publisher)
 formData.append('isbnNo', isbnNo)
 formData.append('file', file)

        axios({ 
            url: 'http://localhost:3000/add/book',
            method: "post",
            data: formData,
            header  :{ 
                'content-type': 'multipart/form-data',
            }
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
     
            <Form.Group className="mb-3" >
                <Form.Label>Author Name</Form.Label>
                <Form.Control type="text" placeholder="Author Name" onChange = {(e) => setAuthorName(e.target.value)} />
            </Form.Group>
           
            <Form.Group className="mb-3" >
                <Form.Label>Description</Form.Label>
                <Form.Control type="textarea" placeholder="Description" onChange = {(e) => setDescription(e.target.value)} />
            </Form.Group>
            
            <Form.Group className="mb-3" >
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Price" onChange = {(e) => setPrice(e.target.value)} />
            </Form.Group>
           
            <Form.Group className="mb-3" >
                <Form.Label>Publisher</Form.Label>
                <Form.Control type="text" placeholder="Publisher" onChange = {(e) => setPublisher(e.target.value)}/>
            </Form.Group>
       
            <Form.Group className="mb-3" >
                <Form.Label>ISBN No</Form.Label>
                <Form.Control type="text" placeholder="ISBN No"  onChange = {(e) => setIsbnNo(e.target.value)}/>
            </Form.Group>
        
            <Form.Group className="mb-3" >
                <Form.Label>Select Image</Form.Label>
                <Form.Control type="file"   onChange = {(e) => setFile(e.target.files[0])}/>
            </Form.Group>
        
            <Container>
        <Button variant ="dark" onClick = { addBook }>Add Book</Button>
     </Container> 
           
      </Form>
    )
}
export default BookCreateImg