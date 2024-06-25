"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ImageSlider({ gambar }: { gambar: string[] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {gambar.map((image, i) => (
        <div key={i} className="p-5">
          <Image
            loading="lazy"
            src={image}
            alt="gambar"
            width={380}
            height={400}
            quality={100}
            className="object-cover mx-auto"
          />
        </div>
      ))}
    </Slider>
  );
}
