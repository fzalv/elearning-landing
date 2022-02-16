import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import courseimg1 from '../../assets/image/web-development.png'
import courseimg2 from '../../assets/image/kids-learning.png'
import courseimg3 from '../../assets/image/seo.png'
import courseimg4 from '../../assets/image/ui-ux.png'
import './freecourse.css'
import FreeCourseCard from './FreeCourseCard'

const freecourseData = [
    {
        id: '01',
        title: 'Basic Web Development Course',
        imgurl: courseimg1,
        students: 4.6,
        rating: 6.2,
    },
    {
        id: '02',
        title: 'Coding for Junior Basic Course',
        imgurl: courseimg2,
        students: 6.1,
        rating: 2.3,
    },
    {
        id: '03',
        title: 'How to be a UI/UX Course',
        imgurl: courseimg3,
        students: 4.4,
        rating: 5.6,
    },
    {
        id: '04',
        title: 'DevOps for Basic Course',
        imgurl: courseimg4,
        students: 7.3,
        rating: 6.1,
    },
]

const FreeCourse = () => {
    return <section>
        <Container>
            <Row>
                <Col lg='12' className='text-center mb-5'>
                    <h2 className='fw-bold'>Our Free Course</h2>
                </Col>

                {
                    freecourseData.map((item) => (
                        <Col lg='3' key={item.id} >
                            <FreeCourseCard item={item} />
                        </Col>
                    ))
                }

            </Row>
        </Container>
    </section >
}

export default FreeCourse