import React from "react";
import pic from "../../images/myAvatar.svg";
const MainPic = () => {
  return (
    <div className="container mainPic">
      <div className="hidden-xs hidden-sm center">
        <img
          src={pic}
          alt=""
          style={{
            borderRadius: "50px",
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
