import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../../Product/Product/Product';


const Products = () => {
    const update = useLoaderData();

    console.log(update);

    // console.log(category)
    // console.log("new category", newCategory)
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/data')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])
    // const product = products.filter(pd => pd.category_id === 1)
    // console.log(product)
    return (
        <div>
            {
                update.map(car => <Product
                    key={car._id}
                    car={car}
                ></Product>)
            }

        </div>
    );
};

export default Products;