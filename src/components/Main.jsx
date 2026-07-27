import { projects } from "@/data/projects";

import Navbar from "./NavBar";
import Hero from "./Hero";
import FeaturedProject from "./FeaturedProject";
import ProjectShowcase from "./ProjectShowcase";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Main() {
  const devMate = projects.find((project) => project.id === "devmate");

  const thoughtNest = projects.find((project) => project.id === "thoughtnest");

  const jobTracker = projects.find((project) => project.id === "job-tracker");

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProject project={devMate} />
        <ProjectShowcase project={thoughtNest} imagePosition="left" />
        <ProjectShowcase project={jobTracker} imagePosition="right" />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
