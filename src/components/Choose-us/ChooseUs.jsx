import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import choseeimg from '../../assets/image/why-choose-us.png'
import './choose-us.css'
import ReactPlayer from 'react-player'

const ChooseUs = () => {
    const [showVideo, setShowVideo] = useState(false)
    return <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="choose__content">
                        <h2>Why Chosee Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cupiditate id vel perspiciatis corporis possimus molestiae vitae amet cumque facere sapiente quidem repellendus necessitatibus voluptatem ratione dolorem, ipsum omnis quis voluptates consequatur rerum! Maxime dicta eos similique iure aliquid ipsam.</p>
                    </div>
                </Col>

                <Col lg='6'>
                    <div className="choose__img">
                        {
                            showVideo ? (
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=_g45BJCAXu4"
                                    width="100%"
                                    height="300px"
                                    controls
                                />
                            ) : (
                                <img src={choseeimg} alt="" className='w-100' />
                            )
                        }

                        {!showVideo && (
                            <span className='play__icon'>
                                <i class="ri-play-circle-fill"
                                    onClick={() => setShowVideo(!showVideo)}>
                                </i>
                            </span>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default ChooseUs