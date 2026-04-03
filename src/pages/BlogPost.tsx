// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// type Post = {
//   title: string;
//   date: string;
//   description: string;
//   slug: string;
//   image?: string;
//   author?: string;
//   category?: string;
//   tags?: string[];
//   content: string;
// };

// function BlogPost() {
//   const { slug } = useParams();
//   const [post, setPost] = useState<Post | null>(null);
//   const [allPosts, setAllPosts] = useState<Post[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("/blog-data/posts.json")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("posts.json file not found");
//         }
//         return res.json();
//       })
//       .then((data: Post[]) => {
//         const foundPost = data.find((item) => item.slug === slug);
//         setPost(foundPost || null);
//         setAllPosts(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Failed to load blog post:", err);
//         setLoading(false);
//       });
//   }, [slug]);

//   if (loading) {
//     return (
//       <div className="py-24 text-center text-xl text-[#895a06]">
//         Loading article...
//       </div>
//     );
//   }

//   if (!post) {
//     return (
//       <div className="py-24 text-center">
//         <h2 className="text-3xl font-bold text-red-500">Post not found</h2>
//         <Link to="/blog" className="mt-4 inline-block text-[#895a06] underline">
//           Back to Blog
//         </Link>
//       </div>
//     );
//   }

//   const relatedPosts = allPosts
//     .filter((item) => item.slug !== post.slug)
//     .slice(0, 2);

//   return (
//     <div className="bg-[#fffdf8]">
//       {/* Hero */}
//       <section className="mx-auto max-w-6xl px-4 pt-8 pb-10 sm:px-6 lg:px-8">
//         <Link
//           to="/blog"
//           className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#895a06] hover:underline"
//         >
//           ← Back to Blog
//         </Link>

//         <div className="grid items-center gap-10 lg:grid-cols-2">
//           <div>
//             {post.category && (
//               <span className="mb-4 inline-block rounded-full bg-[#f4e4be] px-4 py-1 text-sm font-semibold text-[#895a06]">
//                 {post.category}
//               </span>
//             )}

//             <h1 className="mb-5 text-3xl font-bold leading-tight text-[#3e2a00] sm:text-5xl">
//               {post.title}
//             </h1>

//             <p className="mb-6 text-lg leading-8 text-gray-700">
//               {post.description}
//             </p>

//             <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
//               <span>{new Date(post.date).toDateString()}</span>
//               {post.author && <span>• By {post.author}</span>}
//             </div>
//           </div>

//           {post.image && (
//             <div className="overflow-hidden rounded-[28px] shadow-xl">
//               <img
//                 src={post.image}
//                 alt={post.title}
//                 className="h-[260px] w-full object-cover sm:h-[420px]"
//               />
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Article */}
//       <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
//         <div className="rounded-[28px] bg-white p-6 shadow-sm sm:p-10">
//           <div
//             className="
//     blog-content text-[17px] leading-8 text-gray-800
//     [&_p]:mb-5
//     [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#895a06]
//     [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-[#6d4700]
//     [&_h4]:mt-6 [&_h4]:mb-3 [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-[#3e2a00]
//     [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6
//     [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6
//     [&_li]:mb-2
//     [&_a]:font-medium [&_a]:text-[#895a06] [&_a]:underline
//     [&_strong]:font-semibold [&_strong]:text-[#3e2a00]
//     [&_hr]:my-8 [&_hr]:border-[#d9c9a4]
//     [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-[#d9b56a] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-700
//     [&_img]:my-6 [&_img]:rounded-2xl [&_img]:shadow-md
//     [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-xl
//     [&_th]:border [&_th]:border-[#e7d8b3] [&_th]:bg-[#faf3df] [&_th]:px-4 [&_th]:py-3 [&_th]:text-left
//     [&_td]:border [&_td]:border-[#e7d8b3] [&_td]:px-4 [&_td]:py-3
//   "
//             dangerouslySetInnerHTML={{ __html: post.content }}
//           />
//         </div>

//         {/* Tags */}
//         {post.tags && post.tags.length > 0 && (
//           <div className="mt-10">
//             <h3 className="mb-4 text-xl font-semibold text-[#895a06]">Tags</h3>
//             <div className="flex flex-wrap gap-3">
//               {post.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="rounded-full border border-[#d9b56a] bg-white px-4 py-2 text-sm text-[#895a06] shadow-sm"
//                 >
//                   #{tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Related Posts */}
//         {relatedPosts.length > 0 && (
//           <div className="mt-16">
//             <h2 className="mb-6 text-2xl font-bold text-[#895a06]">
//               Related Articles
//             </h2>

