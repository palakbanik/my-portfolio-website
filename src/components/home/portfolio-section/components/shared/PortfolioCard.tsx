import React from "react";
import Image from "next/image";
import dummy from "@/assets/portfolio-projects/dummy.jpg";
import SubText from "@/components/shared/texts-type/SubText";
import ParaText from "@/components/shared/texts-type/ParaText";
import { IoArrowRedoOutline } from "react-icons/io5";

export default function PortfolioCard() {
    return (
        <div className=" group perspective-[1000px]">
            <div className="relative h-full w-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* front side */}
                <div className="bg-pb-theme-accent-2 rounded-[10px] overflow-hidden">
                    <div className="bg-pb-theme-accent-2 px-[36px] pt-[36px] ">
                        <Image
                            src={dummy}
                            alt="Dummy Image"
                            priority
                            className="w-full max-w-[550px] object-cover object-center select-none rounded-[10px]"
                        />
                    </div>

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[92%] min-h-20 rounded-xl background-gradient flex items-center justify-between px-6">
                        <SubText className="lg:text-2xl">New Age</SubText>

                        <IoArrowRedoOutline className="w-6 h-6" />
                    </div>
                </div>

                {/* back side */}
                <div></div>
            </div>
        </div>
    );
}
