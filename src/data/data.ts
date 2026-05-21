// skills data
import javascript from "@/assets/skills-logo/javascript-icon.svg";
import typescript from "@/assets/skills-logo/typescript-icon.svg";
import react from "@/assets/skills-logo/react-icon.svg";
import framerMotion from "@/assets/skills-logo/framer-motion-icon.png";
import gsap from "@/assets/skills-logo/gsap-icon.jpg";
import nextjs from "@/assets/skills-logo/nextjs-icon.svg";
import git from "@/assets/skills-logo/git-icon.svg";
import github from "@/assets/skills-logo/github-icon.png";
import tailwindcss from "@/assets/skills-logo/tailwindcss-icon.svg";
import figma from "@/assets/skills-logo/figma-icon.svg";
import adobeXd from "@/assets/skills-logo/adobe-xd-icon.svg";
import html from "@/assets/skills-logo/html-icon.svg";
import css from "@/assets/skills-logo/css-icon.svg";

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
        title: "Portfolio",
        href: "/portfolio",
    },
    {
        id: 4,
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
        name: "LinkedIn",
    },
    {
        id: 2,
        icon: FaGithub,
        href: "https://github.com/palakbanik",
        name: "GitHub",
    },
    {
        id: 3,
        icon: FaFacebookF,
        href: "https://facebook.com/",
        name: "Facebook",
    },
    {
        id: 4,
        icon: FaInstagram,
        href: "https://instagram.com/",
        name: "Instagram",
    },
];

// main page stats section data
export const statsData = [
    {
        id: 1,
        value: "0.6",
        title: "Years of Experience",
    },
    {
        id: 2,
        value: "10+",
        title: "Project Completed",
    },
    {
        id: 3,
        value: "05",
        title: "Happy Clients",
    },
    {
        id: 4,
        value: "0.6",
        title: "Years of Experience",
    },
];

// services data
export const serviceSectionData = [
    {
        id: 1,
        title: "Responsive Design",
        description:
            "Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.",
    },
    {
        id: 2,
        title: "API Integration",
        description:
            "Fetching and displaying data from third-party REST APIs using Axios and Fetch, with proper loading and error state handling.",
    },
    {
        id: 3,
        title: "Web Animation",
        description:
            "Creating smooth, interactive animations using GSAP and Framer Motion to deliver engaging and modern user experiences.",
    },
    {
        id: 4,
        title: "Website Redesign",
        description:
            "Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations.",
    },
];

// portfolio section categories
export const portfolioCategories = [
    {
        id: 1,
        categoryName: "All",
        categoryType: "all",
    },
    {
        id: 2,
        categoryName: "UX/UI",
        categoryType: "ux-ui",
    },
    {
        id: 3,
        categoryName: "Animated",
        categoryType: "animated",
    },
    {
        id: 4,
        categoryName: "Apps",
        categoryType: "apps",
    },
];

// portfolio section portfolio data

import dummy from "@/assets/portfolio-projects/dummy.jpg";
export const portfolioData = [
    {
        id: 1,
        title: "Agency Company Website",
        description:
            "I designed and developed a modern multi-page agency website with a strong focus on smooth user experience and engaging interactions. This project showcases my ability to build scalable and responsive layouts using Next.js and Tailwind CSS, while implementing smooth scroll-based animations with GSAP and Lenis. The final result is a visually appealing, highly interactive, and performance-optimized website.",
        categoryType: "animated",
        imageUrl: dummy,
        alt: "Agency Company Website",
        href: "https://animated-agency-website-sigma.vercel.app/",
        projectTools: [
            "Next.js",
            "Tailwind CSS",
            "GSAP",
            "Lenis",
            "JavaScript",
            "React Icons",
        ],
    },

    {
        id: 2,
        title: "Insurance Company Website",
        description:
            "I designed and developed a multi-page insurance company website focusing on a clean UI, intuitive navigation, and responsive layouts. This project demonstrates my skills in building structured multi-page applications with modern web technologies while ensuring a smooth and user-friendly experience. The final result is a visually appealing and responsive insurance company website that effectively showcases the company's services.",
        categoryType: "ui-ux",
        imageUrl: dummy,
        alt: "Insurance Company Website",
        href: "https://amynta-insurance-company-website.vercel.app/",
        projectTools: ["Next.js", "Tailwind CSS", "TypeScript", "React Icons"],
    },

    {
        id: 3,
        title: "E-Commerce Website",
        description:
            "I developed a responsive single-page e-commerce website featuring a modern UI, smooth navigation, dark mode support, and a user-friendly shopping experience. This project highlights my frontend development skills and ability to create visually engaging interfaces.",
        categoryType: "e-commerce",
        imageUrl: dummy,
        alt: "E-Commerce Website",
        href: "/",
        projectTools: [
            "Next.js",
            "Tailwind CSS",
            "JavaScript",
            "React Icons",
            "Swiper.js",
        ],
    },

    {
        id: 4,
        title: "Factora Website",
        description:
            "I built a clean and responsive website with a strong focus on simplicity, usability, and smooth user experience. This project showcases my ability to create functional and visually appealing web interfaces with modern frontend technologies.",
        categoryType: "ui-ux",
        imageUrl: dummy,
        alt: "Factora Website",
        href: "/",
        projectTools: [
            "Next.js",
            "Tailwind CSS",
            "GSAP",
            "Lenis",
            "JavaScript",
            "React Icons",
        ],
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
