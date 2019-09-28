import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import './register.component.css';


export default class Register extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(e) {
        alert('The value is: ' + this.input.value);
        e.preventDefault();
      }

    render() {
        return (
            <div className="container" data-aos="fade-up"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500">

                <h1 className='mt-5'>Registrovanje firme</h1>
                <Form className='mt-3'>
                    <Form.Group controlId="adminId">
                        <Form.Label>Full name (admin)</Form.Label>
                        <Form.Control type="text" placeholder="John Doe" />
                    </Form.Group>
                    <Form.Group controlId="emailId">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="passwordId">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="password" />
                    </Form.Group>
                    <Form.Group controlId="phoneId">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="number" placeholder="0641115555" />
                    </Form.Group>

                    <Form.Group controlId="companyNameId">
                        <Form.Label>Company name</Form.Label>
                        <Form.Control type="text" placeholder="Company name" />
                    </Form.Group>

                    <Form.Group controlId="industryId">
                        <Form.Label>Industry</Form.Label>
                        <Form.Control type="text" placeholder="Industry" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Address" />
                    </Form.Group>

                    <button className='btn btn-primary mb-5' variant="primary" type="submit">
                        Submit
                    </button>
                    </Form>
            </div>
        )
    }
}
