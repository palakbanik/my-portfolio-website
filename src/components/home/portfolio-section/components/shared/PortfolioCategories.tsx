"use client";

import React from "react";
import { motion } from "framer-motion";

interface PortfolioCategoriesProps {
    category: {
        id: number;
        name: string;
    };
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

export default function PortfolioCategories({
    category,
    activeCategory,
    setActiveCategory,
}: PortfolioCategoriesProps) {
    const { name } = category;

    return (
        <button
            type="button"
            onClick={() => setActiveCategory(name)}
            className={`relative z-10 flex-1 lg:text-[16px] font-normal lg:leading-[24px] px-[26px] py-[14px] rounded-full cursor-pointer`}
        >
            {name}

            {activeCategory === name && (
                <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-linear-to-r from-pb-theme-primary to-pb-theme-secondary rounded-full -z-10"
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 50,
                    }}
                />
            )}
        </button>
    );
}
