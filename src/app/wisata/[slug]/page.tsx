import {
  IconClock,
  IconLocation,
  IconMap,
  IconTicket,
} from "@irsyadadl/paranoid";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main>
      <div className="w-full h-72 bg-slate-50"></div>
      <div className="px-4 pt-4 pb-20">
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <h1>{params.slug}</h1>
            <div className="flex items-center space-x-1">
              <IconTicket className="w-4" />
              <span className="text-xs">Rp. 20.000 / orang</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <IconLocation />
            <p>Curug Sikarim, Garung.</p>
          </div>
        </div>
        <div className="flex items-center mb-5 space-x-2">
          <div className="flex w-full py-1 space-x-2 border rounded-lg">
            <div className="flex items-center p-3 max-h-max">
              <IconMap />
            </div>
            <div>
              <p className="font-semibold">Jarak</p>
              <span className="text-xs">3KM dari Kota</span>
            </div>
          </div>
          <div className="flex w-full py-1 space-x-2 border rounded-lg">
            <div className="flex items-center p-3 max-h-max">
              <IconClock />
            </div>
            <div>
              <p className="font-semibold">Buka</p>
              <span className="text-xs">06:00 - 17:00</span>
            </div>
          </div>
        </div>
        <div>
          <h1 className="mb-2 text-lg font-bold">Tentang</h1>
          <p className="text-pretty">
            Curug Sikarim adalah salah satu air terjun yang berada di Garung,
            Banyumas. Air terjun ini memiliki ketinggian sekitar 20 meter dan
            memiliki kolam yang cukup luas. Air terjun ini memiliki air yang
            jernih dan sejuk. Air terjun ini memiliki akses yang cukup mudah dan
            tidak terlalu jauh dari jalan raya. Air terjun ini memiliki
            pemandangan yang indah dan cocok untuk berlibur bersama keluarga.
          </p>
        </div>
      </div>
    </main>
  );
}
