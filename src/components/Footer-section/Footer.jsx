import React from 'react'
import { Container, Col, Row, ListGroupItem, ListGroup } from 'reactstrap'
import './footer.css'

const footerQuickLinks = [
    {
        display: 'Home',
        url: '#'
    },
    {
        display: 'About Us',
        url: '#'
    },
    {
        display: 'Courses',
        url: '#'
    },
    {
        display: 'Pages',
        url: '#'
    },
    {
        display: 'Blog',
        url: '#'
    },
]

const footerInfoLinks = [
    {
        display: 'Privacy Policy',
        url: '#'
    },
    {
        display: 'Membership',
        url: '#'
    },
    {
        display: 'Purchase Guide',
        url: '#'
    },
    {
        display: 'Term of Service',
        url: '#'
    },
]

const Footer = () => {
    return (
        <Container>
            <Row>
                <Col lg='3'>
                    <h2 className="d-flex align-items-center gap-1">
                        <i class="ri-pantone-line"></i>Learners.
                    </h2>

                    <div className="follows">
                        <p className='mb-0'>Follow Us</p>
                        <span>
                            {" "}
                            <a href="https://id-id.facebook.com/">
                                <i class="ri-facebook-circle-fill"></i>
                            </a>
                        </span>
                        <span>
                            {" "}
                            <a href="https://twitter.com/">
                                <i class="ri-twitter-fill"></i>
                            </a>
                        </span>
                        <span>
                            {" "}
                            <a href="https://www.instagram.com/">
                                <i class="ri-instagram-fill"></i>
                            </a>
                        </span>
                        <span>
                            {" "}
                            <a href="https://discord.com/login">
                                <i class="ri-discord-fill"></i>
                            </a>
                        </span>
                    </div>
                </Col>

                <Col lg='3'>
                    <h6 className='fw-bold'>Explore</h6>
                    <ListGroup className='link_list'>
                        {
                            footerQuickLinks.map((item, index) => (
                                <ListGroupItem key={index} className='border-0 ps-0 link_item'>
                                    <a href={item.url}>{item.display}</a>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg='3'>
                    <h6 className='fw-bold'>Information</h6>
                    <ListGroup className='link_list'>
                        {
                            footerInfoLinks.map((item, index) => (
                                <ListGroupItem key={index} className='border-0 link_item'>
                                    <a href={item.url}>{item.display}</a>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg='3'>
                    <h6 className='fw-bold'>Get in Touch</h6>
                    <p>Address : New York, United States</p>
                    <p>Phone : +22 8732 0123</p>
                    <p>Email : email@example.com</p>
                </Col>
            </Row>
        </Container >
    )
}

export default Footer