import React from "react";

const GridBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-[#070815]  bg-grid-white/[0.2]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex w-full items-center justify-center bg-[#070815] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
      <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-center text-4xl font-bold text-transparent sm:text-7xl">
        {children}
      </div>
    </div>
  );
};

export default GridBackground;
