import { PiPhoneCallLight } from "react-icons/pi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

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
        title: "Polok Banik Portfolio Website",
        description:
            "A personal portfolio website I designed and developed from scratch, showcasing my skills, projects, and experience as a Frontend Developer. Built with Next.js and TypeScript for a scalable structure, styled with Tailwind CSS, and brought to life with smooth scroll-driven animations using Framer Motion and Lenis.",
        categoryType: "animated",
        imageUrl: "/portfolio-projects/polokbanik-portfolio-website.png",
        alt: "Polok Banik Portfolio Website",
        href: "https://polokbanik.vercel.app/",
        projectTools: [
            "Next.js",
            "TypeScript",
            "Framer Motion",
            "Tailwind CSS",
            "Lenis",
            "React Icons",
        ],
    },
    {
        id: 2,
        title: "Agency Company Website",
        description:
            "A fully responsive multi-page agency website I built from the ground up, featuring fluid scroll animations, dynamic layouts, and a polished user interface — crafted with Next.js, JavaScript, Tailwind CSS, GSAP, and Lenis.",
        categoryType: "animated",
        imageUrl: "/portfolio-projects/agency-website-project.png",
        alt: "Agency Company Website",
        href: "https://animated-agency-web.vercel.app/",
        projectTools: [
            "Next.js",
            "JavaScript",
            "GSAP",
            "Lenis",
            "Tailwind CSS",
            "React Icons",
        ],
    },

    {
        id: 3,
        title: "Insurance Company Website",
        description:
            "Built a responsive multi-page insurance company website with a clean UI, structured layouts, and smooth user experience using modern frontend technologies.",
        categoryType: "ui-ux",
        imageUrl: "/portfolio-projects/insurance-company-website-project.png",
        alt: "Insurance Company Website",
        href: "https://amynta-insurance-company-website.vercel.app/",
        projectTools: ["Next.js", "Tailwind CSS", "TypeScript", "React Icons"],
    },

    {
        id: 4,
        title: "E-Commerce Website",
        description:
            "Developed a responsive e-commerce website featuring modern UI design, smooth navigation, dark mode support, and an interactive shopping experience.",
        categoryType: "e-commerce",
        imageUrl: "/portfolio-projects/ecom-website-two-project.png",
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
        id: 5,
        title: "Beyond Code Website",
        description:
            "Created a clean and responsive website focused on simplicity, usability, and smooth user experience with modern frontend technologies.",
        categoryType: "ui-ux",
        imageUrl: "/portfolio-projects/beyondcode-website-project.png",
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
        id: 6,
        title: "Factora Website",
        description:
            "Designed and developed a responsive website with modern UI design, smooth interactions, and a user-friendly browsing experience.",
        categoryType: "ui-ux",
        imageUrl: "/portfolio-projects/factora-website-project.png",
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
        id: 7,
        title: "Video Website",
        description:
            "Built a modern and responsive video-focused website with smooth animations, clean layouts, and an engaging user experience.",
        categoryType: "ui-ux",
        imageUrl: "/portfolio-projects/video-website-project.png",
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
        icon: "SiOpenbadges",
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
                period: "2025 - Present",
                title: "Front End COURSE",
                subtitle: "Self Learning",
            },
            {
                id: 3,
                period: "2025 - Present",
                title: "WEB DEVELOPMENT COURSE",
                subtitle: "Self Learning",
            },
        ],
    },
    {
        id: 2,
        icon: "SlGraduation",
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
                title: "HIGHER SECONDARY",
                subtitle: "Gridakalindia Hazera Hasmat University College",
            },
            {
                id: 3,
                period: "2017 - 2019",
                title: "SECONDARY SCHOOL",
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
        icon: "/skills-logo/javascript-icon.svg",
    },
    {
        id: 2,
        title: "TypeScript",
        icon: "/skills-logo/typescript-icon.svg",
    },
    {
        id: 3,
        title: "React",
        icon: "/skills-logo/react-icon.svg",
    },
    {
        id: 4,
        title: "Next.js",
        icon: "/skills-logo/nextjs-icon.svg",
    },
    {
        id: 5,
        title: "Framer Motion",
        icon: "/skills-logo/framer-motion-icon.png",
    },
    {
        id: 6,
        title: "GSAP",
        icon: "/skills-logo/gsap-icon.jpg",
    },
    {
        id: 7,
        title: "Git",
        icon: "/skills-logo/git-icon.svg",
    },
    {
        id: 8,
        title: "GitHub",
        icon: "/skills-logo/github-icon.png",
    },
    {
        id: 9,
        title: "Tailwind CSS",
        icon: "/skills-logo/tailwindcss-icon.svg",
    },
    {
        id: 10,
        title: "Figma",
        icon: "/skills-logo/figma-icon.svg",
    },
    {
        id: 11,
        title: "Adobe XD",
        icon: "/skills-logo/adobe-xd-icon.svg",
    },
    {
        id: 12,
        title: "HTML",
        icon: "/skills-logo/html-icon.svg",
    },
    {
        id: 13,
        title: "CSS",
        icon: "/skills-logo/css-icon.svg",
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

        icon: CiLocationOn,
    },
];
