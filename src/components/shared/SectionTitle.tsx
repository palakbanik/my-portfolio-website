"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { springScaleUp } from "@/animation/animations";

export default function SectionTitle({
    sectionBadge,
    sectionTitle,
    badgeClassName,
    titleClassName,
    containerClassName,
}: {
    sectionBadge?: string;
    sectionTitle?: string;
    badgeClassName?: string;
    titleClassName?: string;
    containerClassName?: string;
}) {
    return (
        <motion.div
            variants={springScaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.6,
            }}
            className={cn(
                "space-y-1 sm:space-y-2 flex flex-col items-center text-center",
                containerClassName,
            )}
        >
            {sectionBadge && (
                <span
                    className={cn(
                        "bg-pb-theme-secondary inline-block font-[500] text-[12px] uppercase px-[20px] py-[10px] rounded-full",
                        badgeClassName,
                    )}
                >
                    {sectionBadge}
                </span>
            )}
            <h1
                className={cn(
                    "text-gradient font-bold text-[30px] lg:text-[45px] capitalize",
                    titleClassName,
                )}
            >
                {sectionTitle}
            </h1>
        </motion.div>
    );
}
