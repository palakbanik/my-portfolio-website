import Container from "@/components/shared/Container";
import { footerLinks } from "@/data/data";
import Link from "next/link";
import React from "react";

export default function FooterSection() {
    return (
        <footer className="w-full bg-pb-theme-accent-1 ">
            <Container className="lg:pt-14 lg:pb-6 ">
                <div className="flex flex-col items-center justify-center lg:gap-5">
                    {/* logo */}
                    <div className="font-luckiest-guy select-none">
                        <Link href={"/"}>
                            <h1 className="leading-normal tracking-wider text-[36px] md:text-[44px]">
                                {"<PB/>"}
                            </h1>
                        </Link>
                    </div>

                    {/* links */}
                    <ul className="hidden md:flex items-center md:gap-6 xl:gap-8">
                        {footerLinks.map((link) => (
                            <Link
                                href={link.href}
                                key={link.id}
                                className={`relative capitalize text-sm nav-link`}
                            >
                                <li>{link.title}</li>
                            </Link>
                        ))}
                    </ul>

                    <p className="font-light text-sm text-pb-white/40">
                        &copy; 2026 All rights reserved by{" "}
                        <Link
                            href={"/"}
                            className="font-medium text-base text-pb-white hover:text-pb-theme-primary duration-500 transition-colors"
                        >
                            PalakBanik
                        </Link>
                    </p>
                </div>
            </Container>
        </footer>
    );
}
