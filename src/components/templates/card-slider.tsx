"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { Place } from "@/types/place";

export default function CardSlider({ places }: { places: Place[] }) {
  const settings = {
    centerMode: true,
    className: "center",
    centerPadding: "60px",
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
  };

  return (
    <Slider {...settings}>
      {places.map((place, i) => (
        <div
          className={`p-4 border rounded-lg w-52 h-72 bg-cover bg-no-repeat bg-[url(/mountain.jpg)] bg-center `}
          key={i}
        >
          <div className="flex flex-col items-start justify-end h-full">
            <Link
              href={`/detail-wisata/${place.id}`}
              className="mb-1 font-semibold text-white hover:text-white/80 transition-all duration-300 ease-in-out text-lg"
            >
              {place.nama}
            </Link>
            <div className="flex items-center space-x-2">
              <div className="px-2 py-1 text-xs font-semibold rounded-full bg-white/50 text-stone-90000 backdrop-blur-lg">
                gunung
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
