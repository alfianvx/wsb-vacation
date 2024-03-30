import CardList from "@/components/card-list";

export default function Search() {
  return (
    <div className="w-full h-screen px-4 py-6">
      <h1 className="text-lg font-bold mb-5">Cari Wisata</h1>
      <div className="mb-3">
        <input
          className="w-full p-3 border rounded-md"
          type="text"
          placeholder="cari ..."
        />
      </div>
      <h1>Paling Populer</h1>
      <CardList />
    </div>
  );
}
