import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
function BookEdit(){
    let params = useParams()
    let id = params.id
    useEffect(()=>{
        axios({
            url: 'http://localhost:3000/book' + id,  
            method: 'get'
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
    },)
    return(
        <h1>This page will be used for edit</h1>
    )
}
export default BookEdit