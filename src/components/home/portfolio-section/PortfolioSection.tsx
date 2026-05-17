import React from "react";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import ParaText from "@/components/shared/texts-type/ParaText";

export default function PortfolioSection() {
    return (
        <section className="bg-pb-theme-accent-1 min-h-[70vh]">
            <Container className="py-12 md:py-20 lg:py-26">
                <div>
                    {/* section header content */}
                    <div className="text-center space-y-1 sm:space-y-2">
                        <SectionTitle text="My Recent Works" />
                        <ParaText>
                            Some of the noteworthy projects I have built:
                        </ParaText>
                    </div>

                    {/* show project */}
                    <div></div>
                </div>
            </Container>
        </section>
    );
}
