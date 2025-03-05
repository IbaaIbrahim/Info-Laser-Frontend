import React from "react";
import {cn} from "@/lib/utils";
import Image from "next/image";

interface ThumbProps {
  selected: boolean;
  index: number;
  onClick: () => void;
  image: { url: string; alt: string; type?: "image" | "video"; thumbnail?: string };
}

export const ThumbButton: React.FC<ThumbProps> = ({selected, onClick, image}) => {
  return (
    <div
      className={cn("w-20 h-20 border rounded-lg overflow-hidden transition", selected ? "border-gray-800 shadow-md" : "border-gray-300 hover:border-gray-500")}>
      <button onClick={onClick} className="w-full h-full flex items-center justify-center">
        {image.type === "video" ? (
          <div className="relative w-full h-full">
            <Image src={image.thumbnail || ""} alt="Видео" layout="fill" objectFit="cover"/>
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">▶️</div>
          </div>
        ) : (
          <Image src={image.url} alt={image.alt} width={80} height={80}/>
        )}
      </button>
    </div>
  );
};