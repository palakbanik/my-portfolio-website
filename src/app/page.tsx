import React from "react";
import HeroSection from "./../components/home/hero/HeroSection";
import SkillsSections from "@/components/home/skills/Skills";
import ServicesSection from "@/components/home/services/ServicesSection";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <ServicesSection />
            <SkillsSections />
        </div>
    );
}
