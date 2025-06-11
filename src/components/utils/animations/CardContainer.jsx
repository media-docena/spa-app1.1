import React from 'react'
import { motion } from 'motion/react';

function CardContainer({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
        delay: delay,
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
      // Sin clases adicionales para no interferir con el layout original
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
}

export default CardContainer