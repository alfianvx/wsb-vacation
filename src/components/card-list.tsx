import { Places } from "@/constant/Place";
import { IconLocation } from "@irsyadadl/paranoid";
import Link from "next/link";
import React from "react";

export default function CardList() {
  return (
    <div className="flex flex-col pt-4 pb-12 space-y-3">
      {Places.map((place, index) => (
        <div
          key={index}
          className="flex items-center w-full p-2 space-x-4 overflow-hidden rounded-lg"
        >
          <div className="w-20 h-20 rounded-lg bg-gradient-to-bl from-zinc-300 to-zinc-200"></div>
          <div className="flex flex-col space-y-1">
            <Link
              className="text-lg font-semibold text-balance"
              href={`/wisata/${place.name}`}
            >
              {place.name}
            </Link>
            <div className="flex items-center space-x-2">
              <IconLocation className="w-3 h-3" />
              <span className="text-xs">{place.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
