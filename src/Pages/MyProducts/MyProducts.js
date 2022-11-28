import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaTrashAlt } from 'react-icons/fa';
import './MyProducts.css'

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [advertises, setAdvertises] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const product = products.filter(pd => pd.seller === user.displayName);
    // console.log(product);
    const handleAdvertise = (name, photo, resalePrice, orginalPrice, seller, useYear, location) => {


        const advertise = {
            name, photo, resalePrice, orginalPrice, seller, useYear, location
        }


        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertise)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    toast.success('Added Succesfull To Advertise')
                    setAdvertises(true)

                }
            })
    }
    const handleDelete = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`http://localhost:5000/data/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {

                        toast.success('Product Deleted');
                        const remaining = product.filter(rr => rr._id !== id);
                        setProducts(remaining);
                    }
                })
        }
    }
    // useEffect(() => {
    //     fetch('http://localhost:5000/advertise')
    //         .then(res => res.json())
    //         .then(data => setAdvertises(data))
    // }, [])
    // const add = advertises.filter(aa => aa.name === "Toyota 120")
    // console.log(add[0].name);

    // console.log("adevertise:", advertises.map(aa => aa.name));
    // const adName = advertises.filter(aa => aa.name === "Toyota 120");
    // console.log(adName.map(aa => aa))
    // const find = adName.find(aa => aa)

    // console.log(find);
    // const aa = id => {
    //     console.log(id)
    // }
    const asik = 'Asik';
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
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((pd, i) =>
                            <tr>
                                <td>{i + 1}</td>
                                <td>{pd.name}</td>
                                <td>{pd.resalePrice}</td>
                                <td className='d-grid   '>
                                    <div>
                                        {
                                            asik === 'Asik' ? <Button  >Avialable</Button> : "False"
                                        }

                                        <Button onClick={() => handleAdvertise(pd.name, pd.photo, pd.resalePrice, pd.orginalPrice, pd.seller, pd.useYear, pd.location)} className='ms-2' >Advertise</Button></div>
                                </td>
                                <td><button onClick={() => handleDelete(pd._id)} className='bb'><FaTrashAlt></FaTrashAlt></button></td>

                            </tr>
                        )
                    }


                </tbody>
            </Table>
        </div>
    );
};

export default MyProducts;