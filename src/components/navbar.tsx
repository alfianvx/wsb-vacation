import {
  IconHome,
  IconHomeFill,
  IconPerson,
  IconPersonFill,
  IconSearch,
  IconSearchFill,
} from "@irsyadadl/paranoid";
import Link from "next/link";

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
    icon: IconPerson,
    icon_active: IconPersonFill,
    url: "/profile",
  },
];

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 z-50 flex items-center justify-center px-6 py-4 m-auto space-x-10 border rounded-lg backdrop-blur bottom-3 max-w-max">
      {navlinks.map((link) => (
        <Link className="" href={link.url} key={link.url}>
          <link.icon />
        </Link>
      ))}
    </nav>
  );
}
