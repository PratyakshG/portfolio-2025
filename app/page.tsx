import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Gallery from "../components/Gallery/Gallery";
import LandingPage from "../components/LandingPage/LandingPage";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import SkillsPage from "../components/Skills/SkillsPage";

export default function Page() {
  return (
    <main className="flex flex-col w-screen min-h-max items-center justify-center relative">
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
