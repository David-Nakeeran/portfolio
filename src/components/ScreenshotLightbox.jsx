"use client";

import { useState } from "react";
import Image from "next/image";

export default function ScreenshotLightbox({ src, alt, className = "" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block cursor-zoom-in"
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={750}
          className={className}
        />
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 text-2xl text-white"
            aria-label="Close image"
          >
            ×
          </button>
          <div
            className="max-h-[90vh] max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1800}
              height={1100}
              className="max-h-[90vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
