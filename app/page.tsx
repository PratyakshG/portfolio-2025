"use client";

// import { useState } from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Gallery from "../components/Gallery/Gallery";
import LandingPage from "../components/LandingPage/LandingPage";
import Navbar from "../components/Navbar/Navbar";
// import Preloader from "../components/PreLoader/Preloader";
import Projects from "../components/Projects/Projects";
import SkillsPage from "../components/Skills/SkillsPage";

export default function Page() {
  // const [loading, setIsLoading] = useState<boolean>(true);
  // localStorage.setItem("loading", loading.toString());
  // const loadingState = localStorage.getItem("loading");

  return (
    <main className="flex flex-col w-screen min-h-max items-center justify-center relative">
      {/* {loadingState === "true" ? (
        <>
          <Preloader setIsLoading={setIsLoading} />
        </>
      ) : (
      )} */}
      <>
        <Navbar />
        <LandingPage />
        <About />
        <Projects />
        <SkillsPage />
        <Gallery />
        <Contact />
      </>
    </main>
  );
}
