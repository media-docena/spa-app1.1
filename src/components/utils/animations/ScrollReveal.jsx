import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

function ScrollReveal({ children, delay = 0 }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  // Aseguramos que el componente esté listo para animar
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  // Si no está cargado, renderizamos el contenido sin animación
  if (!isLoaded) {
    return (
      <div className="box mb-12 mx-auto max-w-6xl" style={{ opacity: 0 }}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      transition={{ duration: 0.8, ease: 'easeOut', delay: delay }}
      className="box mb-12 mx-auto max-w-6xl"
    >
      {children} {/* Renderiza el contenido pasado como 'children' */}
    </motion.div>
  );
}

export default ScrollReveal;
