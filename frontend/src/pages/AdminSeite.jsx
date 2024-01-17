import "./AdminSeite.scss";

const AdminSeite = () => {
  return (
    <section className="adminSeite">
      <h1>Manage my Blog</h1>
      <form
        onSubmit="return false"
        action="http://localhost:1111/api/blogs"
        method="POST"
        enctype="multipart/form-data"
      >
        <input type="text" name="title" placeholder="please input blog title" />

        <textarea
          name="content"
          id=""
          cols="30"
          rows="10"
          placeholder="please enter blog content"
        >
          this is a story
        </textarea>
        <input
          type="file"
          name="blogImage"
          id="blogImage"
          accept="image/png, image/jpeg"
          placeholder="please upload your image"
        />

        <input type="submit" value="Submit" />
      </form>
      <section className="blogListAdm">hier kann man manage blogs</section>
    </section>
  );
};

export default AdminSeite;
