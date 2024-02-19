import "@/assets/blogDetails.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Blog {
  id: string;
  Title: string;
  image: string;
  Body: string;
  Author: string;
}

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [error, setError] = useState<string>("");

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/Blogs/${id}`);
      const jsonData: Blog = await response.json();
      setBlog(jsonData);
    } catch (error) {
      console.error("Error fetching data", error);
      setError("Blog not found");
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component is mounted or updated
  });

  if (error) {
    return <p>{error}</p>;
  }

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="BlogDetails-container">
      <div className="blog-details">
        <h1>{blog.Title}</h1>
        <h3 style={{ fontWeight: "800" }}> <span style={{color: "Blue"}}>Author:</span>  {blog.Author}</h3>
        <img src={blog.image} alt="image" />
        <p>{blog.Body}</p>
        
      </div>
    </div>
  );
};

export default BlogDetails;
