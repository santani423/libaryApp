import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/Logo.svg";
import { Facebook, Instagram, Linkedin, Music } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
    },
    {
      name: "TikTok",
      icon: Music,
      href: "https://tiktok.com",
    },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white/50 py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-28">
        {/* Logo Section */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <Image src={Logo} alt="Booky Logo" />
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Booky
          </h2>
        </div>

        {/* Description */}
        <p className="text-center text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover inspiring stories & timeless knowledge, ready to borrow
          anytime. Explore online or visit our nearest library branch.
        </p>

        {/* Social Media Section */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <span className="text-center text-sm font-medium text-gray-700">
            Follow on Social Media
          </span>
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
                >
                  <Icon size={20} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-center text-xs text-gray-500">
            &copy; {currentYear} Booky. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
