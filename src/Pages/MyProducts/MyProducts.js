import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const product = products.filter(pd => pd.seller === user.displayName);
    console.log(product);
    return (
        <div>
            <h2>My Products</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((pd, i) =>
                            <tr>
                                <td>{i + 1}</td>
                                <td>{pd.name}</td>
                                <td>{pd.resalePrice}</td>
                                <td className='d-flex gap-2 '><Button >Avialable</Button>
                                    <Button >Advertise</Button>
                                </td>

                            </tr>
                        )
                    }


                </tbody>
            </Table>
        </div>
    );
};

export default MyProducts;