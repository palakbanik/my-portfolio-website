"use client";

import React, { useEffect, useState } from "react";
import Container from "@/components/shared/Container";
import { navLinks } from "@/data/data";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import { TbMenu3 } from "react-icons/tb";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeScale, fadeUp } from "@/animation/animations";

export default function HeaderSection() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastY, setLastY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            setScrolled(currentY > 50);

            if (currentY > lastY && currentY > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            setLastY(currentY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastY]);

    return (
        <header
            className={`w-full fixed top-0 left-0 z-999 transition-all duration-500 ${
                scrolled
                    ? "bg-pb-body backdrop-blur-md shadow-[0_4px_30px_rgba(135,80,247,0.2)]"
                    : "bg-transparent"
            }
        ${hidden ? "translate-y-[-120%]" : "translate-y-0"}`}
        >
            <Container>
                <div className="relative">
                    <div className="flex items-center justify-between py-2.5 sm:py-4">
                        {/* logo */}
                        <div className="font-luckiest-guy select-none">
                            <Link href={"/"}>
                                <motion.h1
                                    variants={fadeScale}
                                    initial="hidden"
                                    animate="visible"
                                    viewport={{ once: true }}
                                    className="leading-normal tracking-wider text-[36px] md:text-4xl"
                                >
                                    {"<PB/>"}
                                </motion.h1>
                            </Link>
                        </div>

                        {/* nav links */}
                        <div className="flex items-center gap-4 md:gap-10">
                            <ul className="hidden md:flex items-center md:gap-6 xl:gap-10">
                                {navLinks.map((link, idx) => {
                                    const { id, href, title } = link;
                                    const isActive = pathname === href;
                                    return (
                                        <motion.li
                                            key={id}
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            custom={idx * 0.2}
                                            viewport={{ once: true }}
                                            className={`relative capitalize text-sm nav-link ${isActive ? "nav-link-active" : ""}`}
                                        >
                                            <Link href={href}>{title}</Link>
                                        </motion.li>
                                    );
                                })}
                            </ul>

                            {/* button */}
                            <Link href={"/"}>
                                <motion.div
                                    variants={fadeScale}
                                    initial="hidden"
                                    animate="visible"
                                    viewport={{ once: true }}
                                >
                                    <Button className="lg:px-8 lg:py-3">
                                        hire me!
                                    </Button>
                                </motion.div>
                            </Link>

                            {/* hamburger button */}
                            <motion.button
                                type="button"
                                onClick={() => setMenuOpen(!menuOpen)}
                                variants={fadeScale}
                                initial="hidden"
                                animate="visible"
                                viewport={{ once: true }}
                                className="inline md:hidden"
                            >
                                {menuOpen ? (
                                    <MdOutlineCloseFullscreen size={34} />
                                ) : (
                                    <TbMenu3 size={34} />
                                )}
                            </motion.button>
                        </div>
                    </div>
                    {/* mobile links */}
                    <div
                        className={`md:hidden min-h-[60vh] w-full bg-pb-theme-secondary/30 backdrop-blur-2xl rounded-lg fixed top-20 ${menuOpen ? "left-0" : "left-[-120%]"} duration-500 transition-all`}
                    >
                        <ul className="md:hidden flex flex-col items-start gap-6 px-7 py-10">
                            {navLinks.map((link, idx) => {
                                const { id, href, title } = link;
                                const isActive = pathname === href;
                                return (
                                    <motion.li
                                        key={id}
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        custom={idx * 0.2}
                                        viewport={{ once: true }}
                                        onClick={() => setMenuOpen(false)}
                                        className={`relative uppercase nav-link text-base ${isActive ? "nav-link-active" : ""}`}
                                    >
                                        <Link href={href}>{title}</Link>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </Container>
        </header>
    );
}
