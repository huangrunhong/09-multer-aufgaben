import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailSeite.scss";

const DetailSeite = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    fetch("http://localhost:1111/api/blogs")
      .then((res) => res.json())
      .then(({ success, result, error }) => {
        if (!success) throw error;
        const theBlog = result.find((blog) => {
          return blog.id.toString() === id;
        });
        setBlog(theBlog);
      });
  }, []);

  return (
    <section className="detailSeite">
      <img src={blog.image} alt={blog.title} />

      <h3>{blog.title} </h3>
      <p>{blog.content} </p>
    </section>
  );
};

export default DetailSeite;
