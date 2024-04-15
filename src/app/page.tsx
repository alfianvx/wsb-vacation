import Search from "@/components/search";
import Recommend from "@/components/recommend";
import Popular from "@/components/popular";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden overflow-y-auto">
      <section className="min-h-svh px-4 py-6">
        <h1 className="text-balance text-2xl leading-8 font-bold tracking-wide my-4">
          Cari Tempat Wisata di Wonosobo
        </h1>
        <Search />
        <Recommend />
        <Popular />
      </section>
    </main>
  );
}
