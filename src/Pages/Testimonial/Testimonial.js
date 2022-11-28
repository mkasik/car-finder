import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <div className='mt-4'>
            <h2 className='mt-4'>Testimonial</h2>
            <div>
                <Container className='bgg'>

                    <Row className='mt-4'>
                        <Col sm={12} lg={4} className='p-4'>
                            <Card.Text>
                                Forget about struggling to do everything at once: taking care of the family, cleaning the house, doing the shopping, etc.


                            </Card.Text>


                            <Row className='w-100'>
                                <Col><Card.Img className='review-img w-25' variant="top" src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=612x612&w=0&h=c9Z3DyUg-YvgOQnL_ykTIgVTWXjF-GNo4FUQ7i5fyyk=" /></Col>

                                <h4 className='text-muted'>David</h4>
                            </Row>

                        </Col>
                        <Col sm={12} lg={4} className='p-4'>
                            <Card.Text>
                                Great product, cheaper than the dealership and it only took 15 minutes to put in.
                                Easy install.



                            </Card.Text>


                            <Row className='w-100'>
                                <Col><Card.Img className='review-img w-25' variant="top" src="https://img.freepik.com/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15569.jpg?w=2000" /></Col>

                                <h4 className='text-muted'>Jon Son</h4>
                            </Row>

                        </Col>
                        <Col sm={12} lg={4} className='p-4'>
                            <Card.Text>
                                Perfect fit. Easy install. Took about 30 minutes with one person. Cost was about half the price of local!


                            </Card.Text>


                            <Row className='w-100'>
                                <Col><Card.Img className='review-img w-25' variant="top" src="https://img.freepik.com/free-photo/young-man-with-charming-smile-blue-eyes-posing_176420-15601.jpg?w=2000" /></Col>

                                <h4 className='text-muted'>Mr. Lee</h4>
                            </Row>

                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Testimonial;