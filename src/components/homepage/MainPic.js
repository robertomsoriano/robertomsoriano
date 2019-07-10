import React from "react";
// import pic from "../../images/profile.jpg";
import { gdPic } from "../../utils";
const MainPic = () => {
  return (
    <div className="container mainPic">
      <div className="hidden-xs hidden-sm center">
        <img
          src={gdPic("11l5YWR_g0CxnjRLUQ1p3GI9Ow37To6NY")}
          alt=""
          style={{
            borderRadius: "90px",
            fontSize: "10",
            height: "200px",
            width: "200px",
            marginBottom: "50px"
          }}
        />
      </div>
    </div>
  );
};

export default MainPic;
