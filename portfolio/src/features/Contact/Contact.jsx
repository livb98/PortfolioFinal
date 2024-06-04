import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Placeholder from 'react-bootstrap/Placeholder'

const Contact = () => {
    return (
        <div id='contact' className='contact'>
        <Container> 
            <div >
            <h2>Contact form</h2>
        <Form style={{width: "80vw"}}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="email" placeholder="First Name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="email" placeholder="Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId='formBasicPhone'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="password" placeholder="Phone Number" />
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