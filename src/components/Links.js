import React from "react";
import pix3 from '../giticon.png';
import slack from '../slack.png';
import "bootstrap/dist/css/bootstrap.min.css";

const Links = () => {
  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center w-100 h-50">
        
          <a
            className="text-decoration-none text-reset mt-1 w-75 bg-gray-300 h-14 p-3 text-center rounded-top rounded-bottom"
            href="https://twitter.com/Mbahkingsley13"
          >
           <strong>Twitter Link</strong> 
          </a>
      
       
          <a id="btn__zuri" className="text-decoration-none text-reset mt-3 w-75 bg-gray-300 h-14 p-3 text-center rounded-top rounded-bottom" href="https://training.zuri.team">
           <strong>Zuri Team</strong>
          </a>
        
          <a id="books" className="text-decoration-none text-reset mt-3 w-75 bg-gray-300 h-14 p-3 text-center rounded-top rounded-bottom" href="https://books.zuri.team">
           <strong>Zuri Books</strong> 
          </a>
        
          <a id="book__python"
            className="text-decoration-none text-reset mt-3 w-75 bg-gray-300 h-14 p-3 text-center rounded-top rounded-bottom"
            href="https://books.zuri.team/python-for-beginners?ref_id=Nonxxo"
          >
           <strong>Python Books</strong> 
          </a>
        
          <a id="pitch"
            className="text-decoration-none text-reset mt-3 w-75 bg-gray-300 h-14 p-3 text-center rounded-top rounded-bottom"
            href="https://background.zuri.team"
          >
           <strong>Background Check for Coders</strong>
          </a>
        
          <a id="book__design"
            className="text-decoration-none text-reset mt-3 w-75 bg-gray-300 h-14 p-3 text-center rounded-top rounded-bottom"
            href="https://books.zuri.team/design-rules"
          >
           <strong>Design Books</strong> 
          </a>
        
      </div>
      <div className='d-flex align-items-center justify-content-center mt-4 mb-14 '>
        <img className='mr-2' src={pix3} alt="git icon " />
        <img className='h-5 w-5 ml-2' src={slack} alt="slack logo" />
      </div>
      
    </div>
  );
};

export default Links;
