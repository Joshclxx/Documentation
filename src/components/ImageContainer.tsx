"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type ImageContainerProps = {
  image: string;
  imageTitle: string;
  imageInterface: string;
  onClick?: () => void;
};

const ImageContainer: React.FC<ImageContainerProps> = ({
  image,
  imageTitle,
  imageInterface,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      onClick={onClick}
      className="flex flex-col items-center w-[317px] rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:scale-105 transition-transform"
    >
      <Image
        src={image}
        alt={imageTitle}
        width={317}
        height={217}
        className="object-cover"
      />
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold mb-1">{imageTitle}</h2>
        <p className="text-sm text-gray-600">{imageInterface}</p>
        {/* <p className="text-sm text-gray-600">{imageDescription}</p> */}
      </div>
    </motion.div>
  );
};

export default ImageContainer;
