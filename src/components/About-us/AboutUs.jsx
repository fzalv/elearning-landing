import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './about.css'
import aboutImg from '../../assets/image/about-us.png'
import CountUp from 'react-countup'

const AboutUs = () => {
    return <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="about__img">
                        <img src={aboutImg} alt="" className='w-100' />
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className="about__content">

                        <h2>About Us</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, asperiores delectus laboriosam explicabo cum omnis dolore earum sed quis voluptas!</p>
                        <div className="about__counter">
                            <div className="d-flex gap-5 align-items-center">
                                <div className="single__counter">
                                    <span className="counter">
                                        <CountUp start={0} end={25} duration={2} suffix="K" />
                                    </span>

                                    <p className='counter__title'>Completed Projects</p>
                                </div>
                                <div className="single__counter">
                                    <span className="counter">
                                        <CountUp start={0} end={12} duration={2} suffix="M" />
                                    </span>

                                    <p className='counter__title'>Patient Arround World</p>
                                </div>
                            </div>

                            <div className="d-flex gap-5 align-items-center">
                                <div className="single__counter">
                                    <span className="counter">
                                        <CountUp start={0} end={25} duration={2} suffix="K" />
                                    </span>

                                    <p className='counter__title'>Completed Projects</p>
                                </div>
                                <div className="single__counter">
                                    <span className="counter">
                                        <CountUp start={0} end={12} duration={2} suffix="M" />
                                    </span>

                                    <p className='counter__title'>Patient Arround World</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default AboutUs