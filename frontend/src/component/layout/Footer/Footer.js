import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Quick Link</h4>
        <div className="leftLink">
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/account">Profile</a>
        </div>
      </div>

      <div className="midFooter">
        <h1> FlowerLuv.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; @SNAKE1304</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Me</h4>
        <a href="https://www.instagram.com/minh_dang1304">Instagram</a>
        <a href="https://www.youtube.com/channel/UC9HmcIDR0glKMGKgxNwL9zw">
          Youtube
        </a>
        <a href="https://www.facebook.com/profile.php?id=100012989176763">
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
