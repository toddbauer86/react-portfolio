import React from "react";
import coverImage from "../../assets/cover/prof3.png";
function About() {
  return (
    <section className="my-5">
      <div className="parent">
        <div className="child">
          hi, welcome to my portfolio.
          <p>
            <button>my apps</button>
          </p>
        </div>
        <div className="child">
          <img src={coverImage} className="my-2" alt="cover" />
        </div>
      </div>
      <div className="aboutsection">
        Hi, my name is Todd Bauer. I was born in 1986 in Belleville, IL and
        reside in St. Louis MO with my wife and daughter.
      </div>
    </section>
  );
}

export default About;
