"use client";

import { HoverImageLinks } from "./hoverImageLinks";
import { projects } from "../../constants";
import linkImage from "../../public/images/Sarvarath.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects h-screen relative w-screen flex flex-col items-center justify-between px-6 md:px-10 xl:px-20 py-[6vh] xl:py-[10vh]">
        {projects.map(
          ({ id, title, desc, figLink, gitLink, type, imgSrc }, index) => {
            return (
              <HoverImageLinks
                key={index}
                index={id}
                heading={title}
                subheading={desc}
                imgSrc={imgSrc || linkImage}
                href={figLink}
              />
            );
          },
        )}
      </div>
    </section>
  );
};

export default Projects;
