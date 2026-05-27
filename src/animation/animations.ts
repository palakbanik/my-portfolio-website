// smoothScaleUp animation
export const smoothScaleUp = {
    hidden: {
        opacity: 0,
        scale: 0.2,
    },
    visible: (custom: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            delay: custom,
            ease: "easeInOut" as const,
        },
    }),
};

// springScaleUp animation
export const springScaleUp = {
    hidden: {
        opacity: 0,
        scale: 0.6,
    },
    visible: (custom: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 300,
            damping: 19,
        },
    }),
};

// fadeUp animation
export const fadeUp = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: custom,
            ease: "easeInOut" as const,
        },
    }),
};
