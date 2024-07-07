import Link from "next/link";
import Image from "next/image";

import Menu from "@/components/Menu";
import NavIcons from "@/components/NavIcons";
import Searchbar from "@/components/SearchBar";

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
        <div className="w-1/3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={24} height={24} />
            <div className="text-2xl tracking-wide">SHOP</div>
          </Link>
        </div>

        {/* Right */}
        <div className="flex w-2/3 items-center justify-between gap-8">
          <Searchbar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
