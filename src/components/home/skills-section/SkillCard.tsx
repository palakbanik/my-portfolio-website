import Image from "next/image";

interface SkillCardDataProps {
    id: number;
    title: string;
    icon: string;
}

interface SkillCardProps {
    skill: SkillCardDataProps;
}

export default function SkillCard({ skill }: SkillCardProps) {
    const { title, icon } = skill;
    return (
        <div className="flex flex-col items-center gap-5 text-center group">
            <div className="w-full max-w-[160px] lg:max-w-[180px] aspect-square border border-transparent hover:border-pb-theme-primary hover:bg-pb-theme-primary/20 flex flex-col items-center justify-center gap-2 sm:gap-5 rounded-4xl duration-500 transition-all ease-in bg-pb-grey-2/50 cursor-default">
                <Image
                    src={icon}
                    alt={title}
                    width={80}
                    height={80}
                    priority
                    className="object-cover object-center grayscale rounded-2xl group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <p className="font-semibold text-pb-white/30 group-hover:text-pb-theme-primary transition-all duration-500">
                    {title}
                </p>
            </div>
        </div>
    );
}
