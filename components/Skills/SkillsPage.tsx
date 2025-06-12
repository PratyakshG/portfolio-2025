import React from "react";
import "./skillsPage.scss";
import { ClipPathLinks } from "./ClipPathLinks";

const SkillsPage = () => {
  return (
    <section id="skills">
      <div className="flex flex-col items-center justify-center h-full w-screen px-6 md:px-10 xl:px-20 py-[6vh] xl:py-[10vh] gap-6 xl:gap-10">
        <p className="text-3xl lg:text-6xl font-delaGothic font-bold uppercase tracking-widest">
          the tech wall
        </p>
        <div className="flex flex-col w-full">
          <ClipPathLinks />
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
