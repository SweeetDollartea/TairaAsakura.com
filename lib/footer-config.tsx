"use client";

import Image from "next/image";
import { Linkedin, Github, Mail } from "lucide-react";

export const footerContent = {
  logo: <Image src="/images/me/mylogo2.png" alt="Taira Asakura" width={40} height={40} className="h-10 w-10 object-contain" />,
  brandName: "Taira Asakura",
  socialLinks: [
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/taira-asakura/", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/SweeetDollartea/TairaAsakura.com", label: "GitHub" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:asakurataira@gmail.com", label: "Email" },
  ],
  mainLinks: [
    { href: "/work/ganson-engineering", label: "Ganson Engineering" },
    { href: "/work/tdp-cahaba", label: "TDP & Cahaba" },
    { href: "/work/strybuc-industries", label: "Strybuc Industries" },
  ],
  legalLinks: [
    { href: "/work", label: "Projects" },
    { href: "/about", label: "About" },
  ],
  copyright: {
    text: "Loosely design on Figma and developed in Cursor by me",
    license: "© 2025 Taira Asakura",
  },
};

