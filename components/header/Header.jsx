import bannerImg from "./../../assets/banner.jpg";
import Image from "next/image";
import NavTripleMenu from "./NavBarz";
import authorImg from "./../../assets/author.jpg";
import { Link } from "react-scroll";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init("user_tGYmCdobbGp4a6cJxsHfG");
import ScrollAnimation from "react-animate-on-scroll";

const Header = () => {
  const [didSendMsg, setDidSendMsg] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z8ce4ip",
        "template_opjizsj",
        e.target,
        "user_tGYmCdobbGp4a6cJxsHfG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDidSendMsg(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <header className="bg-white dark:bg-gray-800">
      <div
        className="relative heeey pb-10 pt-2"
        style={{
          backgroundImage: `url(${bannerImg.src})`,
          backgroundSize: "cover",
        }}
      >
        <NavTripleMenu />
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="absolute inset-x-0 bottom-0">
            <svg
              viewBox="0 0 224 12"
              fill="currentColor"
              className="w-full -mb-1 text-white"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
            </svg>
          </div>
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
              Hi there,
              <br className="hidden md:block" />
              <span className="text-left">
                {"  "}I'm MOREZQ{"  "}
              </span>
              <br className="hidden md:block" />
              <span className="relative inline-block">
                Full-Stack Web Developer
                <div className="w-full h-3 -mt-3 bg-deep-purple-accent-400" />
              </span>
            </h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16"
            >
              <input
                placeholder="Email"
                required
                type="text"
                name="from_email"
                className="flex-grow w-full h-12 px-4 mb-3 text-black transition duration-200 bg-white border-2 border-cyan-600 rounded appearance-none md:mr-2 md:mb-0 focus:border-cyan-900 focus:outline-none focus:shadow-outline"
              />
              <button
                value="Send"
                type="submit"
                className="whitespace-nowrap text-white inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-cyan-700 hover:bg-cyan-900 focus:shadow-outline focus:outline-none"
              >
                Let's Talk
              </button>
            </form>
            {didSendMsg ? (
              <ScrollAnimation
              animateIn="fadeIn"
              className="text-md px-3 py-1 my-3 rounded-lg bg-opacity-85 bg-green-900 text-white w-1/2 mx-auto"
              duration={3}
            >
              Message sent successfully{" "}
              <i className="fas fa-check-circle mx-2 text-white"></i>
            </ScrollAnimation>
            ) : (
              <></>
            )}
            <div
              className="border-2 mx-auto mt-20 sm:mt-2 border-white italic relative max-w-md mb-10 text-xs font-bold tracking-wide sm:text-sm sm:mx-auto md:mb-16 p-3 px-5 rounded-md text-blue-900"
              style={{ backgroundColor: "rgba(220,220,220,0.7" }}
            >
              <div
                className="absolute hidden sm:block"
                style={{ bottom: "10%", left: "-60px" }}
              >
                <Image
                  className="rounded-full"
                  src={authorImg}
                  height={75}
                  width={75}
                />
              </div>
              <div
                className="absolute block sm:hidden authorAvatar mx-auto text-cyan-900"
                style={{ top: "-60px", right: "45%" }}
              >
                <Image
                  className="rounded-full"
                  src={authorImg}
                  height={70}
                  width={70}
                />
              </div>
              " It's the time to bring your ideas to the world. <br />I have
              knowledge with many full-stack web development technologies,
              Mastering <span className="underline font-bolder">Next.JS</span>{" "}
              Framework <br />
              (The <span className="underline">Best</span> React Framework for
              Production) "
            </div>
            <Link
              activeClass="active"
              to="skill_section"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              href=""
              aria-label="Scroll down"
              title="Scroll down"
              className="flex bg-cyan-900 border-8 border-white items-center justify-center w-10 h-10 mx-auto text-black duration-300 transform border border-black rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="#eee"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </Link>
          </div>
        </div>
        <a
          href="https://github.com/MohamedRezq"
          target="_blank"
          className="md:absolute bottom-0 right-0 p-4 float-right animate-bounce"
          aria-label="MOREZQ GitHub Profile"
          title="MOREZQ GitHub Profile"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
            alt="Github Page"
            className="transition-all rounded-full w-14  hover:shadow-sm shadow-lg ring hover:ring-8 ring-white hover:bg-white dark:bg-white"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
