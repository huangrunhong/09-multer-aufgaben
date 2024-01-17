import Admin from "../images/admin.png";
import Blog from "../images/blog.png";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <img src={Blog} alt="blog" />
      </Link>
      <Link to="/admin">
        <img src={Admin} alt="admin" />
      </Link>
    </nav>
  );
};

export default Header;
