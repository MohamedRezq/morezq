import AnimatedTitle from "./../components/AnimatedTitle";
import BlogCard from "./../components/BlogCard";
import { Element } from "react-scroll";
import { connect } from "react-redux";

const BlogSection = ({ storedBlogs }) => {
  return (
    <div>
      <Element name="blog_section" className="element"></Element>
      <div className="py-10 mt-32">
        <AnimatedTitle className="hidden md:block" title="BLOG LIBRARY" />
        <div
          className="block md:hidden my-20 flex flex-col w-full my-3 font-serif"
          style={{ fontSize: "36pt" }}
        >
          BLOG LIBRARY
          <hr className="border-2 border-black ml-2" />
        </div>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {storedBlogs.map((blog, i) => (
            <BlogCard key={i} order={i} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  storedBlogs: state.blogs.blogs,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BlogSection);
