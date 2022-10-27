import React from 'react';
import pix from '../I4G.png';
import pix2 from '../vector1.png';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
        <div className=' container justify-content-around w-100 h-10 mt-20 flex-wrap d-sm-flex'>
        
            <div className='img-fluid max-width:100; height: auto;'>
                <img src={pix2} alt="" />
            </div>
            
            <div className='d-inline'>
                <span>HNG internship 9 Frontend task</span>
            </div>

            <div className='img-fluid '>
                <img src={pix} alt="" />
            </div>
        </div>
    )
};

export default Footer;

