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
