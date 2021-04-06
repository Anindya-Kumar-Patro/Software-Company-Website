import React from 'react'
import {Form , Col,Button} from 'react-bootstrap'
function Contact() {
    return (
        <div className="col-12 contact-us">
            <br/>
            <div className="row">
                 <div className="col-4 mx-auto">
                    <h1>Contact Us</h1>
                    <br/>
                    <h4>
                        Have any queries or suggestions? <br/> 
                    </h4>
                    <h5>
                    Reach out to us by filling out the form. <br/>
                    </h5>
                    <p>
                        Company Number : 6758465739 <br/>
                        Company Mail: office.email@gmail.com
                    </p>
                    

                 </div>
                 <div className="col-6 mx-auto">
                 <Form>
                 <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control type="text" placeholder="Enter First name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control type="text" placeholder="Enter Last name" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control type="text" placeholder="Enter phone Number" />
                        </Form.Group>
                    </Form.Row>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} placeholder="Enter Message"/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                             
                </Form>
                
                 </div>
            </div>
            
        </div>
    )
}

export default Contact
