module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error", // Ensures Prettier formatting issues are treated as errors
    "@typescript-eslint/no-unused-vars": "error", // Treats unused variables as errors
    "@typescript-eslint/no-explicit-any": "error", // Disallows usage of the `any` type
  },
  ignorePatterns: ["node_modules/", "build/"], // Add directories to ignore (optional)
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"], // Apply specific settings to TypeScript files
      rules: {
        // TypeScript specific rules can go here (if any)
      },
    },
  ],
  // Optional: Add linterOptions for reporting unused disable directives
  overrideConfig: {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
};
