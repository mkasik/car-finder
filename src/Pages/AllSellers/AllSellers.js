import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';

const AllSellers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    console.log(users)
    const seller = users.filter(role => role.role === 'seller');
    // console.log(seller.name);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {

                        toast.success('Deleted Success')
                        const remaining = seller.filter(rr => rr._id !== id);
                        setUsers(remaining);
                    }
                })
        }

    }
    return (
        <div>
            <h2 className='mt-4'>List Of Sellers</h2>
            <Table className='mt-4' striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        seller.map((sl, i) =>
                            <tr>
                                <td>{i + 1}</td>
                                <td>{sl.name}</td>
                                <td>{sl.email}</td>
                                <td><button onClick={() => handleDelete(sl._id)} className='bb'><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default AllSellers;