"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const ScrollObserver = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
