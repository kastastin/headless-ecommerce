import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

import Menu from "@/components/Menu";
import Searchbar from "@/components/SearchBar";

const NavIcons = dynamic(() => import("@/components/NavIcons"), { ssr: false });

const Navbar = () => {
  return (
    <div className="relative h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Mobile */}
      <div className="flex h-full items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">SHOP</div>
        </Link>
        <Menu />
      </div>

      {/* Bigger screens */}
      <div className="hidden h-full items-center justify-between gap-8 md:flex">
        {/* Left */}
        <div className="flex w-1/3 items-center gap-12 xl:w-1/2">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={24} height={24} />
            <div className="text-2xl tracking-wide">SHOP</div>
          </Link>
          <div className="hidden gap-4 xl:flex">
            <Link href="/">Homepage</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deal</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex w-2/3 items-center justify-between gap-8 xl:w-1/2">
          <Searchbar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
