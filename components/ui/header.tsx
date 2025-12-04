"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Header() {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 px-6 py-8 md:px-12">
            <div className="px-4 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link 
                        href="/" 
                        className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white hover:opacity-80 transition-opacity flex items-center"
                    >
                        <Image
                            src="/images/me/mylogo2.png"
                            alt="Taira Asakura Logo"
                            width={128}
                            height={128}
                            className="h-20 w-auto object-contain"
                            priority
                        />
                    </Link>

                    <nav className="flex items-center gap-6 md:gap-8">
                        <Link 
                            href="/work" 
                            className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-[#2F9955] dark:hover:text-[#2F9955] transition-colors"
                        >
                            Projects
                        </Link>
                        <Link 
                            href="/about" 
                            className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-[#2F9955] dark:hover:text-[#2F9955] transition-colors"
                        >
                            About
                        </Link>
                        <a 
                            href="mailto:asakurataira@gmail.com" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-[#2F9955] dark:hover:text-[#2F9955] transition-colors"
                        >
                            Email
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/taira-asakura/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-[#2F9955] dark:hover:text-[#2F9955] transition-colors"
                        >
                            Linkedin
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

