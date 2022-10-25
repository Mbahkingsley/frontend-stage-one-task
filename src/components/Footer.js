import React from 'react';
import pix from '../I4G.png';
import pix2 from '../zuri.png';
// import pix3 from '../giticon.png';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
        <div className='d-flex align-items-center justify-content-around w-100 bg-success h-10 mt-10 '>
            <div className='img-fluid max-width:100; height: auto;'>
                <img src={pix2} alt="" />
            </div>
            
            <div>
                <span>HNG internship 9 Frontend task</span>
            </div>

            <div className='img-fluid'>
                <img src={pix} alt="" />
            </div>
        </div>
    )
};

export default Footer;

