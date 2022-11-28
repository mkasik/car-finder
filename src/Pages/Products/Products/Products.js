import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../../Product/Product/Product';


const Products = () => {
    const update = useLoaderData();


    // console.log("This is update", update[0].category);

    // console.log(category)
    // console.log("new category", newCategory)
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch('https://car-server-snowy.vercel.app/data')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])
    // const product = products.filter(pd => pd.category_id === 1)
    // console.log(product)
    return (
        <div className='product-bg'>
            <h2 className=''>List of {update[0].category} Car</h2>
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