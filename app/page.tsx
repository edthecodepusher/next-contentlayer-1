// app/page.tsx
import { allPosts } from "contentlayer/generated";
import BlogCard from "@/components/BlogCard";

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 prose">Blog Posts</h1>
      <div className="grid gap-6 grid-cols-1 ">
        {allPosts.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            thumbnail={post.thumbnail}
            slug={post.slug}
            category={post.category}
          />
        ))}
      </div>
    </div>
  );
}
