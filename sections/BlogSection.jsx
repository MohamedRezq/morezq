import AnimatedTitle from "../components/AnimatedTitle";
import BlogCard from "../components/BlogCard";
import { Element } from "react-scroll";

const BlogSection = () => {
  return (
    <div>
      <Element name="blog_section" className="element"></Element>
      <div className="py-10 mt-32">
        <AnimatedTitle title="BLOG LIBRARY" />
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {[1, 2, 3, 4].map((blog, i) => (
            <BlogCard key={i} order={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
