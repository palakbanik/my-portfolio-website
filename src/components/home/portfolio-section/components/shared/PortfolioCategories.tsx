"use client";

import React from "react";
import { motion } from "framer-motion";

interface PortfolioCategoriesProps {
    category: {
        id: number;
        categoryName: string;
        categoryType: string;
    };
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

export default function PortfolioCategories({
    category,
    activeCategory,
    setActiveCategory,
}: PortfolioCategoriesProps) {
    const { categoryName } = category;

    return (
        <button
            type="button"
            onClick={() => setActiveCategory(categoryName)}
            className={`relative z-10 flex-1 lg:text-[16px] font-normal lg:leading-[24px] px-[26px] py-[14px] rounded-full cursor-pointer`}
        >
            {categoryName}

            {activeCategory === categoryName && (
                <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 background-gradient rounded-full -z-10 outline-none"
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
