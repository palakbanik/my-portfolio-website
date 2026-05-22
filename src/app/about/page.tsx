import ResumeSection from "@/components/home/resume-section/ResumeSection";
import SkillsSections from "@/components/home/skills-section/Skills";
import StatsSection from "@/components/home/stats-section/StatsSection";
import Container from "@/components/shared/Container";
import { resumeSectionData, statsData } from "@/data/data";
import React from "react";

export default function AboutPage() {
    return (
        <>
            {/* resume section */}
            <ResumeSection resumeData={resumeSectionData} />

            {/* skills section */}
            <SkillsSections />

            {/* stats section */}
            <Container>
                <StatsSection data={statsData} />
            </Container>
        </>
    );
}
