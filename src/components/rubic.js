import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


export default function Rubic() {
    return (
        <div className='rubic'>
            <Container>
                <Row>
                    <Col lg={6} sm={12} md={6}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/FYbtxt0KhIo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
