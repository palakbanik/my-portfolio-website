// fade up animation
export const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
    }),
};

// fade scale animation for hero section
export const fadeScaleHero = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 600,
            damping: 14,
        },
    },
};
// fade scale animation
export const fadeScale = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 400,
            damping: 20,
        },
    },
};

// fade left animation
export const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay },
    }),
};

// fade right animation
export const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay },
    }),
};
