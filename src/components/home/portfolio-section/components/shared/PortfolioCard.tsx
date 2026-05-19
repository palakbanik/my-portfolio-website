import Image from "next/image";
import React from "react";
import dummy from "@/assets/portfolio-projects/dummy.jpg";
import SubText from "@/components/shared/texts-type/SubText";
import ParaText from "@/components/shared/texts-type/ParaText";

export default function PortfolioCard() {
    return (
        <div className="relative group rounded-[10px] overflow-hidden">
            <div className="bg-pb-theme-accent-2 px-[36px] pt-[36px] ">
                <Image
                    src={dummy}
                    alt="Dummy Image"
                    priority
                    className="w-full max-w-[548px]"
                />
            </div>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[92%] min-h-24 rounded-xl background-gradient ">
                <SubText>New Age</SubText>

                <ParaText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ParaText>
            </div>
        </div>
    );
}
