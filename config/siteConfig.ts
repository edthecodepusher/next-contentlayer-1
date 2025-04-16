export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: {
    name: string;
    email: string;
    twitterHandle: string;
  };
  mainNav: NavItem[];
  footerNav: NavItem[];
  blogCategories: string[];
  links: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}

const siteConfig: SiteConfig = {
  name: "My Blog",
  description: "A blog about tech, lifestyle, coding, and news.",
  url: "https://myblog.example.com",
  ogImage: "/images/og-image.jpg",
  author: {
    name: "John Doe",
    email: "john.doe@example.com",
    twitterHandle: "@johndoe",
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Categories",
      href: "/categories",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  footerNav: [
    {
      title: "Privacy Policy",
      href: "/privacy",
    },
    {
      title: "Terms of Service",
      href: "/terms",
    },
    {
      title: "Sitemap",
      href: "/sitemap.xml",
    },
  ],
  blogCategories: ["tech", "lifestyle", "coding", "news"],
  links: {
    twitter: "https://twitter.com/johndoe",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
  },
};

export default siteConfig;