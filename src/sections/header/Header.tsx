import React from "react";
import Container from "@/components/shared/Container";
import { navLinks } from "@/data/data";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function HeaderSection() {
    return (
        <header className="w-full fixed top-0 left-0 z-999">
            <Container>
                <div className="flex items-center justify-between py-7">
                    {/* logo */}
                    <div className="font-luckiest-guy select-none">
                        <Link href={"/"}>
                            <h1 className="leading-normal tracking-wider text-4xl">
                                {"<PB/>"}
                            </h1>
                        </Link>
                    </div>

                    {/* nav links */}
                    <div className="flex items-center gap-10">
                        <ul className="flex items-center lg:gap-10">
                            {navLinks.map((link) => (
                                <Link href={link.href} key={link.id}>
                                    <li>{link.title}</li>
                                </Link>
                            ))}
                        </ul>

                        {/* button */}
                        <Link href={"/"}>
                            <Button className="lg:px-8 lg:py-3 ">
                                hire me!
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
}
