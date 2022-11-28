import React from 'react';
import AdvertiseCard from '../AdvertiseCard/AdvertiseCard';

const Advertise = (props) => {
    console.log(props.data);
    const datas = props.data;
    return (
        <div className='mt-4'>
            <h2>Advertise Items</h2>
            <div className='main container mt-4 mb-2'>
                {
                    datas.map(data =>
                        <AdvertiseCard
                            key={data._id}
                            data={data}
                        ></AdvertiseCard>)
                }
            </div>
        </div>
    );
};

export default Advertise;