import React from "react";
import HeroSection from "./../components/home/hero/HeroSection";
import SkillsSections from "@/components/home/skills/Skills";
import ServicesSection from "@/components/home/services/ServicesSection";
import ContactSection from "@/components/home/contact/ContactSection";
import ResumeSection from "@/components/home/resume-section/ResumeSection";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <ServicesSection />
            <ResumeSection />
            <SkillsSections />
            <ContactSection />
        </div>
    );
}
