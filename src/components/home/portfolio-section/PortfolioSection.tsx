"use client";

import React, { useState } from "react";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import ParaText from "@/components/shared/texts-type/ParaText";
import PortfolioCard from "./components/shared/PortfolioCard";
import PortfolioCategories from "./components/shared/PortfolioCategories";
import { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export interface PortfolioProps {
    id: number;
    title: string;
    description: string;
    categoryType: string;
    imageUrl: StaticImageData | string;
    href: string;
    projectTools: string[];
}

interface PortfolioSectionProps {
    portfolioCategoriesData: {
        id: number;
        categoryName: string;
        categoryType: string;
    }[];

    portfolioData: PortfolioProps[];
}

export default function PortfolioSection({
    portfolioCategoriesData,
    portfolioData,
}: PortfolioSectionProps) {
    const [activeCategory, setActiveCategory] = useState("all");
    const pathname = usePathname();

    // display projects
    const displayProjects =
        pathname === "/" ? portfolioData.slice(0, 4) : portfolioData;

    // filter projects
    const filteredProjects =
        activeCategory === "all"
            ? displayProjects
            : displayProjects.filter(
                  (project) => project.categoryType === activeCategory,
              );

    return (
        <section className="bg-pb-theme-accent-1 w-full min-h-[70vh] relative overflow-hidden">
            {/* blur blob effect */}
            <div className="w-[120px] sm:w-[240px] md:w-[326px] lg:w-[452px] aspect-square bg-pb-theme-primary md:bg-pb-theme-primary/40 rounded-full blur-[150px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse pointer-events-none" />

            {/* main content */}
            <Container className="py-12 md:py-20 lg:py-26">
                <div>
                    {/* header content */}
                    <div className="text-center space-y-1 sm:space-y-2 max-w-[675px] mx-auto ">
                        <SectionTitle text="My Recent Works" />
                        <ParaText>
                            A collection of projects that highlight my passion
                            for frontend development, combining modern design,
                            smooth interactions, and responsive user
                            experiences.
                        </ParaText>
                    </div>

                    {/* show project */}
                    <div className="mt-10">
                        {/* category filters */}
                        <div className="flex items-center justify-between bg-pb-body w-full max-w-[480px] mx-auto rounded-full overflow-hidden duration-500 transition-all">
                            {portfolioCategoriesData.map((category) => (
                                <PortfolioCategories
                                    key={category.id}
                                    category={category}
                                    activeCategory={activeCategory}
                                    setActiveCategory={setActiveCategory}
                                />
                            ))}
                        </div>

                        {/* portfolio cards */}
                        <div className="mt-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    layout
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-6 md:gap-10"
                                >
                                    {filteredProjects.map((project) => (
                                        <motion.div
                                            key={project.id}
                                            layout
                                            initial={{
                                                opacity: 0,
                                                scale: 0.85,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                scale: 0.85,
                                            }}
                                            transition={{
                                                duration: 0.4,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <PortfolioCard project={project} />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
