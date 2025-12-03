"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12">
            <Link 
                href="/" 
                className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white hover:opacity-80 transition-opacity"
            >
                Taira Asakura
            </Link>

            <nav className="flex items-center gap-6 md:gap-8">
                <Link 
                    href="/work" 
                    className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                    Projects
                </Link>
                <Link 
                    href="/about" 
                    className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                    About
                </Link>
                <a 
                    href="mailto:asakurataira@gmail.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                    Email
                </a>
                <a 
                    href="https://www.linkedin.com/in/taira-asakura/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                    Linkedin
                </a>
            </nav>
        </header>
    );
}

