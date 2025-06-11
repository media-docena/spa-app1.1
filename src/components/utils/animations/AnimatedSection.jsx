import React from 'react'
import { motion } from 'motion/react';

function AnimatedSection({ children }) {
    return (
      <motion.section
        className="bg-white rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.section>
    );
}

export default AnimatedSection;