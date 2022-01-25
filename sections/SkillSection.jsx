import { connect } from "react-redux";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AnimatedTitle from "./../components/AnimatedTitle";
import ScrollAnimation from "react-animate-on-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const SkillSection = ({
  storedSkills,
  databaseSkills,
  stylingSkills,
  frameworkSkills,
  commSkills,
  backSkills,
  miscSkills,
}) => {
  const tabs = [
    { name: "All" },
    { name: "CMS" },
    { name: "Styling" },
    { name: "Frameworks" },
    { name: "E-Commerce" },
    { name: "Back-End" },
    { name: "Misc" },
  ];
  const [currentTab, setCurrentTab] = useState("All");
  useEffect(() => {
    switch (currentTab) {
      case "All":
        setShownSkills(storedSkills);
        break;
      case "CMS":
        setShownSkills(databaseSkills);
        break;
      case "Styling":
        setShownSkills(stylingSkills);
        break;
      case "Frameworks":
        setShownSkills(frameworkSkills);
        break;
      case "E-Commerce":
        setShownSkills(commSkills);
        break;
      case "Back-End":
        setShownSkills(backSkills);
        break;
      case "Misc":
        setShownSkills(miscSkills);
        break;
      default:
        break;
    }
    console.log("shownSkills Now: ", shownSkills);
  }, [currentTab]);
  const [shownSkills, setShownSkills] = useState(storedSkills);
  return (
    <div>
      <Element name="skill_section" className="element"></Element>
      <div className="py-8">
        <AnimatedTitle title="SKILLS" />
        <div
          className="md:hidden my-20 flex flex-col w-full font-serif"
          style={{ fontSize: "36pt" }}
        >
          Skills
          <hr className="border-2 border-black ml-2" />
        </div>
        <div className="mx-auto w-full max-w-5xl sm:border-b-2 border-gray-200 mb-5">
          {/* :SMALL DEVICES */}
          <div className="my-10 mx-auto max-w-md sm:hidden rounded-lg border border-gray-300 overflow-hidden">
            <label htmlFor="current-tab" className="sr-only">
              Select a tab
            </label>
            <select
              name="current-tab"
              id="current-tab"
              defaultValue={tabs.find((tab) => tab.name === currentTab).name}
              className="form-select w-full sm:w-auto block border-none py-2 text-md text-gray-500 font-semibold cursor-pointer focus:ring-0"
            >
              {tabs.map((tab) => (
                <option
                  key={tab.name}
                  value={tab.name}
                  onSelect={() => setCurrentTab(tab.name)}
                >
                  {tab.name}
                </option>
              ))}
            </select>
          </div>

          {/* :LARGE DEVICES */}
          <div className="-mb-px hidden sm:block">
            <nav aria-label="Tabs">
              <ul className="flex flex-wrap justify-center md:space-x-2 lg:space-x-5">
                {tabs.map((tab) => {
                  return (
                    <li
                      key={tab.name}
                      className={`flex border-b-2 text-base ${
                        tab.name === currentTab
                          ? "border-blue-500 text-blue-500"
                          : "border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-400"
                      }`}
                    >
                      <button
                        type="button"
                        className="px-2 pb-5 inline-flex items-center font-semibold"
                        onClick={() => setCurrentTab(tab.name)}
                      >
                        {tab.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        <div className="grid mx-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-2">
          {((shownSkills.length > 0) ? shownSkills:storedSkills).map((skill, i) => (
            <div
              key={i}
              className="flex content-center justify-center skillContainer w-full my-2"
            >
              <div
                className="rounded-full flex content-center justify-center box-content"
                style={{ outline: "solid 8px #0e7490" }}
              >
                <Image
                  src={skill.node.img.url}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div className="flex justify-center content-center w-full">
                <div
                  className="my-auto px-4 text-md text-white font-bold rounded-md py-1 w-full"
                  style={{ backgroundColor: "#0e7490" }}
                >
                  {skill.node.name[0].text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  storedSkills: state.skills.skills,
  databaseSkills: state.skills.databaseSkills,
  stylingSkills: state.skills.stylingSkills,
  frameworkSkills: state.skills.frameworkSkills,
  commSkills: state.skills.commSkills,
  backSkills: state.skills.backSkills,
  miscSkills: state.skills.miscSkills,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SkillSection);
