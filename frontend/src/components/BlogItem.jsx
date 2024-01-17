import { Link } from "react-router-dom";

const BlogItem = ({ id, title, image }) => {
  return (
    <Link to={`/detail/${id}`}>
      <div>
        <img src={image} alt={title} />
        <h2>{title} </h2>
      </div>
    </Link>
  );
};

export default BlogItem;
