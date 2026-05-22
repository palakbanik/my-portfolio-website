import PortfolioSection from "@/components/home/portfolio-section/PortfolioSection";
import { portfolioCategories, portfolioData } from "@/data/data";
import React from "react";

export default function PortfolioPage() {
    return (
        <PortfolioSection
            portfolioCategoriesData={portfolioCategories}
            portfolioData={portfolioData}
        />
    );
}
