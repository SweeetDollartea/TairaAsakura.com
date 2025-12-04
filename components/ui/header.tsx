"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    return (
        <header 
            className={cn(
                "absolute top-0 left-0 right-0 z-50 px-6 py-8 md:px-12 transition-all duration-300",
                isMenuOpen && "bg-white/50 backdrop-blur-md h-screen overflow-y-auto md:h-auto md:overflow-visible md:bg-transparent"
            )}
            onClick={() => {
                if (isMenuOpen) setIsMenuOpen(false);
            }}
        >
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

                    <nav className="hidden md:flex items-center gap-6 md:gap-8">
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

                    <button 
                        className="md:hidden focus:outline-none"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMenuOpen(!isMenuOpen);
                        }}
                        aria-label="Toggle menu"
                    >
                        <Image 
                            src="/images/me/right.svg" 
                            alt="Menu" 
                            width={32} 
                            height={32} 
                            className={cn("transition-transform duration-300", isMenuOpen && "rotate-90")}
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={cn(
                    "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
                    isMenuOpen ? "max-h-screen opacity-100 mt-8 pb-8" : "max-h-0 opacity-0"
                )}>
                    <nav className="flex flex-col gap-6 items-end">
                        <Link 
                            href="/work" 
                            className="text-lg font-medium text-neutral-900 dark:text-white hover:text-[#2F9955] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link 
                            href="/about" 
                            className="text-lg font-medium text-neutral-900 dark:text-white hover:text-[#2F9955] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <a 
                            href="mailto:asakurataira@gmail.com" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium text-neutral-900 dark:text-white hover:text-[#2F9955] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Email
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/taira-asakura/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-lg font-medium text-neutral-900 dark:text-white hover:text-[#2F9955] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Linkedin
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

