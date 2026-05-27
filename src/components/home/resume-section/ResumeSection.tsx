"use client";

import Container from "@/components/shared/Container";
import ParaText from "@/components/shared/texts-type/ParaText";
import SubText from "@/components/shared/texts-type/SubText";
import { IconType } from "react-icons";
import { SiOpenbadges } from "react-icons/si";
import { SlGraduation } from "react-icons/sl";
import { motion } from "framer-motion";
import { fadeUp } from "@/animation/animations";

const icon: Record<string, IconType> = {
    SiOpenbadges,
    SlGraduation,
};

interface ResumeItemProps {
    id: number;
    period: string;
    title: string;
    subtitle: string;
    featured?: boolean;
}

interface ResumeSectionProps {
    resumeData: {
        id: number;
        icon: string;
        heading: string;
        items: ResumeItemProps[];
    }[];
}

export default function ResumeSection({ resumeData }: ResumeSectionProps) {
    return (
        <section>
            <Container className="py-12 md:py-20 lg:py-26">
                <div className="grid gap-10 sm:grid-cols-2 lg:gap-16">
                    {resumeData.map((col, idx) => {
                        const Icon = icon[col.icon];
                        return (
                            <motion.div
                                key={col.id}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                custom={idx * 0.3}
                                // viewport={{
                                //     once: true,
                                //     amount: 0.6,
                                // }}
                            >
                                {/* title */}
                                <div className="flex items-center gap-[15px]">
                                    <Icon className="text-[30px] md:text-[45px] text-pb-theme-primary" />
                                    <h2 className="text-[30px] sm:text-[35px] md:text-[45px] font-bold leading-[1.2] tracking-[-0.02em] text-gradient">
                                        {col.heading}
                                    </h2>
                                </div>

                                <div className="mt-6 md:mt-10 space-y-5 md:space-y-7">
                                    {col.items.map((item) => (
                                        <div
                                            key={item.id}
                                            className="rounded-[26px] bg-pb-theme-accent-2 px-5 py-3 md:px-6 md:py-5 relative overflow-hidden group"
                                        >
                                            <div className="h-full w-full bg-linear-to-r from-pb-theme-primary to-pb-theme-secondary absolute top-0 left-0 pointer-events-none opacity-80 rounded-[26px] -translate-x-full group-hover:translate-x-0 duration-500 transition ease" />

                                            <div className="relative z-10 space-y-1 sm:space-y-2">
                                                <h5 className="text-[15px] md:text-[20px] font-extrabold text-pb-theme-primary leading-normal group-hover:text-pb-white transition-colors duration-500 ease">
                                                    {item.period}
                                                </h5>

                                                <SubText>{item.title}</SubText>

                                                <ParaText className="sm:text-[16px] text-pb-white/80">
                                                    {item.subtitle}
                                                </ParaText>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
