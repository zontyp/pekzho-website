import { Link } from "react-router-dom";

function Blog(){
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        <li>
          <Link to="/blog/first-post">First Post</Link>
        </li>
      </ul>
    </div>
  );
}

export default Blog;