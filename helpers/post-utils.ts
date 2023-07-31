// @ts-nocheck
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content");

export function getFiles() {
  return fs.readdirSync(blogDirectory);
}

export function createBlog(file) {
  const slug = file.replace(/\.md$/, "");

  const filePath = path.join(blogDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const blogData = {
    ...data,
    content,
    slug,
  };

  return blogData;
}

export function getAllBlogs() {
  const files = getFiles();

  const blogs = files
    .map((file) => {
      return createBlog(file);
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return blogs;
}
