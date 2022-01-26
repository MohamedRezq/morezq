import Image from "next/image";
import mLogo from "./../../assets/mLogo.png";

const Footer = () => {
  return (
    <div className="relative mt-16 bg-cyan-900">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-cyan-900"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>

      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 text-white">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <Image src={mLogo} width={50} height={50} alt="MOREZQ - Web Developer" />
              <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                MOREZQ
              </span>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-white">
                I am a full-stack web developer. I can design and develop full websites. I have a great passion to continously learn new technologies and work with agile teams to develop great and scalable web applications.
              </p>
              <p className="mt-4 text-sm text-white">
                Don't hesitate to send me  and let us share ideas together
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-white">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-white">Phone:</p>
              <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:font-bolder"
              >
                +20 0122-789-1252
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-white">Email:</p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                morezqdev@gmail.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-white">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Cairo, EG
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-white">
              Social
            </span>
            <div className="mt-3 flex items-center mt-1 space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=100077341370475"
                target="_blank"
                className="no-underline text-white hover:font-bold"
              >
                <i className="fab fa-lg fa-facebook-square"></i>
              </a>
              <a
                href="https://www.instagram.com/morezq_dev/"
                target="_blank"
                className="no-underline text-white hover:font-bold"
              >
                <i className="fab fa-lg fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-rezq-2021/"
                target="_blank"
                className="no-underline text-white hover:font-bold"
              >
                <i className="fab fa-lg fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/MohamedRezq"
                target="_blank"
                className="no-underline text-white hover:font-bold"
              >
                <i className="fab fa-lg fa-github-square mx-21"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCsrUFJVyzJdNOKpIb2OwlUw"
                target="_blank"
                className="no-underline text-white hover:font-bold"
              >
                <i className="fab fa-lg fa-youtube"></i>
              </a>
            </div>
            <p className="mt-4 text-sm text-white">
              Subscribe to my channels and get updated with the latest web technologies and my blogs.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-white">
            © Copyright 2022 All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
