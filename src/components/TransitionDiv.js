import { motion } from "framer-motion";

export default function TransitionDiv({ children, name }) {
  const variants = {
    fadeIn: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
    fadeOut: {
      opacity: 0,
      transition: { duration: 0.35 },
      x: "100vh",
    },
  };

  return (
    <motion.div
      className={`${name}-wrap`}
      initial={{ opacity: 0 }}
      animate="fadeIn"
      exit="fadeOut"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
