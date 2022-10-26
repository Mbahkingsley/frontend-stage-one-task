import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
const Links = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center w-100 h-50'>
            <Button variant='secondary' className='mt-3 w-75'><a className='text-decoration-none' href="https://twitter.com/Mbahkingsley13">Twitter Link</a></Button>
            <Button variant='secondary' className='mt-3 w-75'><a className='text-decoration-none' href="https://training.zuri.team">Zuri Team</a></Button>
            <Button variant='secondary' className='mt-3 w-75'><a className='text-decoration-none' href="https://books.zuri.team">Zuri Books</a></Button>
            <Button variant='secondary' className='mt-3 w-75'><a className='text-decoration-none' href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>">Python Books</a></Button>
            <Button variant='secondary' className='mt-3 w-75'><a className='text-decoration-none' href="https://background.zuri.team">Background Checks for Coders</a></Button>
            <Button variant='secondary' className='mt-3 w-75'><a className='text-decoration-none' href="https://books.zuri.team/design-rules">Design Books</a></Button>
        
        </div>
    )
};

export default Links;

