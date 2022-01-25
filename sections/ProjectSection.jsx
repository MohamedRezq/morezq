import { Element } from "react-scroll";
import AnimatedTitle from "../components/AnimatedTitle";
import ProjectCard from "./../components/ProjectCard";

const ProjectSection = ({}) => {
  return (
    <div>
      <Element name="proj_section"></Element>
      <div className="py-10 mt-32">
        <AnimatedTitle title="TESTIMONIALS" loc="right" />
        <div className="grid lg:grid-cols-2 mt-10">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
