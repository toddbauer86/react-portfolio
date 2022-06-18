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
          <div className="card" key={project.title}>
            <img src={project.image} />
            <h3>{project.title}</h3>
            <h4>{project.github}</h4>
            <h4>
              <a href={project.deployed}>{project.deployed}</a>
            </h4>
          </div>
        );
      })}
    </>
  );
}

export default Portfolio;
