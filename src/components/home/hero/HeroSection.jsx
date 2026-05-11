import React from "react";
import Container from "@/components/shared/Container";
import Button from "@/components/ui/Button";
import { HiOutlineDownload } from "react-icons/hi";
import Image from "next/image";

// social icons

import palakProfile from "@/public/palak-profile.jpg";
import { socialLinks } from "@/data/data";
import Link from "next/link";
import ServicesSection from "../StatsSection/StatsSection";

export default function HeroSection() {
    return (
        <section className="min-h-screen bg-pb-theme-accent-1 relative overflow-x-hidden">
            {/* hi text */}
            <h1 className="text-outline font-russo-one text-[200px] lg:text-[350px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
                HI
            </h1>

            {/* blob */}
            <div className="w-[322px] h-[308px] bg-pb-theme-primary/40 rounded-full blur-[150px] absolute -right-20 -top-20 animate-pulse" />
            {/* blob */}
            <div className="w-[322px] h-[308px] bg-pb-theme-primary/30 rounded-full blur-[150px] absolute top-1/2 left-1/2 animate-pulse" />

            <Container className="pt-30 md:pt-40 ">
                {/* main content */}
                <div className="flex items-center justify-between lg:gap-30 xl:gap-40 relative z-10">
                    {/* left text content */}
                    <div className="flex-1 w-full max-w-[580px]">
                        <div className="lg:space-y-3">
                            {/* articles */}
                            <h3 className="lg:text-4xl font-semibold">
                                I am Palak
                            </h3>
                            <h2 className="text-gradient lg:text-[65px] font-bold leading-none capitalize ">
                                frontend web developer.
                            </h2>
                            <article className="text-sm md:text-base tracking-wide leading-normal lg:leading-relaxed">
                                I&apos;m a passionate Frontend Development
                                currently working with (Next.js) to build
                                modern, interactive, and user-friendly web
                                applications. While my primary focus right now
                                is on mastering frontend development, I&apos;m
                                also preparing myself to become a Full Stack
                                Developer in the future. 😊
                            </article>
                        </div>

                        {/* social links */}
                        <div className="lg:mt-10 flex items-center gap-6">
                            <Button variant="outline" Icon={HiOutlineDownload}>
                                Download CV
                            </Button>

                            <ul className="flex items-center gap-6">
                                {socialLinks.map((socialLink) => {
                                    const { id, href, icon } = socialLink;
                                    const Icon = icon;

                                    return (
                                        <Link
                                            href={href}
                                            key={id}
                                            className="group relative"
                                        >
                                            <li className="border border-pb-theme-primary text-pb-theme-primary hover:text-pb-white p-2.5 rounded-full group-hover:-translate-y-1 overflow-hidden transition-all duration-300 ease-in-out">
                                                <span className="w-full h-full absolute inset-0 scale-0 group-hover:scale-100 bg-pb-theme-primary  rounded-full transition-all duration-300 ease-in-out" />
                                                <Icon className="relative z-10" />
                                            </li>
                                        </Link>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* right img content */}
                    <div className="relative border-2 border-pb-theme-primary/50 hover:border-pb-theme-primary duration-300 inline-block rounded-4xl transition-all rotate-6 hover:rotate-0 brightness-75 lg:mr-7">
                        <Image
                            src={palakProfile}
                            alt="palak's profile"
                            width={437}
                            height={475}
                            priority
                            className="object-cover w-[437px] h-[500px] rounded-4xl"
                        />
                    </div>
                </div>

                {/* services */}
                <ServicesSection />
            </Container>
        </section>
    );
}
