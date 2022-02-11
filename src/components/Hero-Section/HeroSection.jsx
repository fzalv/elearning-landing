import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../../assets/image/hero-img1.png'
import './hero-section.css'

const HeroSection = () => {
    return <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero__content">
                        <h2 className='mb-4'>Kapanpun, dimanapun, <br /> belajar sesuka <br /> jadwalmu</h2>
                        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptatum explicabo voluptates obcaecati. <br /> Nesciunt voluptatibus ipsam, ullam dolores placeat quod corrupti?</p>

                        <div className="search">
                            <input type="text" placeholder='Search' />
                            <button className="btn">Search</button>
                        </div>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <img src={heroImg} alt="" className='w-100' />
                </Col>
            </Row>
        </Container>
    </section>
}

export default HeroSection