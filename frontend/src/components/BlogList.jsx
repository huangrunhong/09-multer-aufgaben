import { useState, useEffect } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [blogArr, setBlogArr] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1111/api/blogs", { method: "GET" })
      .then((res) => res.json())
      .then(({ success, result, error }) => {
        console.log(result);
        console.log(success);
        // console.log(error);
        if (!success) throw error;
        else setBlogArr(result);
      });
    // .catch((err) => console.log(err));
  }, []);
  console.log(blogArr);
  return (
    <>
      {blogArr ? (
        blogArr?.map((blog) => (
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
