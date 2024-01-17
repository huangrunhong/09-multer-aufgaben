import { useState, useEffect } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [blogArr, setBlogArr] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1111/api/blogs")
      .then((res) => res.json())
      .then(({ success, result, error }) => {
        if (!success) throw error;
        else setBlogArr(result);
      });
  }, []);
  console.log(blogArr);
  return (
    <>
      {blogArr ? (
        blogArr.map((blog) => (
          <BlogItem
            key={blog.id}
            id={blog.id}
            title={blog.title}
            image={blog.image}
          />
        ))
      ) : (
        <p>blogs are comming</p>
      )}
    </>
  );
};

export default BlogList;
