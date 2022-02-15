import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './features.css'

const FeatureData = [
    {
        title: 'Quick Learning',
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores maiores enim sint voluptatem obcaecati quaerat.",
        icon: 'ri-draft-fill'
    },
    {
        title: 'Quick Learning',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus, iure eveniet ex quam ad.",
        icon: 'ri-discord-fill'
    },
    {
        title: 'Certification',
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, porro nemo. Quidem eos deleniti quod!",
        icon: 'ri-book-read-fill'
    },
]

const Feature = () => {
    return <section>
        <Container>
            <Row>
                {FeatureData.map((item, index) =>
                    <Col lg='4' md='6' key={index}>
                        <div className="single__feature text-center px-4">
                            <h2 className='mb-3'><i class={item.icon}></i></h2>
                            <h6>{item.title}</h6>
                            <p>{item.desc}</p>
                        </div>
                    </Col>
                )}

            </Row>
        </Container>
    </section >
}

export default Feature