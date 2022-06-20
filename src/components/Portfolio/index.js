import React from "react";

const projectsArray = [
  {
    image: "https://via.placeholder.com/350x250",
    title: "project title",
    github: "github",
    deployed: "deployed",
  },
  {
    image: "https://via.placeholder.com/350x250",
    title: "project title2",
    github: "github",
    deployed: "deployed",
  },
  {
    image: "https://via.placeholder.com/350x250",
    title: "project title3",
    github: "github",
    deployed: "deployed",
  },
  {
    image: "https://via.placeholder.com/350x250",
    title: "project title4",
    github: "github",
    deployed: "deployed",
  },
  {
    image: "https://via.placeholder.com/350x250",
    title: "project title5",
    github: "github",
    deployed: "https://www.google.com",
  },
  {
    image: "https://via.placeholder.com/350x250",
    title: "project title6",
    github: "github",
    deployed: "deployed",
  },
];

function Portfolio() {
  return (
    <>
      {projectsArray.map((project) => {
        return (
          <>
            <div className="portfoliocontainer">
              <div className="container" key={project.title}>
                <div className="item">
                  <img src={project.image} />
                  <h3>{project.title}</h3>
                  <h4>{project.github}</h4>
                  <h4>
                    <a href={project.deployed}>{project.deployed}</a>
                  </h4>
                </div>
              </div>
            </div>
            {/* <div class="container">
              <div class="item">1: Orange</div>
              <div class="item">2: Green</div>
              <div class="item">3: Violet</div>
              <div class="item">4: Pink</div>
              <div class="item">5: Blue</div>
              <div class="item">6: Brown</div>
            </div> */}
          </>
        );
      })}
    </>
  );
}

export default Portfolio;
