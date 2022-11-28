import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';

const ReportedItem = () => {
    const [reports, setReports] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reports')
            .then(res => res.json())
            .then(data => setReports(data))
    }, [])
    console.log(reports);
    return (
        <div>
            {reports?.length ? <h2 className='mt-4'>List Of Report </h2> : <h2 className='mt-4'>No Reported Items Found</h2>}
            <Table className='mt-4' striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Seller Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reports.map((report, i) =>
                            <tr>
                                <td>{i + 1}</td>
                                <td>{report.name}</td>
                                <td>{report.price}</td>
                                <td>{report.seller}</td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default ReportedItem;