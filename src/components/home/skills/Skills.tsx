import React from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import { skillsData } from "@/data/data";
import SkillCard from "./SkillCard";
import Container from "@/components/shared/Container";

export default function SkillsSections() {
    return (
        <section className="w-full bg-pb-theme-accent-1">
            <Container className="lg:py-[120px]">
                <div className="space-y-3">
                    <SectionTitle text="my skills" />
                    <p className="text-center lg:text-base">
                        The skills, tools and technologies I am really good at:
                    </p>
                </div>

                <div className="lg:mt-10 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5 items-center">
                    {skillsData.map((skill) => (
                        <SkillCard key={skill.id} skill={skill} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
