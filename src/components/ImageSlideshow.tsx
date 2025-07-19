"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageSlideshowProps {
  images: {
    url: string;
    name: string;
  }[];
  title: string;
}

export default function ImageSlideshow({ images, title }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Calculate visible dot indices
  const getVisibleDots = () => {
    const totalDots = images.length;
    const maxDots = 10;

    if (totalDots <= maxDots) {
      return Array.from({ length: totalDots }, (_, i) => i);
    }

    const dotsBeforeCurrent = Math.floor((maxDots - 1) / 2);
    const dotsAfterCurrent = maxDots - 1 - dotsBeforeCurrent;

    let start = currentIndex - dotsBeforeCurrent;
    let end = currentIndex + dotsAfterCurrent;

    // Adjust if we're near the start
    if (start < 0) {
      start = 0;
      end = maxDots - 1;
    }
    // Adjust if we're near the end
    else if (end >= totalDots) {
      end = totalDots - 1;
      start = Math.max(0, end - (maxDots - 1));
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className="relative w-full flex justify-center bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
      <div className="relative w-full max-w-4xl">
        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black/10 px-3 py-1 rounded-full text-gray-400 text-sm font-medium z-10">
          {currentIndex + 1}/{images.length}
        </div>

        {/* Main Image */}
        <div className="relative w-full flex justify-center">
          <Image
            src={images[currentIndex].url}
            alt={images[currentIndex].name}
            width={450}
            height={900}
            className="max-h-[80vh] w-auto object-contain"
            priority
          />
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Image Caption */}
        <div className="absolute bottom-4 left-4 bg-black/10 px-3 py-1 rounded-lg text-gray-400 text-sm max-w-[80%] truncate">
          {images[currentIndex].name}
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {getVisibleDots().map((index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to image ${index + 1} - ${images[index].name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
