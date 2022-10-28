import React from "react";
import pix3 from '../giticon.png';
import slack from '../slack.png';
import "bootstrap/dist/css/bootstrap.min.css";

const Links = () => {
  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center w-100 h-50">
        
          <a
            className="text-decoration-none text-reset mt-1 w-75 bg-gray-300 h-10 p-2 text-center"
            href="https://twitter.com/Mbahkingsley13"
          >
            Twitter Link
          </a>
      
       
          <a id="btn_zuri" className="text-decoration-none text-reset mt-3 w-75 bg-gray-300 h-10 p-2 text-center" href="https://training.zuri.team">
            Zuri Team
          </a>
        
          <a id="books" className="text-decoration-none text-reset mt-3 w-75 bg-gray-300 h-10 p-2 text-center" href="https://books.zuri.team">
            Zuri Books
          </a>
        
          <a id="book_python"
            className="text-decoration-none text-reset mt-3 w-75 bg-gray-300 h-10 p-2 text-center"
            href="https://books.zuri.team/python-for-beginners?ref_id=Nonxxo"
          >
            Python Books
          </a>
        
          <a id="pitch"
            className="text-decoration-none text-reset mt-3 w-75 bg-gray-300 h-10 p-2 text-center"
            href="https://background.zuri.team"
          >
            Background Check for Coders
          </a>
        
          <a id="book_design"
            className="text-decoration-none text-reset mt-3 w-75 bg-gray-300 h-10 p-2 text-center"
            href="https://books.zuri.team/design-rules"
          >
            Design Books
          </a>
        
      </div>
      <div className='d-flex align-items-center justify-content-center mt-4'>
        <img className='mr-2' src={pix3} alt="git icon " />
        <img className='h-5 w-5 ml-2' src={slack} alt="slack logo" />
      </div>
    </div>
  );
};

export default Links;
