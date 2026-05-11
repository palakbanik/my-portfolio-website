"use client";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import ParaText from "@/components/shared/texts-type/ParaText";
import ArticleText from "@/components/shared/texts-type/ArticleText";
import { IoIosArrowRoundForward } from "react-icons/io";
import SubText from "@/components/shared/texts-type/SubText";
import { serviceSectionData } from "@/data/data";

export default function StatsSection() {
    return (
        <section>
            <Container className="py-10 md:py-20 lg:py-26">
                {/* section heading */}
                <div className="space-y-2">
                    <SectionTitle text="My Quality Services" />
                    <ParaText className="max-w-150 mx-auto text-center">
                        We put your ideas and thus your wishes in the form of a
                        unique web project that inspires you and you customers.
                    </ParaText>
                </div>

                {/* services content */}
                <div className="lg:mt-8">
                    {serviceSectionData.map((service) => {
                        const { id, title, description } = service;
                        return (
                            <div
                                key={service.id}
                                className={`flex items-center justify-center py-6 border-b border-pb-theme-secondary cursor-default group relative overflow-hidden`}
                            >
                                {/* bg animation */}
                                <div className="absolute inset-0 bg-linear-to-r from-pb-theme-primary to-pb-theme-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out -z-10 pointer-events-none" />

                                {/* service type & number */}
                                <div className="flex items-center md:gap-[20px] w-[calc(40%-10px)] ">
                                    <span className="lg:text-xl font-bold text-pb-theme-primary group-hover:text-pb-white transition-colors duration-500 ease">
                                        {id}
                                    </span>
                                    <SubText className="lg:text-[30px] font-bold capitalize leading-normal lg:leading-[1.2] text-pb-white">
                                        {title}
                                    </SubText>
                                </div>

                                {/* article */}
                                <div className="w-[calc(50%-40px)]">
                                    <ArticleText>{description}</ArticleText>
                                </div>

                                {/* icon */}
                                <span>
                                    <IoIosArrowRoundForward className="w-12 h-12 ml-10 rotate-45 group-hover:-rotate-45 ease-in-out transition-all duration-500 text-pb-theme-primary group-hover:text-pb-white" />
                                </span>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
