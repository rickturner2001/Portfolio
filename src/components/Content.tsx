import { useState } from "react";
import DevStackSection from "./DevStackSection";
import HeroText from "./HeroText";
import ProjectsSection from "./ProjectsSection";

export enum Section {
  HERO = 1,
  DEV_STACK,
  PROJECTS,
}

const Content = () => {
  const [currentSection, setCurrentSection] = useState(Section.PROJECTS);

  return (
    <>
      <HeroText
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      />
      <ProjectsSection
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <DevStackSection
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </>
  );
};

export default Content;
