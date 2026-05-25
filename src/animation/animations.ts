// fade up animation
export const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
    }),
};

// fade scale animation
export const fadeScale = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6 },
    },
};
