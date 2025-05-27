"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

type ImageContainerProps = {
  image: string;
  imageTitle: string;
  imageInterface: string;
  delay?: number;
  onClick?: () => void;
};

const ImageContainer: React.FC<ImageContainerProps> = ({
  image,
  imageTitle,
  imageInterface,
  delay = 0,
  onClick,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      onClick={onClick}
      className="flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:scale-105 transition-transform"
    >
      <div className="w-full h-48 sm:h-56 md:h-64 relative">
        <Image
          src={image}
          alt={imageTitle}
          fill
          className="object-contain p-2"
        />
      </div>

      <div className="flex flex-col items-center gap-1 sm:gap-2 text-center p-3 sm:p-4 w-full">
        <h2 className="text-base sm:text-lg md:text-xl font-bold tracking-tight">
          {imageTitle}
        </h2>
        <p className="text-xs sm:text-sm text-gray-600">{imageInterface}</p>
      </div>
    </motion.div>
  );
};

export default ImageContainer;
