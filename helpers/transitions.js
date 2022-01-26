export const fade = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] },
  },
};

export const stagger = {
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      staggerDirection: 1,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

export const slideInLeft = {
  closed: {
    x: "-100%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.79, 0.14, 0.15, 0.86],
    },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.46, 0.03, 0.52, 0.96],
    },
  },
};
