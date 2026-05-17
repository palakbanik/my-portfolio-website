import React from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import { skillsData } from "@/data/data";
import SkillCard from "./SkillCard";
import Container from "@/components/shared/Container";
import ParaText from "@/components/shared/texts-type/ParaText";

export default function SkillsSections() {
    return (
        <section className="w-full bg-pb-theme-accent-1">
            <Container className="py-12 md:py-20 lg:py-[120px]">
                <div className="space-y-2 sm:space-y-3">
                    <SectionTitle text="my skills" />
                    <ParaText className="text-center e">
                        The skills, tools and technologies I am really good at:
                    </ParaText>
                </div>

                <div className="mt-6 lg:mt-10 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5 items-center">
                    {skillsData.map((skill) => (
                        <SkillCard key={skill.id} skill={skill} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
