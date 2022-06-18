import React from "react";
import coverImage from "../../assets/cover/pro2.jpg";
function About() {
  return (
    <section className="my-5">
      <div className="imgclass">
        <img src={coverImage} className="my-2" alt="cover" />
      </div>
      <div className="textclass">Hello, welcome to my portfolio.</div>
    </section>
  );
}

export default About;
