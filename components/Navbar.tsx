"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  ChevronDown,
  X,
  Globe,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 h-16 sm:h-20 transition-all duration-300",
          scrolled
            ? "bg-black/55 backdrop-blur-md border-b border-poetry/20"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto h-full max-w-360 px-4 sm:px-6">
          <div className="flex h-full items-center justify-between">
            {/* LEFT */}
            <div className="flex items-center gap-3 sm:gap-6">
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="inline-flex items-center gap-2 sm:gap-3 text-poetry/90 hover:text-poetry transition"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
                {/* Hide MENU text on mobile */}
                <span className="hidden sm:inline text-[13px] tracking-[0.22em] uppercase">
                  Menu
                </span>
              </button>

              {/* Search text icon stays, but tighter on mobile */}
              <button
                type="button"
                className="text-poetry/90 hover:text-poetry transition"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3 sm:gap-6">
              {/* Icons */}
              <IconLink href="/wishlist" label="Wishlist">
                <Heart className="h-5 w-5" />
              </IconLink>

              <IconLink href="/cart" label="Cart">
                <ShoppingBag className="h-5 w-5" />
              </IconLink>

              <IconLink href="/account" label="Account">
                <User className="h-5 w-5" />
              </IconLink>

              {/* Language dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setLangOpen((v) => !v)}
                  className="inline-flex items-center gap-2 text-poetry/90 hover:text-poetry transition"
                  aria-label="Language"
                >
                  {/* Mobile: globe icon only */}
                  <Globe className="h-5 w-5 sm:hidden" />

                  {/* Desktop: English + chevron */}
                  <span className="hidden sm:inline text-[13px] tracking-[0.22em] uppercase">
                    English
                  </span>
                  <ChevronDown className="hidden sm:inline h-4 w-4 opacity-90" />
                </button>

                {langOpen && (
                  <div className="absolute right-0 mt-3 w-44 overflow-hidden rounded-xl bg-black/80 backdrop-blur-md shadow-luxe ring-1 ring-poetry/20">
                    {["English", "Arabic"].map((item) => (
                      <button
                        key={item}
                        type="button"
                        className="w-full px-4 py-3 text-left text-[13px] tracking-[0.12em] uppercase text-poetry/90 hover:text-poetry hover:bg-white/10 transition"
                        onClick={() => setLangOpen(false)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer overlay */}
      <div
        className={[
          "fixed inset-0 z-60 transition",
          drawerOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        {/* Dim */}
        <div
          className={[
            "absolute inset-0 bg-black/60 transition-opacity duration-300",
            drawerOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={() => setDrawerOpen(false)}
        />

        {/* Panel */}
        <aside
          className={[
            "absolute left-0 top-0 h-full w-[86%] max-w-85",
            "bg-black/85 backdrop-blur-md",
            "transition-transform duration-300",
            drawerOpen ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between px-5 h-16 sm:h-20 border-b border-poetry/20">
            <span className="text-[13px] tracking-[0.22em] uppercase text-poetry/90">
              Menu
            </span>
            <button
              aria-label="Close menu"
              className="text-poetry/90 hover:text-poetry transition"
              onClick={() => setDrawerOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="px-5 py-6 space-y-4">
            <DrawerLink href="/">Home</DrawerLink>
            <DrawerLink href="#collections">Collections</DrawerLink>
            <DrawerLink href="/bar">Bar Accessories</DrawerLink>
            <DrawerLink href="/gifting">Gifting</DrawerLink>
            <DrawerLink href="#about">About</DrawerLink>
            <DrawerLink href="#contact">Contact</DrawerLink>
          </nav>

          <div className="px-5 pt-2 text-xs text-poetry/70">
            Poetry Dubai — Silver, styled quietly.
          </div>
        </aside>
      </div>
    </>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="text-poetry/90 hover:text-poetry transition"
    >
      {children}
    </Link>
  );
}

function DrawerLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block text-[13px] tracking-[0.22em] uppercase text-poetry/90 hover:text-poetry transition"
    >
      {children}
    </Link>
  );
}
