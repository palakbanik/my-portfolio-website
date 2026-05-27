"use client";

import React from "react";
import Container from "@/components/shared/Container";
import Link from "next/link";
import ParaText from "@/components/shared/texts-type/ParaText";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navLinks } from "@/data/data";
import { fadeUp, springScaleUp } from "@/animation/animations";

export default function FooterSection() {
    const pathname = usePathname();
    return (
        <footer
            className={`w-full ${pathname === "/" ? "bg-pb-theme-accent-1" : "bg-pb-theme-secondary"}`}
        >
            <Container className="pt-12 sm:pt-14 pb-6 sm:pb-10">
                <div className="flex flex-col items-center justify-center gap-3 lg:gap-5">
                    {/* logo */}
                    <motion.div
                        variants={springScaleUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="font-luckiest-guy select-none"
                    >
                        <Link href={"/"}>
                            <h1 className="leading-normal tracking-wider text-[36px] md:text-[44px]">
                                {"<PB/>"}
                            </h1>
                        </Link>
                    </motion.div>

                    {/* links */}
                    <ul className="flex items-center gap-3 md:gap-6 xl:gap-8">
                        {navLinks.map((link, idx) => {
                            const isActive = pathname === link.href;
                            return (
                                <motion.li
                                    key={link.id}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.6,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    whileTap={{ scale: 0.8 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 19,
                                    }}
                                    className={`relative capitalize text-sm nav-link ${isActive ? "nav-link-active" : ""}`}
                                >
                                    <Link href={link.href}>
                                        <ParaText className="font-medium">
                                            {link.title}
                                        </ParaText>
                                    </Link>
                                </motion.li>
                            );
                        })}
                    </ul>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="font-light text-xs sm:text-sm text-pb-white/40"
                    >
                        &copy; 2026 All rights reserved by{" "}
                        <Link
                            href={"/"}
                            className="font-medium text-sm sm:text-base text-pb-white hover:text-pb-theme-primary duration-500 transition-colors"
                        >
                            PolokBanik
                        </Link>
                    </motion.p>
                </div>
            </Container>
        </footer>
    );
}
