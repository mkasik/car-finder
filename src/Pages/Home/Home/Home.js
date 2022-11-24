import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './one.jpg';
import img2 from './two.jpg';
import img3 from './three.jpg';
import './Home.css'



const Home = () => {

    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Find Your Right Car For You</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Find Your Right Car For You</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img "
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Find Your Right Car For You</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;