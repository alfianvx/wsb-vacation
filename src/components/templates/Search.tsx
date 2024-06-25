"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import {
  IconLoader,
  IconLoader2,
  IconSearch,
  IconSparklesThree,
  IconTrendingChart3,
} from "@irsyadadl/paranoid";
import { Separator } from "@/components/ui/separator";
import { useDebounce } from "@uidotdev/usehooks";
import Link from "next/link";
import { getPlaceByName } from "@/services/place/http";
import { Place } from "@/types/place";
import React from "react";
import { trending } from "@/constant/trending";

export function Search() {
  const [open, setOpen] = React.useState(false);
  const [keyword, setKeyword] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [result, setResult] = React.useState<Place[]>([]);
  const debouncedKeyword = useDebounce(keyword, 300);

  React.useEffect(() => {
    let results: Place[] = [];
    const searchPlaces = async () => {
      setIsSearching(true);
      if (debouncedKeyword) {
        const data = await getPlaceByName(debouncedKeyword.toLowerCase());
        results = data;
      }
      setIsSearching(false);
      setResult(results);
    };

    searchPlaces();
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [debouncedKeyword]);

  return (
    <div className="flex justify-center mt-10 mb-12">
      <Button
        variant="secondary"
        className="px-3 rounded-full"
        size="lg"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2 w-[330px] lg:w-[600px]">
          <div className="flex h-5 items-center gap-2">
            <IconSearch className="h-5 w-5 opacity-50" />
            <Separator orientation="vertical" />
          </div>
          <p className="opacity-50 text-zinc-500 font-normal">
            Cari tempat yang ingin kamu kunjungi...
          </p>
        </div>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="flex items-center border-b px-3">
          <IconSearch className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <div className="flex justify-between items-center w-full">
            <input
              placeholder="Masukkan nama tempat... "
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
        </div>

        <CommandList>
          {isSearching ? (
            <CommandItem className="flex justify-center py-2">
              <IconLoader2 className="animate-spin" />
            </CommandItem>
          ) : result.length === 0 ? (
            <CommandEmpty>
              <span className="text-muted-foreground">
                Pencarian untuk &quot;{keyword}&quot; tidak ditemukan.
              </span>
            </CommandEmpty>
          ) : (
            <CommandGroup heading="Hasil pencarian">
              {result.map((place) => (
                <Link href={`/detail-wisata/${place.id}`} key={place.id}>
                  <CommandItem className="cursor-pointer">
                    <IconSparklesThree className="mr-2 h-4 w-4" />
                    <span>{place.nama}</span>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          )}
          {keyword === "" && !isSearching && (
            <CommandGroup heading="Pencarian poluler">
              {trending.map((place, i) => (
                <Link href={place.link} key={i}>
                  <CommandItem className="cursor-pointer">
                    <IconTrendingChart3 className="mr-2 h-4 w-4" />
                    <span>{place.name}</span>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </div>
  );
}
