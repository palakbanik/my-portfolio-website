import React from "react";

import ResumeSection from "@/components/home/resume-section/ResumeSection";
import ContactSection from "@/components/home/contact-section/ContactSection";
import SkillsSections from "@/components/home/skills-section/Skills";
import HeroSection from "@/components/home/hero-section/HeroSection";
import ServicesSection from "@/components/home/services-section/ServicesSection";
import PortfolioSection from "@/components/home/portfolio-section/PortfolioSection";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <ServicesSection />
            <PortfolioSection />
            <ResumeSection />
            <SkillsSections />
            <ContactSection />
        </div>
    );
}