//             <div className="grid gap-6 md:grid-cols-2">
//               {relatedPosts.map((item) => (
//                 <Link
//                   key={item.slug}
//                   to={`/blog/${item.slug}`}
//                   className="group rounded-3xl border border-[#ecd7a4] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
//                 >
//                   {item.image && (
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="mb-4 h-48 w-full rounded-2xl object-cover"
//                     />
//                   )}
//                   <p className="mb-2 text-sm text-gray-500">
//                     {new Date(item.date).toDateString()}
//                   </p>
//                   <h3 className="mb-2 text-xl font-semibold text-[#3e2a00] group-hover:text-[#895a06]">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-700">{item.description}</p>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }

// export default BlogPost;


import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const formatDate = (date: string) => new Date(date).toDateString();

  const categoryBadgeClass =
    "inline-block rounded-full bg-[#f4e4be] px-4 py-1 text-sm font-semibold text-[#895a06]";

  const relatedCardClass =
    "group rounded-3xl border border-[#ecd7a4] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md";

  const contentClass = `
    blog-content text-[17px] leading-8 text-gray-800
    [&_p]:mb-5
    [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#895a06]
    [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-[#6d4700]
    [&_h4]:mt-6 [&_h4]:mb-3 [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-[#3e2a00]
    [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6
    [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6
    [&_li]:mb-2
    [&_a]:font-medium [&_a]:text-[#895a06] [&_a]:underline
    [&_strong]:font-semibold [&_strong]:text-[#3e2a00]
    [&_hr]:my-8 [&_hr]:border-[#d9c9a4]
    [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-[#d9b56a] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-700
    [&_img]:my-6 [&_img]:rounded-2xl [&_img]:shadow-md
    [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-xl
    [&_th]:border [&_th]:border-[#e7d8b3] [&_th]:bg-[#faf3df] [&_th]:px-4 [&_th]:py-3 [&_th]:text-left
    [&_td]:border [&_td]:border-[#e7d8b3] [&_td]:px-4 [&_td]:py-3
  `;

  useEffect(() => {
    const loadPost = async () => {
      try {
        const res = await fetch("/blog-data/posts.json");

        if (!res.ok) {
          throw new Error("posts.json file not found");
        }

        const data: Post[] = await res.json();
        const foundPost = data.find((item) => item.slug === slug);

        setPost(foundPost || null);
        setAllPosts(data);
      } catch (err) {
        console.error("Failed to load blog post:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="py-24 text-center text-xl text-[#895a06]">
        Loading article...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-3xl font-bold text-red-500">Post not found</h2>
        <Link to="/blog" className="mt-4 inline-block text-[#895a06] underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = allPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 2);

  return (
    <div className="bg-[#fffdf8]">
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#895a06] hover:underline"
        >
          ← Back to Blog
        </Link>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            {post.category && (
              <span className={`${categoryBadgeClass} mb-4`}>
                {post.category}
              </span>
            )}

            <h1 className="mb-5 text-3xl font-bold leading-tight text-[#3e2a00] sm:text-5xl">
              {post.title}
            </h1>

            <p className="mb-6 text-lg leading-8 text-gray-700">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span>{formatDate(post.date)}</span>
              {post.author && <span>• By {post.author}</span>}
            </div>
          </div>

          {post.image && (
            <div className="overflow-hidden rounded-[28px] shadow-xl">
              <img
                src={post.image}
                alt={post.title}
                className="h-[260px] w-full object-cover sm:h-[420px]"
              />
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[28px] bg-white p-6 shadow-sm sm:p-10">
          <div
            className={contentClass}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="mt-10">
            <h3 className="mb-4 text-xl font-semibold text-[#895a06]">Tags</h3>

            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#d9b56a] bg-white px-4 py-2 text-sm text-[#895a06] shadow-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-[#895a06]">
              Related Articles
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {relatedPosts.map((item) => (
                <Link
                  key={item.slug}
                  to={`/blog/${item.slug}`}
                  className={relatedCardClass}
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="mb-4 h-48 w-full rounded-2xl object-cover"
                    />
                  )}

                  <p className="mb-2 text-sm text-gray-500">
                    {formatDate(item.date)}
                  </p>

                  <h3 className="mb-2 text-xl font-semibold text-[#3e2a00] group-hover:text-[#895a06]">
                    {item.title}
                  </h3>

                  <p className="text-gray-700">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default BlogPost;