import Link from "next/link";
import CardList from "./card-list";

const Popular = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">Pilihan Populer</h1>
        <Link className="text-sm font-medium text-slate-500" href="/populer">
          lihat semua
        </Link>
      </div>
      <CardList />
    </div>
  );
};
export default Popular;
