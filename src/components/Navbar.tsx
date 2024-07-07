import Link from "next/link";
import Image from "next/image";

import { Menu } from "@/components/Menu";

const Navbar = () => {
  return (
    <div className="relative h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Mobile */}
      <div className="flex h-full items-center justify-between">
        <Link href="/">
          <div className="text-2xl tracking-wide">SHOP</div>
        </Link>
        <Menu />
      </div>

      {/* Bigger screens */}
      <div className="hidden h-full items-center justify-between gap-8 md:flex">
        {/* Left */}
        <div className="w-1/3">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={24} height={24} />
            <div className="text-2xl tracking-wide">SHOP</div>
          </Link>
        </div>

        {/* Right */}
        <div className="w-2/3"></div>
      </div>
    </div>
  );
};

export default Navbar;
