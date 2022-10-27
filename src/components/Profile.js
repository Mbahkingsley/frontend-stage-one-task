import React from "react";
import img from "../wafbec.jpg";
import icon from "../Icon.png";
import ham from '../ham.png';

const Profile = () => {
  return (
    <div className="text-center">
      <img
        id="profile_img"
        className="img-fluid max-width:100; height: auto; w-20 h-10 rounded-circle ml-auto mr-auto mt-3"
        src={img}
        alt=""
      />
      <p id="twitter">Nonxxo</p>
      <div className="container ">
            <div style={{position:"absolute", right:'370px', top:'30px'}}>
                <img className="d-none d-lg-block" src={icon} alt="icon" />
            </div>

            <div style={{position:"absolute", right:'120px', top:'30px'}}>
              <img className="d-lg-none" src={ham} alt="hamburger menu icon" />
            </div>
      </div>
      <p id="slack" className="d-none">
        slack username here
      </p>
    </div>
  );
};

export default Profile;
