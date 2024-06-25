import Image from "next/image";
import { Search } from "@/components/templates/Search";
import Recommend from "@/components/pages/Recommend";
import Popular from "@/components/pages/Popular";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-5 pt-14">
        <Image
          src="/binoculars.svg"
          alt="wsb-logo"
          width={0}
          height={0}
          className="w-32 lg:w-60"
        />
        <h1 className="text-center text-stone-700 text-xl lg:text-2xl font-bold">
          Mau main ke mana hari ini ?
        </h1>
      </div>
      <Search />
      <Recommend />
      <Popular />
    </>
  );
}
