import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between px-2 py-10 space-y-2 lg:flex-row">
      <h1 className="font-semibold text-lg">wonosobo@wisata.com</h1>
      <div className="flex items-center">
        <Button asChild variant="link" className="p-2">
          <Link href="/">beranda</Link>
        </Button>
        <Button asChild variant="link" className="p-2">
          <Link href="/about">tentang</Link>
        </Button>
        <Button asChild variant="link" className="p-2">
          <Link href="/contact">kontak</Link>
        </Button>
      </div>
    </footer>
  );
}
