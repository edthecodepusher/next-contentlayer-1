import {
  defineDocumentType,
  makeSource,
  ComputedFields,
  DocumentType,
} from "contentlayer/source-files";
import rehypeHighlight from "rehype-highlight";
import type { Plugin } from "unified";

// Define computed fields with TypeScript typing
const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
  readTimeMinutes: {
    type: "string",
    resolve: (doc) => calculateReadingTime(doc.body.raw),
  },
};

// Define the Page document type
export const Page: DocumentType = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: false,
    },
  },
  computedFields,
}));

// Define the Post document type with author and read time fields
export const Post: DocumentType = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: false,
    },
    date: {
      type: "date",
      required: true,
    },
    thumbnail: {
      type: "string",
      required: false,
    },
    category: {
      type: "enum",
      options: ["tech", "lifestyle", "coding", "news"],
      required: true,
    },
    author: {
      type: "string", // Changed from "object" to "nested"
      required: true,
      fields: {
        name: { type: "string", required: true },
        avatar: { type: "string", required: true },
      },
    },
  },
  computedFields,
}));

// Function to calculate reading time
export const calculateReadingTime = (text: string): string => {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s+/g).length;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `${readTime} min read`;
};

// Export the Contentlayer source configuration
export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Page],
  mdx: {
    rehypePlugins: [],
  },
});