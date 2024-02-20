import "@/assets/blog.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import jsonData from "../../data.json"

interface BlogItem {
  id: string;
  Title: string;
  image: string;
  Short: string;
  Author: string;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/db.json");
      const jsonData: BlogItem[] = await response.json();
      setBlogs(jsonData);
      console.log(jsonData);
      
    } catch (error) {
      console.error("Error fetching data", error);
    }
    
  };

  return (
    <div className="Blog-container" id="blogs">
      <div className="blog-body">
        <h1>MY BLOGS</h1>
        <p>An informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order so that the most recent post appears first, at the top of the web page.</p>

        <div className="blogs-in">
          {blogs.map((item) => (
            <div key={item.id} className="blog">
              <Link to={`/Blogs/${item.id}`}>
              <img src={item.image} alt="image" />
              </Link>
              <h2>{item.Title}</h2>
              <p>{item.Short}</p>
              <p style={{ fontWeight: "800" }}>Author: {item.Author}</p>
              <Link to={`/Blogs/${item.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
