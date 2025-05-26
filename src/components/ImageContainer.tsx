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
  const isInView = useInView(ref, { amount: 0.5 }); // remove `once: true`

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      onClick={onClick}
      className="flex flex-col items-center w-[317px] rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:scale-105 transition-transform"
    >
      <Image
        src={image}
        alt={imageTitle}
        width={317}
        height={217}
        className="object-cover p-2"
      />
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold mb-1">{imageTitle}</h2>
        <p className="text-sm text-gray-600">{imageInterface}</p>
      </div>
    </motion.div>
  );
};

export default ImageContainer;
