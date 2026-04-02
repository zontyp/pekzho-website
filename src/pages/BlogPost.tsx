import { useParams } from "react-router-dom";

function BlogPost(){
  const { slug } = useParams<{ slug: string }>();

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
    </div>
  );
}

export default BlogPost;