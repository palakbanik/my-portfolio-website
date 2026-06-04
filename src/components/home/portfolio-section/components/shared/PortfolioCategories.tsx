"use client";

import React from "react";
import { motion } from "framer-motion";
import { PortfolioCategoriesProps } from "@/types";

export default function PortfolioCategories({
    category,
    activeCategory,
    setActiveCategory,
}: PortfolioCategoriesProps) {
    const { categoryName, categoryType } = category;

    return (
        <button
            type="button"
            onClick={() => setActiveCategory(categoryType)}
            className={`relative z-10 flex-1 text-[13px] sm:text-[16px] font-normal lg:leading-[24px] px-3 py-3 sm:px-[26px] sm:py-[14px] rounded-full cursor-pointer`}
        >
            {categoryName}

            {activeCategory === categoryType && (
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
