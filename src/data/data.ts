// skills data
import javascript from "@/public/skills-logo/javascript-icon.svg";
import typescript from "@/public/skills-logo/typescript-icon.svg";
import react from "@/public/skills-logo/react-icon.svg";
import framerMotion from "@/public/skills-logo/framer-motion-icon.png";
import gsap from "@/public/skills-logo/gsap-icon.jpg";
import nextjs from "@/public/skills-logo/nextjs-icon.svg";
import git from "@/public/skills-logo/git-icon.svg";
import github from "@/public/skills-logo/github-icon.png";
import tailwindcss from "@/public/skills-logo/tailwindcss-icon.svg";
import figma from "@/public/skills-logo/figma-icon.svg";
import adobeXd from "@/public/skills-logo/adobe-xd-icon.svg";
import html from "@/public/skills-logo/html-icon.svg";
import css from "@/public/skills-logo/css-icon.svg";

// contact section dropdown data
import { PiPhoneCallLight } from "react-icons/pi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

// resume data
import type { IconType } from "react-icons";
import { SlGraduation } from "react-icons/sl";

// header data
export const navLinks = [
    {
        id: 1,
        title: "Home",
        href: "/",
    },
    {
        id: 2,
        title: "About",
        href: "/about",
    },
    {
        id: 3,
        title: "Projects",
        href: "/projects",
    },
    {
        id: 4,
        title: "Testimonial",
        href: "/testimonial",
    },
    {
        id: 5,
        title: "Contact",
        href: "/contact",
    },
];

// main page hero section data
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiOpenbadges } from "react-icons/si";

export const socialLinks = [
    {
        id: 1,
        icon: FaLinkedinIn,
        href: "https://www.linkedin.com/in/polok-banik-184121308/",
    },
    {
        id: 2,
        icon: FaGithub,
        href: "https://github.com/palakbanik",
    },
    {
        id: 3,
        icon: FaFacebookF,
        href: "https://facebook.com/",
    },
    {
        id: 4,
        icon: FaInstagram,
        href: "https://instagram.com/",
    },
];

// services data
export const serviceSectionData = [
    {
        id: "01",
        title: "Responsive Design",
        description:
            "Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.",
    },
    {
        id: "02",
        title: "Performance Optimization",
        description:
            "Optimize website speed, loading time, and overall performance to ensure smooth and fast user experiences.",
    },
    {
        id: "03",
        title: "API Integrations",
        description:
            "Build and integrate APIs to connect websites with third-party applications, enhancing functionality and performance.",
    },
    {
        id: "04",
        title: "Website Redesign",
        description:
            "Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations.",
    },
];

// resume data

export type ResumeSectionTimelineItem = {
    id: number;
    period: string;
    title: string;
    subtitle: string;
    featured?: boolean;
};

export type ResumeSectionDataProps = {
    id: string;
    icon: IconType;
    heading: string;
    items: ResumeSectionTimelineItem[];
};

export const resumeSectionData: ResumeSectionDataProps[] = [
    {
        id: "experience",
        icon: SiOpenbadges,
        heading: "My Experience",
        items: [
            {
                id: 1,
                period: "2022 - Present",
                title: "PROGRAMMING COURSE",
                subtitle: "Blockdots, London",
            },
            {
                id: 2,
                period: "2021 - 2022",
                title: "CMS COURSE",
                subtitle: "Parsons, The New School",
            },
            {
                id: 3,
                period: "2020 - 2021",
                title: "WEB DESIGN COURSE",
                subtitle: "House of Life, Leeds",
            },
            {
                id: 4,
                period: "2018 - 2020",
                title: "PARSONS, THE NEW SCHOOL",
                subtitle: "Theme Junction, Bursa",
            },
        ],
    },
    {
        id: "education",
        icon: SlGraduation,
        heading: "My Education",
        items: [
            {
                id: 1,
                period: "2020 - 2023",
                title: "BLOCKDOTS",
                subtitle: "Harverd University",
            },
            {
                id: 2,
                period: "2016 - 2020",
                title: "PARSONS, THE NEW SCHOOL",
                subtitle: "University of Denmark",
            },
            {
                id: 3,
                period: "2012 - 2015",
                title: "IDEO",
                subtitle: "University of California",
                featured: true,
            },
            {
                id: 4,
                period: "2010 - 2011",
                title: "PARSONS, THE NEW SCHOOL",
                subtitle: "Parsons, The New School",
            },
        ],
    },
];

// skills data

export const skillsData = [
    {
        id: 1,
        title: "JavaScript",
        icon: javascript,
        percentage: "70%",
    },
    {
        id: 2,
        title: "TypeScript",
        icon: typescript,
        percentage: "80%",
    },
    {
        id: 3,
        title: "React",
        icon: react,
        percentage: "70%",
    },
    {
        id: 4,
        title: "Next.js",
        icon: nextjs,
        percentage: "70%",
    },
    {
        id: 5,
        title: "Framer Motion",
        icon: framerMotion,
        percentage: "70%",
    },
    {
        id: 6,
        title: "GSAP",
        icon: gsap,
        percentage: "60%",
    },
    {
        id: 7,
        title: "Git",
        icon: git,
        percentage: "70%",
    },
    {
        id: 8,
        title: "GitHub",
        icon: github,
        percentage: "70%",
    },
    {
        id: 9,
        title: "Tailwind CSS",
        icon: tailwindcss,
        percentage: "90%",
    },
    {
        id: 10,
        title: "Figma",
        icon: figma,
        percentage: "50%",
    },
    {
        id: 11,
        title: "Adobe XD",
        icon: adobeXd,
        percentage: "50%",
    },
    {
        id: 12,
        title: "HTML",
        icon: html,
        percentage: "90%",
    },
    {
        id: 13,
        title: "CSS",
        icon: css,
        percentage: "70%",
    },
];

// contact section dropdown data
export const contactDropdownOptions = [
    "Choose Service",
    "Responsive Design",
    "Performance Optimization",
    "API Integrations",
    "Website Redesign",
];

export const contactSectionPersonalContacts = [
    {
        id: 1,
        contactType: "Phone",
        contactTypeValue: "+880 1700 812 413",
        href: "tel:+8801700812413",
        icon: PiPhoneCallLight,
    },
    {
        id: 2,
        contactType: "Email",
        contactTypeValue: "polokbanik7@gmail.com",
        href: "mailto:polokbanik7@gmail.com",
        icon: IoMailUnreadOutline,
    },
    {
        id: 3,
        contactType: "Address",
        contactTypeValue: "Mirpur,\nDhaka, Bangladesh",
        href: "/",
        icon: CiLocationOn,
    },
];

// footer links

export const footerLinks = [
    {
        id: 1,
        title: "About",
        href: "/about",
    },
    {
        id: 2,
        title: "Projects",
        href: "/projects",
    },
    {
        id: 3,
        title: "Testimonial",
        href: "/testimonial",
    },
    {
        id: 4,
        title: "Contact",
        href: "/contact",
    },
];
