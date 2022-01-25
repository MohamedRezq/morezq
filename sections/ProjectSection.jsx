import { Element } from "react-scroll";
import AnimatedTitle from "./../components/AnimatedTitle";
import ProjectCard from "./../components/ProjectCard";
import { connect } from "react-redux";

const ProjectSection = ({ storedProjects }) => {
  return (
    <div>
      <Element name="proj_section"></Element>
      <div className="py-10 mt-32">
        <AnimatedTitle title="TESTIMONIALS" loc="right" />
        <div className="grid lg:grid-cols-2 mt-10">
          {storedProjects.map((proj, i) => (
            <ProjectCard key={i} proj={proj} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  storedProjects: state.projects.projects,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSection);
