export const stepVariants = {
  step1: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },
  step2: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  },
  step3: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 }
  }
};

export const iconVariants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: { type: "spring" as const, stiffness: 200, damping: 15 }
};
