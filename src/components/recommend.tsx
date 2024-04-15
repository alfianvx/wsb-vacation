import Link from "next/link";
import CardSlider from "./card-slider";

const Recommend = () => {
  return (
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
  );
};
export default Recommend;
