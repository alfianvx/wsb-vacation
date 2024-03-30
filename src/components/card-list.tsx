import { places } from "@/data/place";
import { IconLocation } from "@irsyadadl/paranoid";
import Link from "next/link";
import React from "react";

export default function CardList() {
  return (
    <div className="flex flex-col py-4 space-y-3">
      {places.map((place, index) => (
        <div
          key={index}
          className="flex w-full space-x-4 border rounded-lg overflow-hidden"
        >
          <div className="w-20 h-20 bg-gradient-to-bl from-slate-400 to-slate-200"></div>
          <div className="py-2">
            <Link href={`/wisata/${place.name}`}>{place.name}</Link>
            <div className="flex items-center space-x-2 ">
              <IconLocation className="w-3 h-3" />
              <span className="text-xs">{place.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
