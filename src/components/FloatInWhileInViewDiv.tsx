import { motion } from "motion/react";
import { ReactNode } from "react";

const FloatInWhileInViewDiv = ({
  children,
  className,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FloatInWhileInViewDiv;
