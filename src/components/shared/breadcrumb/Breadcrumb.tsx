"use client";

import React from "react";
import { usePathname } from "next/navigation";
import breadcrumbBg from "/breadcrumb-bg.jpg";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import ParaText from "../texts-type/ParaText";
import { motion } from "framer-motion";

export default function Breadcrumb() {
    const pathname = usePathname();

    const segments = pathname.split("/").filter(Boolean);

    const breadcrumbs = [{ label: "Home", href: "/" }];
    let currentPath = "";

    segments.forEach((segment) => {
        currentPath += `/${segment}`;
        const label = segment
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        breadcrumbs.push({ label, href: currentPath });
    });

    const currentPage = breadcrumbs[breadcrumbs.length - 1];

    if (pathname === "/") return null;

    return (
        <div
            style={{
                backgroundImage: `url('/breadcrumb-bg.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="relative w-full h-[200px] md:h-[300px] lg:h-[400px]"
        >
            {/* overlay */}
            <div className="w-full h-full absolute inset-0 pointer-events-none bg-pb-theme-accent-2/70" />

            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.6,
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        type: "spring" as const,
                        duration: 1.2,
                        ease: "easeInOut",
                    },
                }}
                viewport={{ once: true, amount: 0.6 }}
                className="relative z-10 text-center text-pb-white space-y-2 md:space-y-4 max-w-[675px] mx-auto top-1/2 -translate-y-1/2"
            >
                <h2 className="lg:text-[50px] leading-normal sm:leading-[1.2] font-bold">
                    {currentPage.label}
                </h2>

                <div aria-label="Breadcrumb">
                    <div className="flex items-center justify-center">
                        {breadcrumbs.map((crumb, idx) => {
                            const isLast = idx === breadcrumbs.length - 1;
                            return (
                                <ParaText
                                    key={crumb.href}
                                    className="flex items-center"
                                >
                                    {isLast ? (
                                        <span aria-current="page">
                                            {crumb.label}
                                        </span>
                                    ) : (
                                        <Link
                                            href={crumb.href}
                                            className="hover:text-pb-white/50 duration-300 transition-colors"
                                        >
                                            {crumb.label}
                                        </Link>
                                    )}

                                    {!isLast && (
                                        <BsArrowRight className="inline-block mx-2 text-md sm:text-[19px]" />
                                    )}
                                </ParaText>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
