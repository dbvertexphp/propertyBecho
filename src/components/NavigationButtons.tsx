"use client";
import Image from "next/image";
import { useState } from "react";

interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function NavigationButtons({ onPrev, onNext }: NavigationButtonsProps) {
  const [hoverBack, setHoverBack] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);

  return (
    <div className="flex gap-4">
      <button
        onClick={onPrev}
        onMouseEnter={() => setHoverBack(true)}
        onMouseLeave={() => setHoverBack(false)}
        aria-label="Previous card"
      >
        <Image
          src={hoverBack ? "/blueback.svg" : "/left arrow.svg"}
          alt="Back"
          width={40}
          height={40}
          className="w-10 h-10"
        />
      </button>

      <button
        onClick={onNext}
        onMouseEnter={() => setHoverNext(true)}
        onMouseLeave={() => setHoverNext(false)}
        aria-label="Next card"
      >
        <Image
          src={hoverNext ? "/bluenext.svg" : "/right arrow.svg"}
          alt="Next"
          width={40}
          height={40}
          className="w-10 h-10"
        />
      </button>
    </div>
  );
}