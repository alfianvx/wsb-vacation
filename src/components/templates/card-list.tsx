import { getPlaces } from "@/services/place/http";
import { IconLocation } from "@irsyadadl/paranoid";
import Image from "next/image";
import Link from "next/link";

export default async function CardList() {
  const data = await getPlaces();
  return (
    <div className="flex flex-col space-y-3">
      {data.map((place, index: number) => (
        <div
          key={index}
          className="flex items-center w-full p-2 space-x-4 overflow-hidden rounded-lg"
        >
          {place.gambar.length !== 0 ? (
            <Image
              width={80}
              height={100}
              loading="lazy"
              className="rounded-lg w-20 h-20 bg-cover bg-center"
              src={place.gambar[0]}
              alt={place.nama}
            />
          ) : (
            <div className="w-20 h-20 rounded-lg bg-stone-100"></div>
          )}
          <div className="flex flex-col space-y-1">
            <Link
              className="text-lg font-semibold text-balance"
              href={`/detail-wisata/${place.id}`}
            >
              {place.nama}
            </Link>
            <div className="flex items-center space-x-2">
              <IconLocation className="w-3 h-3" />
              <span className="text-xs">{place.alamat}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
