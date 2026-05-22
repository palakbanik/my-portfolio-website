"use client";

import React from "react";
import Container from "@/components/shared/Container";
import { footerLinks } from "@/data/data";
import Link from "next/link";
import ParaText from "@/components/shared/texts-type/ParaText";
import { usePathname } from "next/navigation";

export default function FooterSection() {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <footer
            className={`w-full ${pathname === "/" ? "bg-pb-theme-accent-1" : "bg-pb-theme-secondary"}`}
        >
            <Container className="pt-12 sm:pt-14 pb-6 ">
                <div className="flex flex-col items-center justify-center gap-3 lg:gap-5">
                    {/* logo */}
                    <div className="font-luckiest-guy select-none">
                        <Link href={"/"}>
                            <h1 className="leading-normal tracking-wider text-[36px] md:text-[44px]">
                                {"<PB/>"}
                            </h1>
                        </Link>
                    </div>

                    {/* links */}
                    <ul className="flex items-center gap-3 md:gap-6 xl:gap-8">
                        {footerLinks.map((link) => (
                            <Link
                                href={link.href}
                                key={link.id}
                                className="relative capitalize text-sm nav-link"
                            >
                                <li>
                                    <ParaText className="font-medium">
                                        {link.title}
                                    </ParaText>
                                </li>
                            </Link>
                        ))}
                    </ul>

                    <p className="font-light text-sm text-pb-white/40">
                        &copy; 2026 All rights reserved by{" "}
                        <Link
                            href={"/"}
                            className="font-medium text-base text-pb-white hover:text-pb-theme-primary duration-500 transition-colors"
                        >
                            PolokBanik
                        </Link>
                    </p>
                </div>
            </Container>
        </footer>
    );
}
