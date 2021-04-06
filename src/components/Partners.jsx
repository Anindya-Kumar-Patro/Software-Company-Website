import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import p1 from '../images/partner1.png'
import p2 from '../images/partner2.png'
import p3 from '../images/partner3.png'
import p4 from '../images/partner4.png'

function Partners() {
    return (
        <div className="partners">
            <Container >
                <br/>
                <Row><Col><h2>Our Partners</h2></Col></Row>
                <br/>
                <Row>
                    <Col>
                        <img src={p1} alt='p1'className="partner1"/>
                    </Col>
                    <Col>
                        <img src={p2} alt='p2'className="partner2"/>
                    </Col>
                    <Col>
                        <img src={p3} alt='p3'className="partner3"/>
                    </Col>
                    <Col>
                        <img src={p4} alt='p4'className="partner4"/>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Partners
