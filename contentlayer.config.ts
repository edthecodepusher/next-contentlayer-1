// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files";

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
};

// Define the Page document type
export const Page = defineDocumentType(() => ({
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
    },
  },
  computedFields,
}));

// Define the Post document type with category field added
export const Post = defineDocumentType(() => ({
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
    },
    date: {
      type: "date",
      required: true,
    },
    thumbnail: {
      type: "string",
      required: false, // Set to true if thumbnails are mandatory
    },
    category: {
      type: "string",
      required: true,
      // Optional: add predefined category options
      options: ["tech", "lifestyle", "coding", "news"], // Adjust these to your needs
    },
  },
  computedFields,
}));

// Export the Contentlayer source configuration
export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Page],
});
