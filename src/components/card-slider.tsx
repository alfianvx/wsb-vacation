"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { places } from "@/data/place";
import Link from "next/link";

export default function CardSlider() {
  const settings = {
    centerMode: true,
    className: "center",
    centerPadding: "60px",
    slidesToShow: 1,
  };

  return (
    <Slider {...settings}>
      {places.map((place, index) => (
        <div
          className="p-4 w-52 border rounded-lg h-60 bg-gradient-to-bl from-slate-400 to-slate-200"
          key={index}
        >
          <div className="flex flex-col items-start justify-end h-full">
            <Link href={`/wisata/${place.name}`} className="mb-1 font-semibold">
              {place.name}
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-xs">{place.location}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
