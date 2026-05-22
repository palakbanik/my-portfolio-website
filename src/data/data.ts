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
import agencyWebsite from "@/assets/portfolio-projects/agency-website-project.png";
import insuranceWebsite from "@/assets/portfolio-projects/insurance-company-website-project.png";
import beyoundCode from "@/assets/portfolio-projects/beyondCodeTwo-website-project.png";
import eComWebsite from "@/assets/portfolio-projects/ecom-website-two-project.png";
import factoraWebsite from "@/assets/portfolio-projects/factora-website-project.png";
import videoWebsite from "@/assets/portfolio-projects/video-website-project.png";
import { PiPhoneCallLight } from "react-icons/pi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiOpenbadges } from "react-icons/si";
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
export const socialLinks = [
    {
        id: 1,
        icon: FaLinkedinIn,
        href: "https://www.linkedin.com/in/polok-banik-184121308/",
        name: "Polok Banik LinkedIn",
    },
    {
        id: 2,
        icon: FaGithub,
        href: "https://github.com/palakbanik",
        name: "Polok Banik GitHub",
    },
    {
        id: 3,
        icon: FaFacebookF,
        href: "https://www.facebook.com/polok.banik.02",
        name: "Polok Banik Facebook",
    },
    {
        id: 4,
        icon: FaInstagram,
        href: "https://www.instagram.com/p_o__l__o_k/",
        name: "Polok Banik Instagram",
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
        categoryType: "ui-ux",
    },
    {
        id: 3,
        categoryName: "Animated",
        categoryType: "animated",
    },
    {
        id: 4,
        categoryName: "ECommerce",
        categoryType: "e-commerce",
    },
];

// portfolio section portfolio data
export const portfolioData = [
    {
        id: 1,
        title: "Agency Company Website",
        description:
            "Designed and developed a modern multi-page agency website with smooth animations, responsive layouts, and an engaging user experience using Next.js, Tailwind CSS, GSAP, and Lenis.",
        categoryType: "animated",
        imageUrl: agencyWebsite,
        alt: "Agency Company Website",
        href: "https://animated-agency-web.vercel.app/",
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
            "Built a responsive multi-page insurance company website with a clean UI, structured layouts, and smooth user experience using modern frontend technologies.",
        categoryType: "ui-ux",
        imageUrl: insuranceWebsite,
        alt: "Insurance Company Website",
        href: "https://amynta-insurance-company-website.vercel.app/",
        projectTools: ["Next.js", "Tailwind CSS", "TypeScript", "React Icons"],
    },

    {
        id: 3,
        title: "E-Commerce Website",
        description:
            "Developed a responsive e-commerce website featuring modern UI design, smooth navigation, dark mode support, and an interactive shopping experience.",
        categoryType: "e-commerce",
        imageUrl: eComWebsite,
        alt: "E-Commerce Website",
        href: "https://ecommercae-website.netlify.app/",
        projectTools: [
            "ReactJS",
            "Tailwind CSS",
            "JavaScript",
            "React Icons",
            "Swiper.js",
        ],
    },

    {
        id: 4,
        title: "Beyond Code Website",
        description:
            "Created a clean and responsive website focused on simplicity, usability, and smooth user experience with modern frontend technologies.",
        categoryType: "ui-ux",
        imageUrl: beyoundCode,
        alt: "Beyond Code Website",
        href: "https://beyondcode-website.netlify.app/",
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
        id: 5,
        title: "Factora Website",
        description:
            "Designed and developed a responsive website with modern UI design, smooth interactions, and a user-friendly browsing experience.",
        categoryType: "ui-ux",
        imageUrl: factoraWebsite,
        alt: "Factora Website",
        href: "https://factora-website.netlify.app/",
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
        id: 6,
        title: "Video Website",
        description:
            "Built a modern and responsive video-focused website with smooth animations, clean layouts, and an engaging user experience.",
        categoryType: "ui-ux",
        imageUrl: videoWebsite,
        alt: "Video Create Website",
        href: "https://videocreatewebsite.netlify.app/",
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
export const resumeSectionData = [
    {
        id: 1,
        icon: SiOpenbadges,
        heading: "My Experience",
        items: [
            {
                id: 1,
                period: "2025 - Present",
                title: "PROGRAMMING COURSE",
                subtitle: "Self Learning",
            },
            {
                id: 2,
                period: "2021 - 2022",
                title: "Front End COURSE",
                subtitle: "Self Learning",
            },
            {
                id: 3,
                period: "2020 - 2021",
                title: "WEB DESIGN COURSE",
                subtitle: "Self Learning",
            },
        ],
    },
    {
        id: 2,
        icon: SlGraduation,
        heading: "My Education",
        items: [
            {
                id: 1,
                period: "2022 - 2025",
                title: "DIPLOMA IN TEXTILE ENGINEERING",
                subtitle: "Institute of Science Trade and Technology (ISTT)",
            },
            {
                id: 2,
                period: "2019 - 2021",
                title: "HSC",
                subtitle: "Gridakalindia Hazera Hasmat University College",
            },
            {
                id: 3,
                period: "2017 - 2019",
                title: "SSC",
                subtitle: "Ramganj M.U Govt. High School",
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
