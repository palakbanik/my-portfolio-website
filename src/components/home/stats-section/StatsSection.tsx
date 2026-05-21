import React from "react";
import { statsData } from "@/data/data";
import ParaText from "@/components/shared/texts-type/ParaText";

export default function StatsSection() {
    return (
        <div
            aria-label="Stats Overview"
            className="grid grid-cols-2 md:grid-cols-4 items-center justify-between  gap-6 py-14 lg:py-20"
        >
            {statsData.map((stat) => (
                <div
                    key={stat.id}
                    className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-start text-pb-white/90 gap-3 lg:gap-[15px]"
                >
                    <span className="text-[45px] sm:text-[55px] md:text-[64px] leading-normal font-medium">
                        {stat.value}
                    </span>

                    <ParaText className="max-w-30 text-pb-white/80">
                        {stat.title}
                    </ParaText>
                </div>
            ))}
        </div>
    );
}
