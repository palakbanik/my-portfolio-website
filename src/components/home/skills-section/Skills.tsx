"use client";
import React from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import { skillsData } from "@/data/data";
import SkillCard from "./SkillCard";
import Container from "@/components/shared/Container";
import ParaText from "@/components/shared/texts-type/ParaText";
import { motion } from "framer-motion";

export default function SkillsSections() {
    return (
        <section className="w-full bg-pb-theme-accent-1">
            <Container className="py-12 md:py-20 lg:py-[120px]">
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.6,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            type: "spring" as const,
                            duration: 1.2,
                            ease: "easeInOut",
                        },
                    }}
                    viewport={{ once: true, amount: 0.6 }}
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
                        <motion.div
                            key={skill.id}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{ duration: 0.6, delay: idx * 0.16 }}
                            viewport={{ once: true, amount: 0.6 }}
                        >
                            <SkillCard skill={skill} />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
