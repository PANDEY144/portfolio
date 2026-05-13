import { motion } from 'framer-motion';

export function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: 'none' }}
      transition={{ delay: 0.85, duration: 0.55 }}
      aria-hidden="true"
    >
      <motion.div
        className="loader-mark"
        initial={{ scale: 0.82, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        AS
      </motion.div>
    </motion.div>
  );
}
