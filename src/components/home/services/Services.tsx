import React from "react";

export default function ServicesSection() {
    return (
        <div>
            <div className="flex items-center justify-between gap-6 lg:py-20">
                {/* service 1 */}
                <div className="lg:text-[64px] leading-normal font-medium flex items-center text-pb-white/90 lg:gap-[15px]">
                    <h1>0.6</h1>
                    <p className="lg:text-base leading-normal tracking-normal text-pb-white/80 max-w-30">
                        Years of Experience
                    </p>
                </div>
                {/* service 2 */}
                <div className="lg:text-[64px] leading-normal font-medium flex items-center text-pb-white/90 lg:gap-[15px]">
                    <h1>10+</h1>
                    <p className="lg:text-base leading-normal tracking-normal text-pb-white/80 max-w-30">
                        Project Completed
                    </p>
                </div>
                {/* service 3 */}
                <div className="lg:text-[64px] leading-normal font-medium flex items-center text-pb-white/90 lg:gap-[15px]">
                    <h1>05</h1>
                    <p className="lg:text-base leading-normal tracking-normal text-pb-white/80 max-w-30">
                        Happy Clients
                    </p>
                </div>
                {/* service 4 */}
                <div className="lg:text-[64px] leading-normal font-medium flex items-center text-pb-white/90 lg:gap-[15px]">
                    <h1>0.6</h1>
                    <p className="lg:text-base leading-normal tracking-normal text-pb-white/80 max-w-30">
                        Years of Experience
                    </p>
                </div>
            </div>
        </div>
    );
}
