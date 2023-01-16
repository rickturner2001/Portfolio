export const upperText = {
  hidden: { translateY: "0%" },
  show: {
    translateY: "0%",
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.5,
      delay: 10,
    },
  },
};

export const upperTextLetter = {
  hidden: { translateY: "-100%" },
  show: { translateY: "0%" },
};

export const titleContainer = {
  hidden: { translateY: "0%" },
  show: {
    translateY: "0%",
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const titleLetter = {
  hidden: { translateY: "100%" },
  show: { translateY: "-5%" },
};

export const titleFirstLetter = {
  hidden: { translateY: "-100%" },
  show: { translateY: "0%" },
};

export const logosContainer = {
  show: {
    translateY: "0%",
    transition: {
      staggerChildren: 0.5,
      delayChildren: 2,
    },
  },
  hidden: { translateY: "0%" },
};

export const logoItem = {
  show: { translateY: "0%" },
  hidden: { translateY: "150%" },
};
