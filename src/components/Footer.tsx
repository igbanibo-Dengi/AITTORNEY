import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-sm py-6 text-muted-foreground">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left: Links */}
        <div className="flex items-center gap-4">
          <a href="/#" className="hover:text-white transition-colors duration-200">
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="/#" className="hover:text-white transition-colors duration-200">
            Privacy Policy
          </a>
        </div>

        {/* Center: Icons */}
        <div className="flex items-center gap-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="text-white hover:text-zinc-400 transition duration-200" size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="text-white hover:text-zinc-400 transition duration-200" size={18} />
          </a>
        </div>

        {/* Right: Copyright */}
        <p className="text-zinc-500">&copy; 2025 AITTORNEY. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
