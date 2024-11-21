import { Button, Container, Table,Form } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
function BookList (){
   let [books, setBooks]= useState([])
   let [isDelete, setIsDelete ] = useState(false)
   let[search, setSearch]= useState('')
    useEffect(()=>{
            axios({
               url:'http://localhost:3000/books',
               method:'get',
               params: { 
                  search: search
               }
            }).then((res)=>{
               console.log(res)
               setBooks(res.data.data)
               setIsDelete(false)
            }).catch((err)=>{
               console.log(err)
            })
    },[isDelete, search])
    const navigate = useNavigate()
       function addBook(){
       // alert('ok')
       navigate('/add/book')
    }
    function goToBookEditPage(id){
     // alert('ok')
      navigate('/edit/book/'  +id)
    }
    function deleteBook(id){
      axios({
         url: 'http://localhost:3000/delete/book/' +id,
         method: 'delete'
      }).then((res)=>{
         //below method will refresh the page
        // window.location.reload(); //to refresh is not a good practice so we should 
         //setBooks(res.data.data)
         if(res.data.success){
            alert('book has been deleted successfully');
            setIsDelete(true)
         }
      }).catch((err)=>{
         console.log(err)
      })
    }
    return(
      <div>
      {/* <h2 className="text-center">Book Library</h2> */}
      {/* </hr> */}
      <Container>
      <Form.Group className="mb-3" >
                <Form.Label>Search <i class="bi bi-search"></i></Form.Label>
                <Form.Control type="text" placeholder="Enter book name for search" onChange = {(e) => setSearch(e.target.value)} />
            </Form.Group>
            { search}
            </Container>
      <Container>
        <Container  className="d-flex justify-content-end">
         <Button variant ="dark" onClick = { addBook } >Add Book</Button>
         </Container>
      <Table striped bordered hover className="my-3">
         <thead>
            <tr>
               <th>Book Name</th>
               <th>Author Name</th>
               <th>Price</th>
               <th>Publisher</th>
               <th>Action</th>
            </tr>
            </thead>
               <tbody>
                  {
                     books.map((book, index)=>
                        <tr key={ index }>
                            <td>{book.bookName}</td>
                            <td>{book.authorName}</td>
                            <td>{book.price}</td>
                            <td>{book.publisher}</td>
                            <td>
                            <Button variant ="success" onClick = { ()=>goToBookEditPage(book._id)}size="sm" className="ms-2"><i class="bi bi-pencil"></i> </Button>
                            <Button variant ="warning" onClick = { addBook } className="ms-2" size="sm"> <i class="bi bi-eye"></i></Button>
                            <Button variant ="danger" onClick = {  ()=>deleteBook(book._id)}size="sm" className="ms-2" style={{ marginLeft: '10px'}} ><i class="bi bi-trash3"></i></Button>
                            </td>
                        </tr>
                     )
                  }
               </tbody>
      </Table>
     </Container>  
     </div> 
    )
}
export default BookList