"use client";
import {
  IconBarsThree3,
  IconBell,
  IconLocation,
  IconMailNotify,
} from "@irsyadadl/paranoid";
import Slider from "react-slick";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const places = [
  {
    name: "Tempat 1",
    location: "alamat",
  },
  {
    name: "Tempat 2",
    location: "alamat",
  },
  {
    name: "Tempat 3",
    location: "alamat",
  },
  {
    name: "Tempat 4",
    location: "alamat",
  },
  {
    name: "Tempat 5",
    location: "alamat",
  },
  {
    name: "Tempat 6",
    location: "alamat",
  },
];

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  centerPadding: "40px",
  arrows: false,
  rows: 1,
  slidesPerRow: 1,
  slidesToShow: 1,
};

export default function Home() {
  return (
    <main className="relative overflow-x-hidden overflow-y-auto">
      <section className="h-screen px-4 py-6">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-5">
          <button className="p-1 border rounded-full">
            <IconBarsThree3 />
          </button>
          <div className="text-center">
            <span className="text-xs text-slate-400">Lokasi saat ini</span>
            <div className="flex items-center space-x-1">
              <IconLocation className="w-4" />{" "}
              <p className="text-sm">Jakarta, Indonesia</p>
            </div>
          </div>
          <button className="p-1 border rounded-full">
            <IconBell />
          </button>
        </div>
        {/* CARI TEMPAT */}
        <div className="mb-5">
          <input
            className="w-full p-3 border rounded-md"
            type="text"
            placeholder="cari ..."
          />
        </div>
        {/* PILIHAN USER */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-4">
            <h1>Pilihan untuk kamu</h1>
            <Link href={""}>lihat semua</Link>
          </div>
          <section className="">
            <Slider {...settings}>
              {places.map((place, index) => (
                <div
                  className="my-6 bg-white border rounded-lg max-w-max"
                  key={index}
                >
                  <div className="w-56 h-60 bg-slate-200"></div>
                  <div className="flex flex-col items-center py-3">
                    <h1 className="mb-1">{place.name}</h1>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">{place.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </section>
        </div>
        {/* PILIHAN POPULER */}
        <div>
          <div className="flex items-center justify-between">
            <h1>Pilihan Populer</h1>
            <Link href={""}>lihat semua</Link>
          </div>
          <section className="flex flex-col py-4 space-y-3">
            {places.map((place, index) => (
              <div
                key={index}
                className="flex w-full p-3 space-x-4 border rounded-lg"
              >
                <div className="w-20 h-20 rounded-lg bg-slate-200"></div>
                <div>
                  <Link href={`/wisata/${place.name}`}>{place.name}</Link>
                  <div className="flex items-center space-x-2">
                    <IconLocation className="w-3 h-3" />
                    <span className="text-xs">{place.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}
