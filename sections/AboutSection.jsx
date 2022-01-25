import Image from "next/image";
import authorImg from "./../assets/author.jpg";
import { useTheme } from "next-themes";
import ScrollAnimation from "react-animate-on-scroll";
import AnimatedTitle from "../components/AnimatedTitle";
import { Element } from "react-scroll";

const AboutSection = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div>
      <Element name="about_section" className="element"></Element>
      <div className="py-10 mt-32">
        <AnimatedTitle title="WHO I AM" loc="right" />
        <ScrollAnimation
          className="flex w-full flex-col md:flex-row"
          animateIn="fadeInUp"
          duration={3}
          animateOnce={true}
        >
          <div className="relative w-full md:w-1/2 flex justify-center content-center py-6">
            <div
              className="h-52 w-2/3 md:h-2/3 my-auto"
              style={{
                backgroundColor:
                  resolvedTheme === "dark" ? "#0B0C0D" : "#164e63",
              }}
            ></div>
            <div className="absolute bottom-12 right-12 rounded-full flex content-center justify-center box-content border-8 border-white">
              <Image
                src={authorImg}
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 mx-8 relative py-6 my-6">
            <div className="font-bolder text-sm sm:text-lg md:text-xl text-black my-2">
              Mohamed Rezq - Full Stack Web Developer - Egypt
            </div>
            <div className="my-1">
              <hr className="border-2 border-gray-600" />
            </div>
            <div className="absolute top-0 left-0">
              <i className="fas fa-quote-left"></i>
            </div>
            <div className="text-sm sm:text-md italic font-serif">
              I can design and develop full websites/RESTful APIs for the
              enterprise products. I developed multiple full-stack websites
              using MERN stack which I believe is the best in terms of high
              performance and web design responsiveness. I got development
              experience with various technologies to keep up with market/client
              needs, for example: Databases (PostgreSQL, MySQL and MongoDB), CSS
              frameworks (Tailwind, Bootsrap, Materialize, Material-UI). I can
              boost your website rank in search engines. I can build effective
              testing codes to assure high-quality and robust web applications.
              Finally, I have a great passion to continously learn new
              technologies and work with agile teams to develop great and
              scalable web applications.
            </div>
            <div className="absolute bottom-0 right-0">
              <i className="fas fa-quote-right"></i>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default AboutSection;
