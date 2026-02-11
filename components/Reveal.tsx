
import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  y?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, width = "100%", delay = 0.2, y = 30 }) => {
  return (
    <div style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: y },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8, 
          delay: delay,
          ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for high-end feel
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
