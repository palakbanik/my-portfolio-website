import React from "react";
import Image from "next/image";
import dummy from "@/assets/portfolio-projects/dummy.jpg";
import SubText from "@/components/shared/texts-type/SubText";
import ParaText from "@/components/shared/texts-type/ParaText";
import { IoArrowRedoOutline } from "react-icons/io5";
import { TiArrowLeftOutline } from "react-icons/ti";
import { CgArrowsExpandUpLeft } from "react-icons/cg";
import { HiArrowUpRight } from "react-icons/hi2";
import { ImArrowDownRight2 } from "react-icons/im";
import { RxArrowTopRight } from "react-icons/rx";

export default function PortfolioCard() {
    return (
        <div className="group perspective-[1000px]">
            <div className="relative h-full w-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* front side */}
                <div className="backface-hidden bg-pb-theme-accent-2 rounded-[10px] overflow-hidden backdrop-blur-2xl">
                    <div className="bg-pb-theme-accent-2 px-[36px] pt-[36px] ">
                        <Image
                            src={dummy}
                            alt="Dummy Image"
                            priority
                            className="w-full max-w-[550px] h-auto object-cover object-center select-none rounded-[10px]"
                        />
                    </div>

                    <a href={"/"} target="_blank" rel="noopener noreferrer">
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[92%] min-h-20 rounded-xl background-gradient flex items-center justify-between px-6">
                            <SubText className="lg:text-2xl">New Age</SubText>

                            <IoArrowRedoOutline className="w-6 h-6" />
                        </div>
                    </a>
                </div>

                {/* back side */}
                <div className="hidden absolute inset-0 rotate-y-180 backface-hidden rounded-[10px] overflow-hidden bg-linear-to-b from-pb-theme-primary to-pb-theme-secondary p-8 md:flex flex-col justify-center items-center text-center">
                    <SubText>Project Details</SubText>

                    {/* project description */}
                    <ParaText className="mt-3 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui quae, provident sapiente aperiam eaque autem
                        distinctio sunt quasi suscipit laborum ab soluta, nulla
                        laudantium consequatur recusandae ad odit magnam
                        nesciunt. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ut totam aspernatur, unde deserunt
                        tenetur suscipit asperiores at optio omnis error?
                    </ParaText>

                    {/* project tools used */}
                    <div></div>

                    {/* visit website link */}
                    <a
                        href="/"
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
