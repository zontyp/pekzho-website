import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Post = {
  title: string;
  date: string;
  description: string;
  slug: string;
  image?: string;
  author?: string;
  category?: string;
  tags?: string[];
  content: string;
};

function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/blog-data/posts.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("posts.json file not found");
        }
        return res.json();
      })
      .then((data: Post[]) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load blog posts:", err);
        setError("Blog posts load thai na sakya.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-24 text-center text-xl text-[#895a06]">
        Loading blog posts...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold text-red-500">{error}</h2>
      </div>
    );
  }

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className="bg-[#fffdf8]">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#895a06] sm:text-5xl">
            Our Blog
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            Explore insights, guides, AI tips, website ideas, and growth content for modern businesses.
          </p>
        </div>

        {featuredPost && (
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="mb-14 grid overflow-hidden rounded-[32px] bg-white shadow-lg transition hover:shadow-xl lg:grid-cols-2"
          >
            {featuredPost.image && (
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-[280px] w-full object-cover sm:h-[380px] lg:h-full"
              />
            )}

            <div className="flex flex-col justify-center p-8 sm:p-12">
              {featuredPost.category && (
                <span className="mb-4 inline-block rounded-full bg-[#f4e4be] px-4 py-1 text-sm font-semibold text-[#895a06]">
                  {featuredPost.category}
                </span>
              )}

              <h2 className="mb-4 text-3xl font-bold text-[#3e2a00] sm:text-4xl">
                {featuredPost.title}
              </h2>

              <p className="mb-5 text-gray-700">{featuredPost.description}</p>

              <p className="text-sm text-gray-500">
                {new Date(featuredPost.date).toDateString()}
                {featuredPost.author && ` • By ${featuredPost.author}`}
              </p>
            </div>
          </Link>
        )}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {otherPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group rounded-3xl border border-[#ecd7a4] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="mb-5 h-52 w-full rounded-2xl object-cover"
                />
              )}

              {post.category && (
                <span className="mb-3 inline-block rounded-full bg-[#f4e4be] px-3 py-1 text-xs font-semibold text-[#895a06]">
                  {post.category}
                </span>
              )}

              <h3 className="mb-3 text-2xl font-semibold text-[#3e2a00] group-hover:text-[#895a06]">
                {post.title}
              </h3>

              <p className="mb-4 text-gray-700">{post.description}</p>

              <p className="text-sm text-gray-500">
                {new Date(post.date).toDateString()}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;