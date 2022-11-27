import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddProduct = () => {
    return (
        <div>
            <h2>Add A product</h2>
            <Form className='w-50 m-auto'>
                <Form.Group className="mb-1" >
                    {/* <Form.Label className='mb-1'>Product Name</Form.Label> */}
                    <Form.Control type="text" placeholder="Product Name" />

                </Form.Group>

                <Form.Group className="mb-1 d-flex gap-2" >

                    <Form.Control className='w-50' type="text" placeholder="Current Price $ " />
                    <Form.Control className='w-50' type="text" placeholder="Orginal Price $" />
                </Form.Group>
                <Form.Group className="mb-1 d-flex gap-2" >

                    <Form.Control className='w-50' type="text" placeholder="Your Number " />
                    <Form.Control className='w-50' type="text" placeholder="Location" />
                </Form.Group>
                <Form.Group className="mb-1 d-flex gap-2" >

                    <Form.Control className='w-50' type="text" placeholder="Photo Link " />
                    <Form.Control className='w-50' type="text" placeholder="Use Of Year" />
                </Form.Group>
                <Form.Group className="mb-1 d-flex gap-2" >
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
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                    <Form.Control placeholder='Description' as="textarea" rows={5} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Product
                </Button>
            </Form>
        </div>
    );
};

export default AddProduct;