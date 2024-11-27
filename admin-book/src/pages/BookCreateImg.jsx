import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
function BookCreateImg (){
    const navigate = useNavigate()    //usenavigate is used for moving one page to another page
    let [bookName, setBookName ] = useState('')
    let [authorName, setAuthorName ] = useState('')
    let [description, setDescription ] = useState('')
    let [price, setPrice] = useState('0')
    let [publisher, setPublisher] = useState('')
    let [isbnNo, setIsbnNo] = useState('')
    let [file, setFile] = useState('')
    let [shortDescription, setShortDescription] = useState('')
    let [language,setLanguage]= useState('')
    let [ bookStatus,SetBookStatus]= useState('')
    let [ quantity,setQuantity]= useState('')
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
 formData.append('shortDescription', setDescription)
 formData.append('language',language)
 formData.append('bookStatus',bookStatus)
formData.append('quantity',quantity)
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
        }).catch((err)=>{
            console.log(err)
        })
    }
    const handleIsbnChange = (e) => {
        const value = e.target.value;
        setIsbnNo(value);
        // Validate ISBN format (length check)
        if (value.length !== 10 && value.length !== 13) {
            setError('ISBN must be 10 or 13 characters long.');
        } else {
            setError('');
        }
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value); // Update selected language
    };
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
                <Form.Label>Short Description</Form.Label>
                <Form.Control type="text" placeholder="description"  onChange = {(e) => setShortDescription(e.target.value)}/>
            </Form.Group>
            {shortDescription}

                <Form.Group className="mb-3">
                <Form.Label htmlFor="language">Language</Form.Label>
                <Form.Select
                    id="language"
                    value={language}
                    onChange={handleLanguageChange}
                >
                    <option value="hindi">Hindi</option>
                    <option value="english">English</option>
                </Form.Select>
            </Form.Group>
                
            <Form.Group className="mb-3">
                <Form.Label htmlFor="Book Status">Book Status</Form.Label>
                <Form.Select
                    id="status"
                    value={language}
                    onChange={handleLanguageChange}
                >
                    <option value="first hand">First Hand</option>
                    <option value="second hand">Second Hand</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number"  onChange = {(e) => setQuantity(e.target.value)}/>
            </Form.Group>
            {quantity}
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