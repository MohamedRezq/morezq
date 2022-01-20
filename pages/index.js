import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllSkills } from "../lib/api";
import { storeSkills } from "../store/skills/skillsSlice";

const IndexPage = ({ storedSkills, allSkills, storeSkills }) => {
  useEffect(() => {
    storeSkills(allSkills);
  }, []);
  
  return (
    <>
      <Head>
        <title>MOREZQ</title>
      </Head>
      <div>
        {allSkills.map((skill, i) => (
          <div key={i} className="flex justify-between w-around">
            <div>
              {skill.node.name[0].text}
            </div>
            <div>
              <Image width={50} height={50} src={skill.node.img.url} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { storeSkills };

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);

export async function getStaticProps() {
  const allSkills = await getAllSkills();
  return {
    props: { allSkills },
  }
}