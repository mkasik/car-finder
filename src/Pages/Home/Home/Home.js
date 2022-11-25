import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './one.jpg';
import img2 from './two.jpg';
import img3 from './three.jpg';
import './Home.css'
import Category from '../../Category/Category/Category';
import Products from '../../Products/Products/Products';




const Home = () => {
    const [categorys, setCategorys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])
    console.log(categorys)
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
            <h2>Select Your Brand</h2>
            <div className='main container'>
                {
                    categorys.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </div>



        </div>
    );
};

export default Home;