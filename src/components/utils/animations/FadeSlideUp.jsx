import React from 'react'
import { motion } from 'motion/react';

function FadeSlideUp({ children, delay = 0}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeSlideUp;