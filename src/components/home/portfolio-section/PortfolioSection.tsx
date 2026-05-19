"use client";

import React, { useState } from "react";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import ParaText from "@/components/shared/texts-type/ParaText";
import PortfolioCard from "./components/shared/PortfolioCard";
import PortfolioCategories from "./components/shared/PortfolioCategories";

const portfolioCategories = [
    {
        id: 1,
        name: "All",
    },
    {
        id: 2,
        name: "UX/UI",
    },
    {
        id: 3,
        name: "Branding",
    },
    {
        id: 4,
        name: "Apps",
    },
];

export default function PortfolioSection() {
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <section className="bg-pb-theme-accent-1 w-full min-h-[70vh] relative overflow-hidden">
            {/* blur blob effect */}
            <div className="w-[120px] sm:w-[240px] md:w-[326px] lg:w-[452px] aspect-square bg-pb-theme-primary md:bg-pb-theme-primary/40 rounded-full blur-[150px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse pointer-events-none" />

            {/* main content */}
            <Container className="py-12 md:py-20 lg:py-26">
                <div>
                    {/* section header content */}
                    <div className="text-center space-y-1 sm:space-y-2">
                        <SectionTitle text="My Recent Works" />
                        <ParaText>
                            Some of the noteworthy projects I have built:
                        </ParaText>
                    </div>

                    {/* show project */}
                    <div className="mt-10">
                        {/* category filters */}
                        <div className="flex items-center justify-between bg-pb-body w-full max-w-[400px] mx-auto rounded-full overflow-hidden duration-500 transition-all">
                            {portfolioCategories.map((category) => (
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                <PortfolioCard />
                                <PortfolioCard />
                                <PortfolioCard />
                                <PortfolioCard />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
