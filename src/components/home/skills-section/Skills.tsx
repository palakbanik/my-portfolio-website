"use client";

import React from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import { skillsData } from "@/data/data";
import SkillCard from "./SkillCard";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import { springScaleUp } from "@/animation/animations";

export default function SkillsSections() {
    return (
        <section className="w-full bg-pb-theme-accent-1">
            <Container className="py-12 md:py-20 lg:py-[120px]">
                <SectionTitle
                    sectionBadge="skills"
                    sectionTitle="My Favorite Stakes"
                />

                <div className="mt-6 lg:mt-10 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5 items-center">
                    {skillsData.map((skill, idx) => (
                        <motion.div
                            key={skill.id}
                            variants={springScaleUp}
                            initial="hidden"
                            whileInView="visible"
                            custom={idx * 0.18}
                            viewport={{ once: true }}
                            drag
                            dragConstraints={{
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                            }}
                            dragElastic={1}
                            whileDrag={{ cursor: "grabbing" }}
                            style={{ cursor: "grab" }}
                        >
                            <SkillCard skill={skill} />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
