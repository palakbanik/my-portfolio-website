"use client";

import React from "react";
import ParaText from "@/components/shared/texts-type/ParaText";
import { motion } from "framer-motion";
interface StatsSectionProps {
    data: {
        id: number;
        value: string;
        title: string;
    }[];
}

export default function StatsSection({ data }: StatsSectionProps) {
    return (
        <div
            aria-label="Stats Overview"
            className="grid grid-cols-2 md:grid-cols-4 items-center justify-between  gap-6 py-14 lg:py-20"
        >
            {data.map((stat, idx) => (
                <motion.div
                    key={stat.id}
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, delay: idx * 0.2 },
                    }}
                    viewport={{ once: true, amount: 1 }}
                    className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-start text-pb-white/90 gap-3 lg:gap-[15px]"
                >
                    <span className="text-[45px] sm:text-[55px] md:text-[64px] leading-normal font-medium">
                        {stat.value}
                    </span>

                    <ParaText className="max-w-30 text-pb-white/80">
                        {stat.title}
                    </ParaText>
                </motion.div>
            ))}
        </div>
    );
}
