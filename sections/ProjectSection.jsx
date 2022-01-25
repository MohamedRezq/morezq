import { Element } from "react-scroll";
import AnimatedTitle from "./../components/AnimatedTitle";
import ProjectCard from "./../components/ProjectCard";
import { connect } from "react-redux";

const ProjectSection = ({ storedProjects }) => {
  return (
    <div>
      <Element name="proj_section"></Element>
      <div className="py-10 mt-32">
        <AnimatedTitle className="hidden md:block" title="TESTIMONIALS" loc="right" />
        <div
          className="block md:hidden my-20 flex flex-col w-full my-3 font-serif"
          style={{ fontSize: "36pt" }}
        >
          TESTIMONIALS
          <hr className="border-2 border-black ml-2" />
        </div>
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
