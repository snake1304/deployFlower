import React from "react";
import "./about.css";
const about = () => {
  return (
    <div className="about-sectionAbout">
      <div className="inner-widthAbout">
        <h1>About Us</h1>
        <div className="borderAbout"></div>
        <div className="about-section-rowAbout">
          <div className="about-section-colAbout">
            <div className="aboutAbout">
              <h5> Welcome to FlowerLuv!</h5>
              <br></br>
              <p>
                We aim to offer our customers a variety of the latest beautiful,
                flowers and gifts. We’ve come a long way, so we know exactly
                which direction to take when supplying you with high quality yet
                budget-friendly products. We offer all of this while providing
                excellent customer service and friendly support. We always keep
                an eye on the latest trends in flowers and gifts and put our
                customers’ wishes first. That is why we have satisfied customers
                all over the world, and are thrilled to be a part of the flowers
                and gifts industry. The interests of our customers are always
                top priority for us, so we hope you will enjoy our products as
                much as we enjoy making them available to you.
              </p>
            </div>
          </div>
          <div className="about-section-colAbout">
            <br></br>

            <div className="skillsAbout">
              <div className="skillAbout">
                <div className="titleAbout">Web Develpor</div>
                <div className="progressAbout">
                  <div className="progress-barAbout p1">
                    <span>90%</span>
                  </div>
                </div>
              </div>

              <div className="skillAbout">
                <div className="titleAbout">UI Design</div>
                <div className="progressAbout">
                  <div className="progress-barAbout p2">
                    <span>70%</span>
                  </div>
                </div>
              </div>

              <div className="skillAbout">
                <div className="titleAbout">UX Design</div>
                <div className="progressAbout">
                  <div className="progress-barAbout p3">
                    <span>50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
