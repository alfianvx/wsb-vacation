import { getPlaceById } from "@/services/place/http";
import { IconClock, IconLocation, IconTicket } from "@irsyadadl/paranoid";
import ImageSlider from "@/components/templates/image-slider";

export default async function DetailPlace({ slug }: { slug: string }) {
  const place = await getPlaceById(slug);
  return (
    <main className="h-screen max-w-6xl px-1 mx-auto overflow-hidden">
      <ImageSlider gambar={place.gambar} />
      <div className="px-4 pt-4 pb-20">
        <div className="mb-5">
          <h1 className="mb-3 text-xl font-bold">{place.nama}</h1>
          <div className="flex items-center space-x-2">
            <IconLocation />
            <p>{place.alamat}</p>
          </div>
        </div>
        <div className="flex items-center mb-5 space-x-2">
          <div className="flex w-full py-1 space-x-1 border rounded-lg bg-stone-100">
            <div className="flex items-center p-3 max-h-max">
              <IconTicket />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-sm font-semibold">HTM</h1>
              <span className="text-xs">{place.harga_tiket}</span>
            </div>
          </div>
          <div className="flex w-full py-1 space-x-1 border rounded-lg bg-stone-100">
            <div className="flex items-center p-3 max-h-max">
              <IconClock />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold">Jam Operasional</p>
              <span className="text-xs">{place.jam_operasional}</span>
            </div>
          </div>
        </div>
        <div>
          <h1 className="mb-2 text-lg font-bold">Tentang</h1>
          <p className="text-pretty">{place.deskripsi}</p>
        </div>
      </div>
    </main>
  );
}
