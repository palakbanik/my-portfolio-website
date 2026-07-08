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
        href: "https://www.linkedin.com/in/palak-banik-184121308/",
        name: "Palak Banik LinkedIn",
    },
    {
        id: 2,
        icon: FaGithub,
        href: "https://github.com/palakbanik",
        name: "Palak Banik GitHub",
    },
    {
        id: 3,
        icon: FaFacebookF,
        href: "https://www.facebook.com/palak.banik.2002",
        name: "Palak Banik Facebook",
    },
    {
        id: 4,
        icon: FaInstagram,
        href: "https://www.instagram.com/p_o__l__o_k/",
        name: "Palak Banik Instagram",
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
        title: "Palak Banik Portfolio Website",
        description:
            "Developed a modern portfolio website using Next.js, TypeScript, Tailwind CSS, Framer Motion and Lenis, implementing reusable animation patterns, client-side form validation, and EmailJS integration for seamless contact form submissions and real-time email delivery.",
        categoryType: "animated",
        imageUrl: "/portfolio-projects/palak-banik-portfolio.png",
        alt: "Palak Banik Portfolio Website",
        href: "https://palak-banik.vercel.app/",
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
            "Built a responsive multi-page insurance company website with a modern and clean UI, structured layouts, dynamic data rendering, reusable components, and a fully optimized user experience across desktop, tablet, and mobile devices.",
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
            "Developed a fully responsive single-page website with a clean and modern UI, focused on simplicity, usability, and performance. Built using reusable components, structured and maintainable code architecture, and dynamic data rendering to ensure scalability and performance across all devices.",
        categoryType: "ui-ux",
        imageUrl: "/portfolio-projects/beyondcode-website-project.png",
        alt: "Beyond Code Website",
        href: "https://beyondcode-website.netlify.app/",
        projectTools: ["Next.js", "Tailwind CSS", "TypeScript", "React Icons"],
    },

    {
        id: 6,
        title: "Factora Website",
        description:
            "Developed a fully responsive single-page website with a clean and modern UI. Built using reusable components, structured and maintainable code architecture, and dynamic data rendering to ensure scalability and performance across all devices.",
        categoryType: "ui-ux",
        imageUrl: "/portfolio-projects/factora-website-project.png",
        alt: "Factora Website",
        href: "https://factora-website.netlify.app/",
        projectTools: ["ReactJS", "Tailwind CSS", "JavaScript", "React Icons"],
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
        projectTools: ["ReactJS", "Tailwind CSS", "JavaScript", "React Icons"],
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
                subtitle: "Self-Taught",
            },
            {
                id: 2,
                period: "2025 - Present",
                title: "FRONTEND COURSE",
                subtitle: "Self-Taught",
            },
            {
                id: 3,
                period: "2025 - Present",
                title: "WEB DEVELOPMENT COURSE",
                subtitle: "Self-Taught",
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
    // ── Primary / Core Skills ──
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
        title: "HTML",
        icon: "/skills-logo/html-icon.svg",
    },
    {
        id: 6,
        title: "CSS",
        icon: "/skills-logo/css-icon.svg",
    },
    {
        id: 7,
        title: "Tailwind CSS",
        icon: "/skills-logo/tailwindcss-icon.svg",
    },
    {
        id: 8,
        title: "Sass",
        icon: "/skills-logo/sass-icon.svg",
    },
    {
        id: 9,
        title: "Bootstrap",
        icon: "/skills-logo/bootstrap-icon.svg",
    },
    {
        id: 10,
        title: "GSAP",
        icon: "/skills-logo/gsap-icon.jpg",
    },
    {
        id: 11,
        title: "Framer Motion",
        icon: "/skills-logo/framer-motion-icon.png",
    },

    // ── Version Control ──
    {
        id: 12,
        title: "Git",
        icon: "/skills-logo/git-icon.svg",
    },
    {
        id: 13,
        title: "GitHub",
        icon: "/skills-logo/github-icon.png",
    },

    // ── Design Tools ──
    {
        id: 14,
        title: "Figma",
        icon: "/skills-logo/figma-icon.svg",
    },
    {
        id: 15,
        title: "Adobe XD",
        icon: "/skills-logo/adobe-xd-icon.svg",
    },

    // ── Other Tools ──
    {
        id: 16,
        title: "Vite",
        icon: "/skills-logo/vite-icon.svg",
    },
    {
        id: 17,
        title: "NPM",
        icon: "/skills-logo/npm-icon.svg",
    },
    {
        id: 18,
        title: "Yarn",
        icon: "/skills-logo/yarn-logo-icon.png",
    },
    {
        id: 19,
        title: "Netlify",
        icon: "/skills-logo/netlify-icon.svg",
    },
    {
        id: 20,
        title: "Notion",
        icon: "/skills-logo/notion-icon.png",
    },
    {
        id: 21,
        title: "VS Code",
        icon: "/skills-logo/vs-code-icon.svg",
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
        contactTypeValue: "+880 1700-812413",
        href: "tel:+8801700812413",
        icon: PiPhoneCallLight,
    },
    {
        id: 2,
        contactType: "Email",
        contactTypeValue: "polok.webdev@gmail.com",
        href: "mailto:polok.webdev@gmail.com",
        icon: IoMailUnreadOutline,
    },
    {
        id: 3,
        contactType: "Address",
        contactTypeValue: "Mirpur,\nDhaka, Bangladesh",

        icon: CiLocationOn,
    },
];
