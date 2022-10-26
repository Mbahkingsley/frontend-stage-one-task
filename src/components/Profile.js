import React from 'react';
import img from '../wafbec.jpg'

const Profile = () => {
    return (
        <div className='text-center'>
            <img id='profile_img' className='img-fluid max-width:100; height: auto; w-20 h-10 rounded-circle ml-auto mr-auto mt-5' src={img} alt="" />
            <p id='twitter'>Nonxxo</p>
            <p id='slack' className='d-none'>slack username here</p>
        </div>
    )
};

export default Profile;