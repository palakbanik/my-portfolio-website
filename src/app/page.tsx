import React from "react";

import ResumeSection from "@/components/home/resume-section/ResumeSection";
import ContactSection from "@/components/home/contact-section/ContactSection";
import SkillsSections from "@/components/home/skills-section/Skills";
import HeroSection from "@/components/home/hero-section/HeroSection";
import ServicesSection from "@/components/home/services-section/ServicesSection";
import PortfolioSection from "@/components/home/portfolio-section/PortfolioSection";
import {
    portfolioCategories,
    portfolioData,
    serviceSectionData,
} from "@/data/data";

export default function Home() {
    return (
        <>
            {/* hero section */}
            <HeroSection />

            {/* services section */}
            <ServicesSection serviceData={serviceSectionData} />

            {/* portfolio section */}
            <PortfolioSection
                portfolioCategoriesData={portfolioCategories}
                portfolioData={portfolioData}
            />

            {/* resume section */}
            <ResumeSection />

            {/* skills section */}
            <SkillsSections />

            {/* contact section */}
            <ContactSection />
        </>
    );
}
