import ScrollAnimation from "react-animate-on-scroll";

const BlogCard = ({ order, blog }) => {
  return (
    <ScrollAnimation
      animateOnce={true}
      className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm border-2 border-gray-100"
      animateIn="bounceInUp"
      duration={1 + order}
    >
      <a href="">
        <img
          src={blog.node.image.url}
          className="object-cover w-full h-64 border-b-2"
          alt={blog.node.image.alt}
        />
      </a>
      <div className="p-5 border border-t-0">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a
            href="/"
            className="transition-colors duration-200 text-blue-gray-900 hover:text-cyan-900"
            aria-label="Category"
            title="MOREZQ - Web Developer"
          >
            MOREZQ
          </a>
          <span className="text-gray-600">— {blog.node.release_date}</span>
        </p>
        <a
          href="/"
          aria-label="Category"
          title={`${blog.node.title[0].text} - Read full blog`}
          className="inline-block mb-3 text-lg font-bold leading-5 transition-colors duration-200 hover:text-cyan-900"
        >
          {blog.node.title[0].text}
        </a>
        <p className="mb-2 text-gray-700">{blog.node.description[0].text}</p>
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Read full blog
        </a>
      </div>
    </ScrollAnimation>
  );
};

export default BlogCard;
