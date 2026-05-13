"use client";

import React from "react";
import HeroSection from "./../components/home/hero/HeroSection";
import SkillsSections from "@/components/home/skills/Skills";
import ServicesSection from "@/components/home/services/ServicesSection";
import ContactSection from "@/components/home/contact/ContactSection";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <ServicesSection />
            <SkillsSections />
            <ContactSection />
        </div>
    );
}
