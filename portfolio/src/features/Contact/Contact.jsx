import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Placeholder from 'react-bootstrap/Placeholder'
import axios from 'axios';
import { useState, useEffect } from 'react';
const serverUrl = `https://portfoliofinal-7bli.onrender.com`


const Contact = () => {
    const [contact, setContact] = useState([])
    const fetchContact = async() => {
        const res = await axios.post(`${serverUrl}/contact`)
        const data = await res.data
        console.log(data);
        setContact(data)
    }

    useEffect(()=>{
        fetchContact()
    },[])

    return (
        <div id='contact' className='contact'>
        <Container> 
            <div >
            <h2>Contact form</h2>
        <Form style={{width: "80vw"}}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
            {/* <Form.Control type="email" placeholder="Enter email" /> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId='formBasicPhone'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Phone Number" />
            </Form.Group>
            <Button variant="secondary" type="submit">
            Submit
            </Button>
        </Form>
            </div>

        </Container>

        </div>


    )

}

export default Contact