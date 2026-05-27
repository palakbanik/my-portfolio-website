export interface NavLink {
    id: number;
    title: string;
    href: string;
}

export interface SocialLink {
    id: number;
    href: string;
    name: string;
    iconName: string;
}

export interface StatsItem {
    id: number;
    value: string;
    title: string;
}

export interface Service {
    id: number;
    title: string;
    description: string;
}

export interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    categoryType: string;
    imageUrl: string;
    alt: string;
    href: string;
    projectTools: string[];
}

export interface ResumeItem {
    id: number;
    period: string;
    title: string;
    subtitle: string;
}

export interface ResumeSection {
    id: number;
    icon: string;
    heading: string;
    items: ResumeItem[];
}

export interface Skill {
    id: number;
    title: string;
    icon: string;
}

export interface ContactInfo {
    id: number;
    contactType: string;
    contactTypeValue: string;
    href: string;
    iconName: string;
}
