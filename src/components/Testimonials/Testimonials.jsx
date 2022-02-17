import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './testimoni.css'
import img from '../../assets/image/testimonial01.png'
import Slider from 'react-slick'

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1
    };

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='10' className='m-auto'>
                        <div className="testimonial_wrapper d-flex justify-content-between align-items-center">
                            <div className="tetimonial_img w-50">
                                <img src={img} alt="" className='w-100' />
                            </div>
                            <div className="tetimonial_content w-50">
                                <h2 className='mb-4'>Our Students Voice</h2>
                                <Slider {...settings}>
                                    <div>
                                        <div className="single_testimonial">
                                            <h6 className='mb-3 fw-bold'>Excellent course materials</h6>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, dignissimos. Veritatis dolorem maiores repellendus aperiam fugiat cum consectetur quaerat dicta.</p>

                                            <div className="student_info mt-4">
                                                <h6 className='fw-bold'>Marcus Fredis</h6>
                                                <p>New Delhi, India</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="single_testimonial">
                                            <h6 className='mb-3 fw-bold'>Good Course</h6>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti excepturi magnam sapiente ipsum deserunt nihil corrupti ad. Omnis, incidunt a.</p>

                                            <div className="student_info mt-4">
                                                <h6 className='fw-bold'>Leonardo Ramadhan</h6>
                                                <p>Bangladesh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="single_testimonial">
                                            <h6 className='mb-3 fw-bold'>Worth to Try</h6>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate perferendis nulla assumenda consectetur officia deleniti quis. Dicta magnam in eius.</p>

                                            <div className="student_info mt-4">
                                                <h6 className='fw-bold'>Endo Harakiri</h6>
                                                <p>Japan</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials