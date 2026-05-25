"use client";

import React from "react";
import Container from "@/components/shared/Container";
import Button from "@/components/ui/Button";
import { HiOutlineDownload } from "react-icons/hi";
import Image from "next/image";
import polokbanik from "@/assets/polok-profile.png";
import { socialLinks, statsData } from "@/data/data";
import ArticleText from "@/components/shared/texts-type/ArticleText";
import StatsSection from "../stats-section/StatsSection";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { fadeScaleHero, fadeUp } from "@/animation/animations";

export default function HeroSection() {
    // fade in animation variant

    return (
        <section
            aria-label="Hero Section"
            className="min-h-screen bg-pb-theme-accent-1 relative overflow-x-hidden"
        >
            {/* hi text */}
            <motion.span
                initial={{ opacity: 0, scale: 0.1 }}
                animate={{ opacity: 1, scale: [1, 1.04, 1] }}
                transition={{
                    opacity: {
                        duration: 0.3,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                    },
                    scale: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeOut" as const,
                    },
                }}
                aria-hidden="true"
                className="hidden md:block text-outline font-russo-one text-[200px] lg:text-[350px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                HI
            </motion.span>

            {/* blob */}
            <div className="w-[322px] h-[308px] bg-pb-theme-primary/50 rounded-full blur-[150px] absolute -right-20 -top-20 animate-pulse" />
            {/* blob */}
            <div className="w-[322px] h-[308px] bg-pb-theme-primary/40 rounded-full blur-[150px] absolute top-1/4  md:top-1/2 md:left-1/2 animate-pulse" />

            <Container className="pt-26 md:pt-40 ">
                {/* main content */}
                <div className="flex items-center justify-between gap-10 lg:gap-30 xl:gap-40 relative z-10">
                    {/* left text content */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        className="flex-1 w-full max-w-[580px]"
                    >
                        <div className="space-y-8 sm:space-y-5 md:space-y-3">
                            {/* header text */}
                            <div className="space-y-1 lg:space-y-3">
                                <h1 className="text-[22px] sm:text-[25px] lg:text-4xl font-semibold">
                                    I am Polok
                                </h1>
                                <h2 className="text-gradient text-[35px] sm:text-[38px] lg:text-[65px] font-bold leading-none capitalize ">
                                    front End web{" "}
                                    <span className="inline-block min-w-[320px]">
                                        <Typewriter
                                            words={["developer.", "designer."]}
                                            loop={0}
                                            delaySpeed={1000}
                                            typeSpeed={80}
                                            deleteSpeed={80}
                                            cursor
                                            cursorStyle="_"
                                            cursorBlinking
                                        />
                                    </span>
                                </h2>
                            </div>

                            {/* mobile img content */}
                            <motion.div
                                variants={fadeScaleHero}
                                initial="hidden"
                                whileInView="visible"
                                className="sm:hidden flex items-center justify-center"
                            >
                                <div className="relative border-2 border-pb-theme-primary/50 hover:border-pb-theme-primary duration-300 inline-block rounded-4xl overflow-hidden transition-all rotate-6 hover:rotate-0 brightness-75 lg:mr-7">
                                    <Image
                                        src={polokbanik}
                                        alt="Polok Banik — Frontend Web Developer"
                                        width={1000}
                                        height={1000}
                                        priority
                                        className="object-cover w-[300px] h-[370px]"
                                    />
                                </div>
                            </motion.div>

                            <ArticleText>
                                I&apos;m a passionate Frontend Development
                                currently working with (Next.js) to build
                                modern, interactive, and user-friendly web
                                applications. While my primary focus right now
                                is on mastering frontend development, I&apos;m
                                also preparing myself to become a Full Stack
                                Developer in the future. 😊
                            </ArticleText>
                        </div>

                        {/* social links */}
                        <div className="mt-6 lg:mt-10 flex flex-col lg:flex-row items-start lg:items-center gap-5 md:gap-6">
                            {/* my cv */}
                            <a
                                href={"/cv/polok-banik-frontend-intern.pdf"}
                                download
                                target="_blank"
                                aria-label="Download Polok Banik's CV"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    variant="outline"
                                    Icon={HiOutlineDownload}
                                >
                                    Download CV
                                </Button>
                            </a>

                            <ul className="flex items-center gap-4 lg:gap-6">
                                {socialLinks.map((socialLink) => {
                                    const { id, href, icon, name } = socialLink;
                                    const Icon = icon;

                                    return (
                                        <li
                                            key={id}
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
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </motion.div>

                    {/* desktop right img content */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        custom={0.3}
                    >
                        <div className="hidden relative border-2 border-pb-theme-primary/50 hover:border-2 hover:border-pb-theme-primary duration-300 sm:inline-block rounded-4xl overflow-hidden transition-all rotate-6 hover:rotate-0 brightness-75 lg:mr-7">
                            <Image
                                src={polokbanik}
                                alt="Polok Banik — Frontend Web Developer"
                                width={1000}
                                height={1000}
                                priority
                                className="object-cover w-[300px] h-[390px] md:w-[380px] md:h-[440px] xl:w-[437px] xl:h-[500px] rounded-4xl"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* stats */}
                <StatsSection data={statsData} />
            </Container>
        </section>
    );
}
