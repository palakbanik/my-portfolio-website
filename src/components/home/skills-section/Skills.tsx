"use client";
import React from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import { skillsData } from "@/data/data";
import SkillCard from "./SkillCard";
import Container from "@/components/shared/Container";
import ParaText from "@/components/shared/texts-type/ParaText";
import { fadeScale } from "@/animation/animations";
import { motion } from "framer-motion";

export default function SkillsSections() {
    return (
        <section className="w-full bg-pb-theme-accent-1">
            <Container className="py-12 md:py-20 lg:py-[120px]">
                <motion.div
                    variants={fadeScale}
                    initial="hidden"
                    whileInView="visible"
                    className="space-y-2 sm:space-y-3"
                >
                    <SectionTitle text="my skills" />
                    <ParaText className="text-center max-w-[675px] mx-auto">
                        The technologies, tools, and frameworks I use to create
                        modern, responsive, and user-focused web applications.
                    </ParaText>
                </motion.div>

                <div className="mt-6 lg:mt-10 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5 items-center">
                    {skillsData.map((skill, idx) => (
                        <div key={skill.id} ><SkillCard skill={skill} /></div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
