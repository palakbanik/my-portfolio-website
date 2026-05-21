"use client";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import ParaText from "@/components/shared/texts-type/ParaText";
import ArticleText from "@/components/shared/texts-type/ArticleText";
import { IoIosArrowRoundForward } from "react-icons/io";
import SubText from "@/components/shared/texts-type/SubText";
import { motion } from "framer-motion";
import { useState } from "react";
interface ServiceSectionProps {
    serviceData: {
        id: number;
        title: string;
        description: string;
    }[];
}

export default function ServicesSection({ serviceData }: ServiceSectionProps) {
    const [activeService, setActiveService] = useState(0);

    return (
        <section aria-label="Services Section">
            <Container className="py-12 md:py-20 lg:py-26">
                {/* section heading */}
                <div className="space-y-2">
                    <SectionTitle text="My Quality Services" />
                    <ParaText className="max-w-150 mx-auto text-center">
                        I put your ideas and thus your wishes in the form of a A
                        unique web project that inspires you and your customers.
                    </ParaText>
                </div>

                {/* services content */}
                <div className="mt-4 lg:mt-8">
                    {serviceData.map((service, idx) => {
                        const { id, title, description } = service;
                        const isActive = activeService === idx;
                        return (
                            <motion.div
                                layout
                                key={service.id}
                                onMouseEnter={() => setActiveService(idx)}
                                className="flex flex-col sm:flex-row items-center md:justify-center p-4 md:py-6 border-b border-pb-theme-secondary cursor-default group relative overflow-hidden gap-3"
                            >
                                {/* bg animation */}
                                {isActive && (
                                    <motion.div
                                        layoutId="service-bg"
                                        className="absolute inset-0 background-gradient -z-10 pointer-events-none"
                                        transition={{
                                            type: "tween",
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                    />
                                )}

                                {/* service type & number */}
                                <div className="flex items-start sm:items-center justify-between md:gap-[20px] w-full sm:w-[calc(40%-10px)]">
                                    <div className="flex items-center gap-[12px] md:gap-[20px] ">
                                        <span
                                            className={`text-[14px] sm:text-[16px] md:text-[20px] font-bold text-pb-theme-primary group-hover:text-pb-white ${isActive ? "text-pb-white" : ""} transition-colors duration-500 ease`}
                                        >
                                            {id < 10 ? "0" + id : id}
                                        </span>
                                        <SubText className="text-[17px] sm:text-[18px] md:text-[23px] lg:text-[30px] font-bold capitalize leading-normal lg:leading-[1.2] text-pb-white">
                                            {title}
                                        </SubText>
                                    </div>

                                    <span className="sm:hidden">
                                        <IoIosArrowRoundForward
                                            className={`w-8 h-8 ml-10 ${isActive ? "rotate-45" : ""} group-hover:-rotate-45 ease-in-out transition-all duration-500 text-pb-theme-primary group-hover:text-pb-white`}
                                        />
                                    </span>
                                </div>

                                {/* article */}
                                <div className="sm:w-[calc(50%-40px)]">
                                    <ArticleText>{description}</ArticleText>
                                </div>

                                {/* icon */}
                                <span className="hidden sm:block">
                                    <IoIosArrowRoundForward
                                        className={`w-12 h-12 ml-10  ${isActive ? "-rotate-45 text-pb-white" : "rotate-45"} ease-in-out transition-all duration-500 text-pb-theme-primary `}
                                    />
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
