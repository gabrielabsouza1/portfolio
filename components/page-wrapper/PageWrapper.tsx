import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import CursorGlow from "components/cursor-glow/CursorGlow";

export const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <CursorGlow />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
