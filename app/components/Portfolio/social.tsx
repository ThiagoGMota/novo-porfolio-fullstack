import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

interface LinkProps {
  href: string;
  icon: ReactNode;
}

const LinkPersonalizado: React.FC<LinkProps> = ({ href, icon }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-4 border-2 border-black rounded-full hover:bg-black hover:border-white hover:text-white"
    >
      {icon}
    </Link>
  );
};

export const Social = () => {
  return (
    <>
      <LinkPersonalizado
        href="https://github.com/ThiagoGMota"
        icon={<Github size={30} />}
      />
      <LinkPersonalizado
        href="https://www.linkedin.com/in/thiagogmota/"
        icon={<Linkedin size={30} />}
      />
      <LinkPersonalizado
        href="https://www.instagram.com/thiago_gmota/"
        icon={<Instagram size={30} />}
      />
    </>
  );
};
