import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllSkills, getAllBlogs, getAllProjects } from "../lib/api";
import BlogSection from "../sections/BlogSection";
import Contact from "../sections/ContactSection";
import AboutSection from "../sections/AboutSection";
import ProjectSection from "../sections/ProjectSection";
import SkillSection from "../sections/SkillSection";
import { storeSkills } from "../store/skills/skillsSlice";
import FloatingSocialBar from "./../components/FloatingSocialBar";
import { storeBlogs } from "../store/blogs/blogsSlice";
import { storeProjects } from "../store/projects/projectsSlice";

const IndexPage = ({
  allSkills,
  storeSkills,
  allBlogs,
  storeBlogs,
  allProjects,
  storeProjects,
}) => {
  useEffect(() => {
    storeSkills(allSkills);
    storeBlogs(allBlogs);
    storeProjects(allProjects);
  }, []);

  return (
    <>
      <Head>
        <title>MOREZQ</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
      </Head>
      <div className="my-20 mx-auto relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 lg:py-20">
        <FloatingSocialBar />
        <div className="mx-5 xl:mx-0 ">
          <SkillSection />
          <ProjectSection />
          <BlogSection />
          <AboutSection />
          <Contact />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { storeSkills, storeBlogs, storeProjects };

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);

export async function getStaticProps() {
  const allSkills = await getAllSkills();
  const allBlogs = await getAllBlogs();
  const allProjects = await getAllProjects();
  return {
    props: { allSkills, allBlogs, allProjects },
  };
}
