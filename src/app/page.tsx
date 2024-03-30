import { IconBarsThree3, IconBell, IconLocation } from "@irsyadadl/paranoid";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardSlider from "@/components/card-slider";
import CardList from "@/components/card-list";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden overflow-y-auto">
      <section className="h-screen px-4 py-6">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <span className="text-xs">Lokasi saat ini</span>
            <div className="flex items-center space-x-1">
              <IconLocation className="w-4" />{" "}
              <p className="text-sm">Jakarta, Indonesia</p>
            </div>
          </div>
          <button className="p-1">
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
        {/* REKOMENDASI USER */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-bold">Rekomendasi</h1>
            <Link
              className="text-sm font-medium text-slate-500"
              href="/rekomendasi"
            >
              lihat semua
            </Link>
          </div>
          <CardSlider />
        </div>
        {/* PILIHAN POPULER */}
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold">Pilihan Populer</h1>
            <Link
              className="text-sm font-medium text-slate-500"
              href="/populer"
            >
              lihat semua
            </Link>
          </div>
          <CardList />
        </div>
      </section>
    </main>
  );
}
