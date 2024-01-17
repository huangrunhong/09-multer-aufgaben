import homeImage from "../images/homeImage.jpg";
import "./LandingPage.scss";

import BlogList from "../components/BlogList";
const LandingPage = () => {
  //   const [blogArr, setBlogArr] = useState([]);
  //   useEffect(() => {
  //     fetch("http://localhost:1111/api/blogs")
  //       .then((res) => res.json())
  //       .then(({ success, result, error }) => {
  //         if (!success) throw error;
  //         else setBlogArr(result);
  //       });
  //   }, []);

  return (
    <section className="landingPage">
      <div className="banner">
        <img src={homeImage} alt="homeBanner" />
      </div>
      <section className="blogList">
        <BlogList />
      </section>
    </section>
  );
};

export default LandingPage;
