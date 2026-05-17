import React from "react";

const statsData = [
    {
        id: 1,
        value: "0.6",
        title: "Years of Experience",
    },
    {
        id: 2,
        value: "10+",
        title: "Project Completed",
    },
    {
        id: 3,
        value: "05",
        title: "Happy Clients",
    },
    {
        id: 4,
        value: "0.6",
        title: "Years of Experience",
    },
];

export default function StatsSection() {
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-between  gap-6 py-14 lg:py-20">
                {statsData.map((stat) => (
                    <div
                        key={stat.id}
                        className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-start text-pb-white/90 gap-3 lg:gap-[15px]"
                    >
                        <h1 className="text-[45px] sm:text-[55px] md:text-[64px] leading-normal font-medium">
                            {stat.value}
                        </h1>

                        <p className="text-[16px] leading-normal tracking-normal text-pb-white/80 max-w-30">
                            {stat.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
