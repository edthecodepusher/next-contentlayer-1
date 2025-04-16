// components/Footer.tsx
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaGithub,
  FaDiscord,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-6 mt-auto border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Your Blog Name. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="https://x.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Twitter"
            >
              <span>
                <FaTwitter size={20} />
              </span>
            </Link>
            <Link
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors duration-200"
              aria-label="Facebook"
            >
              <span>
                <FaFacebookF size={20} />
              </span>
            </Link>
            <Link
              href="https://github.com/yourusername"
              target="_blank"y
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <span>
                <FaGithub size={20} />
              </span>
            </Link>
            <Link
              href="https://discord.gg/yourinvite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-chart-4 transition-colors duration-200"
              aria-label="Discord"
            >
              <span>
                <FaDiscord size={20} />
              </span>
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-chart-5 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <span>
                <FaLinkedin size={20} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
