import React from 'react'
import { Modal, Button, Form}from 'react-bootstrap'
import{ useState} from 'react'
const Login = () => {
    let [show,setShow] = useState(true)
    let [login,setLogin] = useState(true)
    let [signup,setSignUp] = useState(false)
    let [title, setTitle] = useState("Login")
    const handleClose=()=>{
        setShow(false);
        window.location.reload();  //to refresh the page
    }
        function showSignUpModal(){
            setLogin(false)
            setSignUp(true)
            setTitle("Sign Up")
        }
  return (
   <Modal show = { show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
                login &&
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="passsword" placeholder="Enter password"></Form.Control>
                </Form.Group>
                <Button variant='dark'>Login</Button>
                <p>Do you have account?<span style={{marginLeft:'10px'}} onClick={ showSignUpModal }>Sign Up</span></p>
            </Form>
            }
            {
                signup &&
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name"></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name"></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Mobile No</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile No"></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email"></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password"></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Confirm password"></Form.Control>
                </Form.Group>
                
                <Button variant='dark'>Sign Up</Button>
            </Form>
            }
        </Modal.Body>
   </Modal>
  )
}

export default Login