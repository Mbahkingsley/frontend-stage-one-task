import React from 'react';
import img from '../wafbec.jpg'

const Profile = () => {
    return (
        <div className='d-flex align-items-center justify-content-center mt-4 mb-3'>
            <img className='img-fluid max-width:100; height: auto; w-20 h-10 rounded-circle' src={img} alt="" />
        </div>
    )
};

export default Profile;