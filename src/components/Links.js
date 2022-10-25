import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
const Links = ({link}) => {
    return (
        <div className='d-flex align-items-center justify-content-center w-100 bg-primary h-50'>
            <Button variant='secondary' className='mt-3 w-75'><a href="https://training.zuri.team/">{link}</a></Button>
        </div>
    )
};

export default Links;

