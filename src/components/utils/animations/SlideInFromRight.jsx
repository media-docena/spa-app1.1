import React from 'react'
import { motion } from 'motion/react'

function SlideInFromRight({ children, delay = 0 }) {
    const variants = {
      hidden: {
        opacity: 0,
        x: 100, // Empieza 100px hacia la derecha
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          ease: 'easeOut',
          delay: delay,
        },
      },
    };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export default SlideInFromRight