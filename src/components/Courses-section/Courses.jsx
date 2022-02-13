import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import coursesimg1 from '../../assets/image/web-design.png'
import coursesimg2 from '../../assets/image/graphics-design.png'
import coursesimg3 from '../../assets/image/ui-ux.png'
import './courses.css'
import CourseCard from './CourseCard'

const coursesdata = [
    {
        id: '01',
        title: 'Web Design Bootcamp 2022 for Beginners',
        lesson: 10,
        students: 20,
        rating: 6.7,
        imgurl: coursesimg1
    },
    {
        id: '02',
        title: 'Web Design Bootcamp 2022 for Beginners',
        lesson: 15,
        students: 10,
        rating: 8.3,
        imgurl: coursesimg2
    },
    {
        id: '03',
        title: 'Web Design Bootcamp 2022 for Beginners',
        lesson: 20,
        students: 15,
        rating: 7.6,
        imgurl: coursesimg3
    }
]

const Courses = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <div className="course__top d-flex justify-content-between align-items-center">
                            <div className="course__top__left w-50">
                                <h2>Our Popular Course</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui expedita, sed iusto odio ducimus tempora exercitationem voluptate autem labore ad!</p>
                            </div>

                            <div className="w-50 text-end">
                                <button className="btn">See All</button>
                            </div>
                        </div>
                    </Col>

                    {coursesdata.map((item) => (
                        <Col lg='4' md='6'>
                            <CourseCard key={item.id} item={item} />
                        </Col>
                    ))}

                </Row>
            </Container>
        </section >
    )
}

export default Courses