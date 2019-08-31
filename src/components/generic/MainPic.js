import React from "react";
// import pic from "../../images/profile.jpg";
import { gdPic } from "../../utils";
const MainPic = () => {
  return (
    <div className="mainPic">
      <div className="hidden-xs hidden-sm center mainPic-img">
        <img
          src={gdPic("11l5YWR_g0CxnjRLUQ1p3GI9Ow37To6NY")}
          alt="Roberto Soriano"
        />
      </div>
    </div>
  );
};

export default MainPic;
