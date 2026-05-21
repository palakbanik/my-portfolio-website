import React from "react";
import Image from "next/image";
import dummy from "@/assets/portfolio-projects/dummy.jpg";
import SubText from "@/components/shared/texts-type/SubText";
import ParaText from "@/components/shared/texts-type/ParaText";
import { IoArrowRedoOutline } from "react-icons/io5";
import { RxArrowTopRight } from "react-icons/rx";
import { PortfolioProps } from "../../PortfolioSection";

export default function PortfolioCard({
    project,
}: {
    project: PortfolioProps;
}) {
    const { imageUrl, title, description, href, projectTools } = project;
    return (
        <div className="group perspective-[1000px]">
            <div className="relative h-full w-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* front side */}
                <div className="backface-hidden bg-pb-theme-accent-2 rounded-[10px] overflow-hidden backdrop-blur-2xl">
                    <div className="bg-pb-theme-accent-2 px-[36px] pt-[36px] ">
                        <Image
                            src={imageUrl}
                            alt="Dummy Image"
                            priority
                            className="w-full max-w-[550px] h-auto object-cover object-center select-none rounded-[10px]"
                        />
                    </div>

                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[92%] min-h-20 rounded-xl background-gradient flex items-center justify-between px-6">
                            <SubText className="lg:text-2xl">{title}</SubText>

                            <IoArrowRedoOutline className="w-6 h-6" />
                        </div>
                    </a>
                </div>

                {/* back side */}
                <div className="hidden absolute inset-0 rotate-y-180 backface-hidden rounded-[10px] overflow-hidden bg-linear-to-b from-pb-theme-primary to-pb-theme-secondary p-8 md:flex flex-col justify-center items-center text-center">
                    <SubText>Project Details</SubText>

                    {/* project description */}
                    <ParaText className="mt-3 text-justify">
                        {description}
                    </ParaText>

                    {/* project tools used */}
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {projectTools.map((tool, idx) => (
                            <span
                                key={idx}
                                className="bg-pb-theme-primary text-pb-white text-sm font-medium py-1 px-3 rounded-full"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>

                    {/* visit website link */}
                    <a
                        href={href}
                        target="_blank"
                        className="group/button relative inline-flex cursor-pointer mt-10"
                    >
                        <div className="relative border-2 border-pb-theme-primary text-pb-theme-primary hover:text-pb-white p-2.5 rounded-full group-hover/button:-translate-y-1 overflow-hidden transition-all duration-300 ease-in-out">
                            <span className="absolute inset-0 scale-0 group-hover/button:scale-100 bg-pb-theme-primary rounded-full transition-all duration-300 ease-in-out" />

                            <RxArrowTopRight
                                className="relative z-10"
                                size={26}
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
