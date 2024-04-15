"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { RecommendPlace } from "@/constant/Place";

export default function CardSlider() {
  const settings = {
    centerMode: true,
    className: "center",
    centerPadding: "60px",
    autoplay: true,
    speed: 500,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    // variableWidth: true,
  };

  return (
    <Slider {...settings}>
      {RecommendPlace.map((place, index) => (
        <div
          className="p-4 rounded-lg w-52 h-72 bg-zinc-300/50 backdrop-blur-lg"
          key={index}
        >
          <div className="flex flex-col items-start justify-end h-full">
            <Link href={`/wisata/${place.name}`} className="mb-1 font-semibold">
              {place.name}
            </Link>
            <div className="flex items-center space-x-2">
              {place.categories.map((category, index) => (
                <div
                  key={index}
                  className="px-2 py-1 text-xs font-semibold rounded-full bg-white/50 text-zinc-700 backdrop-blur-lg"
                >
                  {category.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
