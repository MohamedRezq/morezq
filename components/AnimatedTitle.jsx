import ScrollAnimation from "react-animate-on-scroll";

const AnimatedTitle = ({ title, loc = "left" }) => {
  if (loc === "left") {
    return (
      <div className="my-20 hidden md:flex flex-col w-full">
        <ScrollAnimation
          animateIn="bounceInRight"
          className="my-3 font-serif"
          style={{ fontSize: "36pt" }}
          duration={2}
        >
          {title}
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInLeft" className="w-1/4" duration={2}>
          <hr className="border-2 border-black ml-2" />
        </ScrollAnimation>
      </div>
    );
  }
  if (loc === "right") {
    return (
      <div className="my-20 hidden md:flex flex-col w-full items-end">
        <ScrollAnimation
          animateIn="bounceInLeft"
          className="my-3 font-serif"
          style={{ fontSize: "36pt" }}
          duration={3}
        >
          {title}
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight" className="w-1/4" duration={2}>
          <hr className="border-2 border-black ml-2" />
        </ScrollAnimation>
      </div>
    );
  }
};

export default AnimatedTitle;
