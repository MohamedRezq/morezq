import React, { useState, useEffect } from "react";
import authorImg from "./../../assets/author.jpg";
import Image from "next/image";
import logo from "./../../assets/logo.png";
import styles from "./styles.module.css";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import styled from "styled-components";

function NavTripleMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }, []);
  const handleSetActive = function (to) {
    console.log(to);
  };
  const NavLink = styled(Link)`
    color: black;
    &.active {
      color: #164e63;
    }
  `;

  return (
    <div className="w-full navBarContainer fixed" style={{ zIndex: "1000" }}>
      <div
        className="flex items-center h-20 px-6 justify-between shadow-sm relative"
        style={{
          backgroundColor: "rgba(220, 220, 220 ,0.7)",
          zIndex: "1000",
        }}
      >
        <a className="flex-1 no-underline flex h-12 content-center">
          <Image src={logo} height={100} width={220} />
        </a>
        <div className="flex-none hidden md:flex md:justify-center md:h-full text-md">
          <NavLink
            activeClass="active"
            href=""
            to="skill_section"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="focus:border-cyan-700 focus:text-cyan-700 hover:border-blue-400 h-full flex items-center mx-1 lg:mx-4 px-1 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400"
          >
            <i className="fas fa-code mx-2"></i>
            SKILLS
          </NavLink>
          <NavLink
            activeClass="active"
            href=""
            to="proj_section"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={() => {
              handleSetActive();
            }}
            className="focus:border-cyan-700 focus:text-cyan-700 hover:border-blue-400 h-full flex items-center mx-1 lg:mx-4 px-1 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400"
          >
            <i className="fas fa-tasks mx-2"></i> TESTIMONIALS
          </NavLink>
          <NavLink
            activeClass="active"
            href=""
            to="blog_section"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={() => {
              handleSetActive();
            }}
            className="focus:border-cyan-700 focus:text-cyan-700 hover:border-blue-400 h-full flex items-center mx-1 lg:mx-4 px-1 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400"
          >
            <i className="fas fa-blog mx-2"></i> BLOGS
          </NavLink>
          <NavLink
            activeClass="active"
            href=""
            to="about_section"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={() => {
              handleSetActive();
            }}
            className="focus:border-cyan-700 focus:text-cyan-700 hover:border-blue-400 h-full flex items-center mx-1 lg:mx-4 px-1 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400"
          >
            <i className="fas fa-address-card mx-2"></i> ABOUT
          </NavLink>
        </div>
        <div className="flex-1 items-center justify-end hidden md:flex">
          <button
            type="button"
            className="p-2.5 text-lg text-white font-medium bg-cyan-700 hover:bg-cyan-900 rounded-md shadow-sm"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Let's do something GREAT !!"
          >
            <a
              href="https://www.linkedin.com/in/mohamed-rezq-2021/"
              target="_blank"
              className="text-lg text-white no-underline"
            >
              Hire Me <i className="fas fa-handshake mx-1"></i>
            </a>
          </button>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col w-8 cursor-pointer active:outline-none focus:outline-none"
        >
          <span
            className={`bg-gradient-to-br from-cyan-900 to-cyan-500 rounded-xl w-1/2 h-2 my-1.5 transition-all duration-500 ease-bounce ${
              mobileOpen && "origin-bottom transform-bgr1-s1"
            }`}
            aria-hidden="true"
          />
          <span
            className={`bg-gradient-to-br from-cyan-900 to-cyan-500 rounded-xl w-full h-2 my-1.5 transition-all duration-500 ease-bounce ${
              mobileOpen && "origin-top transform-bgr1-s2"
            }`}
            aria-hidden="true"
          />
          <span
            className={`bg-gradient-to-br from-cyan-900 to-cyan-500 rounded-xl w-3/4 h-2 my-1.5 transition-all duration-500 ease-bounce ${
              mobileOpen && "origin-bottom transform-bgr1-s3"
            }`}
            aria-hidden="true"
          />
        </button>
        {mobileOpen && (
          <div className="bg-white absolute top-full left-0 flex flex-col w-full py-8 shadow-sm lg:hidden">
            <div className="flex-1 flex flex-col items-center text-xl">
              <a
                href="#"
                className="no-underline px-2 my-2 font-medium hover:text-blue-400"
              >
                <i className="fas fa-code mx-2"></i> SKILLS
              </a>
              <a
                href="#"
                className="no-underline px-2 py-1 my-2 font-medium border-b-2 border-black hover:text-blue-400"
              >
                <i className="fas fa-tasks mx-2"></i> TESTIMONIALS
              </a>
              <a
                href="#"
                className="no-underline px-2 my-2 font-medium hover:text-blue-400"
              >
                <i className="fas fa-blog mx-2"></i> BLOGS
              </a>
              <a
                href="#"
                className="no-underline px-2 my-2 font-medium hover:text-blue-400"
              >
                <i className="fas fa-address-card mx-2"></i> ABOUT
              </a>
              <hr className="w-full my-5" />
              <div className="flex items-center flex-row-reverse">
                <Image
                  className="rounded-full mx-2"
                  src={authorImg}
                  height={50}
                  width={50}
                />{" "}
                <div className="mx-2">MOREZQ</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavTripleMenu;
