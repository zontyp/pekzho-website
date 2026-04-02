const fs = require("fs");
const matter = require("gray-matter");
const MarkdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const glob = require("glob");

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
}).use(markdownItAnchor, {
  permalink: false,
  slugify: (s) =>
    s
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-"),
});

module.exports = function () {
  const files = glob.sync("./posts/*.md");

  const posts = files.map((file) => {
    const fileContent = fs.readFileSync(file, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      title: data.title,
      date: data.date,
      description: data.description,
      slug: data.slug,
      image: data.image || "",
      author: data.author || "Pekzho Team",
      category: data.category || "Blog",
      tags: data.tags || [],
      content: md.render(content),
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};