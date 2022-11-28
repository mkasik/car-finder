import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AddProduct = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const handleProduct = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const currentPrice = form.currentPrice.value;
        const orginalPrice = form.orginalPrice.value;
        const number = form.number.value;
        const location = form.location.value;
        const photoLink = form.photoLink.value;
        const category = form.category.value;
        const useYear = form.useYear.value;

        const category_id = parseInt(category);
        dataProduct(productName, photoLink, location, useYear, user.displayName, category_id, orginalPrice, currentPrice)
    }

    const dataProduct = (name, photo, location, useYear, seller, category_id, orginalPrice, resalePrice) => {
        const product = {
            name,
            photo,
            location,
            useYear,
            seller,
            category_id,
            orginalPrice,
            resalePrice

        }
        fetch('https://car-server-snowy.vercel.app/data', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    toast.success('Product Add Success')
                    navigate('/dashboard/myproducts')
                }
            })

    }
    return (
        <div>
            <h2>Add A product</h2>
            <Form onSubmit={handleProduct} className='w-50 m-auto'>
                <Form.Group className="mb-1" >
                    {/* <Form.Label className='mb-1'>Product Name</Form.Label> */}
                    <Form.Control type="text" placeholder="Product Name" name="productName" />

                </Form.Group>

                <Form.Group className="mb-1 d-flex gap-2" >

                    <Form.Control className='w-50' type="text" placeholder="Current Price $" name="currentPrice" />
                    <Form.Control className='w-50' type="text" placeholder="Orginal Price $" name="orginalPrice" />
                </Form.Group>
                <Form.Group className="mb-1 d-flex gap-2" >

                    <Form.Control className='w-50' type="text" placeholder="Your Number " name="number" />
                    <Form.Control className='w-50' type="text" placeholder="Location" name="location" />
                </Form.Group>
                <Form.Group className="mb-1 d-flex gap-2" >

                    <Form.Control className='w-50' type="text" placeholder="Photo Link " name="photoLink" />
                    <Form.Control className='w-50' type="text" placeholder="Use Of Year" name="useYear" />
                </Form.Group>
                <Form.Select className='text-muted' aria-label="Default select example">
                    <option>Condition Type</option>
                    <option value="1">Excellent</option>
                    <option value="2">Good</option>
                    <option value="3">Fair</option>
                </Form.Select>
                {/* <Form.Group className="mb-1 d-flex gap-2" >
                    <Form.Select className='w-50' aria-label="Default select example">
                        <option>Select Category</option>
                        <option value="1">Toyota</option>
                        <option value="2">Tesla</option>
                        <option value="3">BMW</option>
                    </Form.Select>
                    <Form.Select className='w-50' aria-label="Default select example">
                        <option>Product Condition</option>
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </Form.Select>

                </Form.Group> */}

                <Form.Group className="" controlId="exampleForm.ControlTextarea1">

                    <Form.Control placeholder='Description' as="textarea" rows={5} name="details" />
                </Form.Group>
                <Form.Group className="mb-2" >
                    <input className='' type="radio" value="1" name="category" /> Toyota
                    <input className='ms-4 mt-4' type="radio" value="2" name="cetegory" /> Tesla
                    <input className='ms-4 mt-4' type="radio" value="3" name="category" /> BMW
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Product
                </Button>
            </Form>
        </div>
    );
};

export default AddProduct;