import { Button, Container, Table } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
function BookList (){
   let [books, setBooks]= useState([])
    useEffect(()=>{
            axios({
               url:'http://localhost:3000/books',
               method:'get'
            }).then((res)=>{
               console.log(res)
               setBooks(res.data.data)
            }).catch((err)=>{
               console.log(err)
            })
    },[])
    const navigate = useNavigate()
       function addBook(){
       // alert('ok')
       navigate('/add/book')
    }
    function goToBookEditPage(id){
      alert('ok')
      navigate('/edit/book/'  +id)
    }
    return(
      <div>
      {/* <h2 className="text-center">Book Library</h2> */}
      {/* </hr> */}
      <Container>
        <Container  className="d-flex justify-content-end">
         <Button variant ="dark" onClick = { addBook }>Add Book</Button>
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
                            <Button variant ="success" onClick = { ()=>goToBookEditPage(book._id)}>Edit </Button>
                            <Button variant ="warning" onClick = { addBook }>View</Button>
                            <Button variant ="danger" onClick = { addBook }>Delete</Button>
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