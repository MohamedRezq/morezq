import { useTheme } from "next-themes";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init("user_tGYmCdobbGp4a6cJxsHfG");
import { Element } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = () => {
  const [didSendMasg, setDidSendMasg] = useState(false);
  const { resolvedTheme } = useTheme();
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
          setDidSendMasg(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Element name="contact_section" className="element"></Element>
      <section className="text-black body-font relative bg-cyan-900 mt-32">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
              Let's talk together and see how can I help you to get your project
              accomplished <i className="fas fa-check-circle mx-1"></i>
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-wrap -m-2"
            >
              <div className="p-2 sm:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-white font-bold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    className="w-full bg-white bg-opacity-100 rounded border border-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xs outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 sm:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    className="w-full bg-white bg-opacity-100 rounded border border-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xs outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-white font-bold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white bg-opacity-100 rounded border border-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-xs outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  value="Send"
                  type="submit"
                  className="flex mx-auto text-cyan-900 bg-white border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 hover:text-white rounded text-lg"
                >
                  Send Message <i className="fas fa-envelope mx-2 my-auto"></i>
                </button>
              </div>
              {didSendMasg ? (
                <ScrollAnimation
                  animateIn="fadeIn"
                  className="text-md py-1 my-3 rounded-lg bg-opacity-85 bg-green-900 text-white px-3 mx-auto"
                  duration={3}
                >
                  Message sent successfully{" "}
                  <i className="fas fa-check-circle mx-2 text-white"></i>
                </ScrollAnimation>
              ) : (
                <></>
              )}
              <div className="p-2 w-full pt-8 mt-8 border-t border-white text-center">
                <a className="text-white">morezqdev@gmail.com</a>
                <div className="text-white my-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=100077341370475"
                    target="_blank"
                    className="no-underline text-white hover:font-bold"
                  >
                    <i className="fab fa-lg fa-facebook-square mx-2"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/morezq_dev/"
                    target="_blank"
                    className="no-underline text-white hover:font-bold"
                  >
                    <i className="fab fa-lg fa-instagram mx-2"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohamed-rezq-2021/"
                    target="_blank"
                    className="no-underline text-white hover:font-bold"
                  >
                    <i className="fab fa-lg fa-linkedin mx-2"></i>
                  </a>
                  <a
                    href="https://github.com/MohamedRezq"
                    target="_blank"
                    className="no-underline text-white hover:font-bold"
                  >
                    <i className="fab fa-lg fa-github-square mx-2"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCsrUFJVyzJdNOKpIb2OwlUw"
                    target="_blank"
                    className="no-underline text-white hover:font-bold"
                  >
                    <i className="fab fa-lg fa-youtube mx-2"></i>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
