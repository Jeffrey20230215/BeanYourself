import React from "react";
import "./Footer.css";
import BeanYourselfLogo from "./mainLogo";

const Footer = () => {
  return (
    <>
      <footer className="siteFooter">
        <div className="footerContainer">
          <div className="footerTop">
            <div className="footerIntro">
              <BeanYourselfLogo className="footer-brand-icon" />
              <div className="footerLink">
                <a href="#">品牌故事</a>
                <a href="#">產品列表</a>
                <a href="#">咖啡文章</a>
                <a href="#">咖啡人格測驗</a>
              </div>
            </div>
            <div className="footerLogo">
              <h1>
                BEAN
                <br />
                YOURSELF.
              </h1>
            </div>
          </div>
          <div className="footerBottom">
            <div className="copyRight">
              <p>© 2024 BEAN YOURSELF. COFFEE PROJECT.</p>
            </div>
            <div className="contactLink">
              <a href="#">INSTAGRAM</a>
              <a href="#">FACEBOOK</a>
              <a href="#">CONTANT</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
