"use client";

import React from "react";
import { socialLinks } from "@/data/data";
import { motion } from "framer-motion";
import { smoothScaleUp } from "@/animation/animations";

export default function SocialLinks() {
    return (
        <motion.ul className="flex items-center gap-4 lg:gap-6">
            {socialLinks.map((socialLink) => {
                const { id, href, icon, name } = socialLink;
                const Icon = icon;

                return (
                    <motion.li
                        key={id}
                        variants={smoothScaleUp}
                        className="group relative border border-pb-theme-primary text-pb-theme-primary hover:text-pb-white p-2.5 rounded-full group-hover:-translate-y-1 overflow-hidden transition-all duration-300 ease-in-out"
                    >
                        <a
                            href={href}
                            className=""
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${name}`}
                        >
                            <span className="w-full h-full absolute inset-0 scale-0 group-hover:scale-100 bg-pb-theme-primary  rounded-full transition-all duration-300 ease-in-out" />
                            <Icon className="relative z-10" />
                        </a>
                    </motion.li>
                );
            })}
        </motion.ul>
    );
}
