import React from 'react';

const Product = ({ car }) => {
    return (
        <div>
            <h2>{car.name}</h2>
            <img src={car.photo}></img>
        </div>
    );
};

export default Product;