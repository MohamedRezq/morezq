import AnimatedTitle from "./../components/AnimatedTitle";
import BlogCard from "./../components/BlogCard";
import { Element } from "react-scroll";
import { connect } from "react-redux";

const BlogSection = ({ storedBlogs }) => {
  return (
    <div>
      <Element name="blog_section" className="element"></Element>
      <div className="py-10 mt-32">
        <AnimatedTitle title="BLOG LIBRARY" />
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
