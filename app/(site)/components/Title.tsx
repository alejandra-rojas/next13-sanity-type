"use client";
import { motion } from "framer-motion";
import type { Image as ImageType } from "@sanity/types";

export default function Title({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={className}
      >
        {text}
      </motion.div>
    </div>
  );
}
