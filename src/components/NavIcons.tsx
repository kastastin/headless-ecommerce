"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import CartModal from "@/components/CartModal";
import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import useToggleVisibility from "@/hooks/useToggleVisibility";

const NavIcons = () => {
  const router = useRouter();
  const wixClient = useWixClient();
  const { counter, getCart } = useCartStore();

  const isLoggedIn = wixClient.auth.loggedIn();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);

  const {
    iconRef: cartIconRef,
    contentRef: cartContentRef,
    isVisible: isCartOpen,
    toggleVisibility: toggleCart,
  } = useToggleVisibility();

  const {
    iconRef: profileIconRef,
    contentRef: profileContentRef,
    isVisible: isProfileOpen,
    toggleVisibility: toggleProfile,
  } = useToggleVisibility();

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      toggleProfile();
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    setIsLoading(false);

    toggleProfile();
    router.push(logoutUrl);
  };

  return (
    <div className="relative flex items-center gap-4 xl:gap-6">
      <div ref={profileIconRef} className="cursor-pointer">
        <Image
          src="/profile.png"
          alt="Profile"
          width={22}
          height={22}
          onClick={handleProfile}
        />
      </div>

      {isProfileOpen && (
        <div
          ref={profileContentRef}
          className="absolute left-0 top-12 z-20 rounded-md bg-white p-4 text-sm shadow-custom"
        >
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer" onClick={handleLogout}>
            {isLoading ? "Logging out" : "Logout"}
          </div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt="Notification"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div
        ref={cartIconRef}
        className="relative cursor-pointer"
        onClick={toggleCart}
      >
        <Image
          src="/cart.png"
          alt="Cart"
          width={22}
          height={22}
          className="cursor-pointer"
        />
        <div className="absolute -right-4 -top-4 flex size-6 items-center justify-center rounded-full bg-red-400 text-sm text-white">
          {counter}
        </div>
      </div>
      {isCartOpen && <CartModal ref={cartContentRef} />}
    </div>
  );
};

export default NavIcons;
