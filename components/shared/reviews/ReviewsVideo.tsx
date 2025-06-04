'use client';

import React, {useEffect, useState} from "react";
import {cn} from "@/lib/utils";
import {ClassName} from "@/types/types";
import {Play, X} from "lucide-react";
import {VideoReview} from "@/components/shared/reviews/VideoReviews";
import ReactDOM from "react-dom";

interface ReviewsVideoProps extends ClassName {
  video: VideoReview;
}

export const ReviewsVideo: React.FC<ReviewsVideoProps> = ({className, video}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    if (isVideoOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVideoOpen]);

  const modal = isVideoOpen ? ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black/80 bg-opacity-70 flex items-center justify-center z-[1000]"
      onClick={() => setIsVideoOpen(false)}
    >
      <div
        className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
        ></iframe>

        <button
          onClick={() => setIsVideoOpen(false)}
          className={cn(
            "absolute -top-10 right-2 bg-white p-1 rounded-full shadow-md transition-colors",
            "hover:cursor-pointer hover:bg-gray-100 hover:[&_svg]:text-red-500"
          )}
          aria-label="Закрыть видео"
        >
          <X className="text-black size-5"/>
        </button>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <div className={cn("", className)}>
        <div className="rounded-3xl">
          <div
            className={cn(
              "group relative bg-contain bg-no-repeat aspect-video cursor-pointer rounded-3xl mb-3",
            )}
            style={{backgroundImage: `url(https://i.ytimg.com/vi_webp/${video.videoId}/maxresdefault.webp)`}}
            onClick={() => setIsVideoOpen(true)}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 z-20">
              <Play className="fill-black group-hover:fill-[var(--violet)] transition-colors"/>
            </div>
          </div>
        </div>
      </div>

      {modal}
    </>
  );
};
