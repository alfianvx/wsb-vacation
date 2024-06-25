import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="relative z-10 w-11/12 py-10 mx-auto text-center max-w-max">
        <h1 className="max-w-2xl pb-3 mx-auto text-xl font-bold lg:text-4xl text-pretty dark:bg-gradient-to-b dark:from-white dark:to-black/80 dark:text-transparent bg-clip-text">
          Selamat Datang di Website Wonsobo Wisata
        </h1>
        <p className="text-sm text-pretty">
          Website ini dibuat untuk memudahkan anda dalam mencari informasi
          tempat wisata di Wonosobo. Semoga website ini dapat membantu anda
          dalam merencanakan perjalanan wisata anda.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center py-10">
        <h1 className="mb-10 text-lg font-semibold">Tim Kami</h1>
        <div className="flex flex-col items-center justify-center space-y-10 lg:space-y-0 lg:space-x-20 lg:flex-row">
          <div className="flex flex-col items-center justify-center space-y-3">
            <Image
              src="/profile/pandu.svg"
              alt="profile-pandu"
              width={0}
              height={0}
              className="w-32 lg:w-40"
            />
            <h1>Ahmad Pandu Subekti</h1>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <Image
              src="/profile/alfian.svg"
              alt="profile-alfian"
              width={0}
              height={0}
              className="w-32 lg:w-40"
            />
            <h1>Gus Jabung Al Fiansyah</h1>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <Image
              src="/profile/komeng.svg"
              alt="profile-qoni"
              width={0}
              height={0}
              className="w-32 lg:w-40"
            />
            <h1>Qonik Atul Mardiyah</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
