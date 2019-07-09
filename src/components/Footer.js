import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <footer className="page-footer font-small blue footer py-4">
          <div className="footer-copyright text-center py-3">
            © 2019 Copyright:
            <a href="/" style={{ textDecoration: "none" }}>
              {" "}
              Roberto Soriano
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
