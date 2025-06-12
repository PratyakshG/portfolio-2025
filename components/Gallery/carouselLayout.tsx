import React from "react";

const HorizontalScrollCarousel = ({ card }) => {
  return (
    <div className="group relative size-[150px] md:size-[250px] lg:size-[350px] xl:size-[450px] overflow-hidden bg-neutral-200 hover:scale-110 transition-all duration-300 opacity-60 hover:opacity-100">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 scale-110 group-hover:scale-100 grayscale hover:grayscale-0"
      ></div>
      {/* <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div> */}
    </div>
  );
};

export default HorizontalScrollCarousel;
