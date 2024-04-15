"use client";

import {
  IconCircleInfo,
  IconCircleInfoFill,
  IconHome,
  IconHomeFill,
  IconSearch,
  IconSearchFill,
} from "@irsyadadl/paranoid";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  {
    icon: IconHome,
    icon_active: IconHomeFill,
    url: "/",
  },
  {
    icon: IconSearch,
    icon_active: IconSearchFill,
    url: "/search",
  },
  {
    icon: IconCircleInfo,
    icon_active: IconCircleInfoFill,
    url: "/about",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed left-0 right-0 z-50 flex items-center justify-center px-6 py-4 m-auto space-x-10 border rounded-lg backdrop-blur bottom-3 max-w-max">
      {navlinks.map((link) => (
        <Link href={link.url} key={link.url}>
          {pathname === link.url ? <link.icon_active /> : <link.icon />}
        </Link>
      ))}
    </nav>
  );
}
