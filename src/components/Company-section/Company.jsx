import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Company = () => {
    return <section>
        <Container>
            <Row>
                <Col lg='2' md='3'>
                    <h3 className='d-flex align-items-center gap-1'>
                        <i class="ri-apple-fill"></i>Apple
                    </h3>
                </Col>

                <Col lg='2' md='3'>
                    <h3 className='d-flex align-items-center gap-1'>
                        <i class="ri-bilibili-fill"></i>BliBli
                    </h3>
                </Col>

                <Col lg='2' md='3'>
                    <h3 className='d-flex align-items-center gap-1'>
                        <i class="ri-linkedin-fill"></i>LinkedIn
                    </h3>
                </Col>

                <Col lg='2' md='3'>
                    <h3 className='d-flex align-items-center gap-1'>
                        <i class="ri-paypal-fill"></i>PayPal
                    </h3>
                </Col>

                <Col lg='2' md='3'>
                    <h3 className='d-flex align-items-center gap-1'>
                        <i class="ri-discord-fill"></i>Discord
                    </h3>
                </Col>

                <Col lg='2' md='3'>
                    <h3 className='d-flex align-items-center gap-1'>
                        <i class="ri-netflix-fill"></i>Netflix
                    </h3>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Company