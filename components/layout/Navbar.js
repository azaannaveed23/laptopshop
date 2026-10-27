"use client";
import { useState } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { LaptopLogoIcon, WhatsAppIcon } from "@/components/ui/Icons";
import Searchbar from "./Searchbar";
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);
    return (<header id="navbar" className="sticky top-0 z-40 bg-bblue text-white shadow-md border-b border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-12 h-12 rounded-xl bg-byellow flex items-center justify-center text-slate-900 shadow-md group-hover:scale-105 transition">
              <LaptopLogoIcon className="w-6 h-6"/>
            </div>
            <div className="leading-tight">
              <p className="font-display font-black text-lg sm:text-xl tracking-tight text-white uppercase">{siteConfig.name}</p>
              <p className="text-[11px] text-byellow font-bold tracking-widest uppercase">{siteConfig.tagline}</p>
            </div>
          </Link>

          {/* Search (desktop & tablet) */}
          <Searchbar variant="desktop"/>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-sm text-white/95">
            {navLinks.map((link) => (<Link key={link.href} href={link.href} className="nav-link hover:text-byellow">
                {link.label}
              </Link>))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={whatsappUrl("Hi, I have an inquiry regarding laptops.")} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-2 bg-byellow hover:bg-byellowHover text-slate-900 font-bold text-sm px-5 py-2.5 rounded-full shadow transition hover:scale-105">
              <WhatsAppIcon className="w-4 h-4"/>
              WhatsApp
            </a>

            {/* Mobile menu hamburger */}
            <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu" aria-expanded={menuOpen} aria-controls="mobileMenu" className="xl:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white focus:outline-none">
              <span className="w-6 h-0.5 bg-white block"/>
              <span className="w-6 h-0.5 bg-white block"/>
              <span className="w-6 h-0.5 bg-white block"/>
            </button>
          </div>
        </div>

        {/* Mobile search row */}
        <Searchbar variant="mobile"/>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (<div id="mobileMenu" className="xl:hidden bg-bblueDark text-white border-t border-blue-800 px-6 py-5 space-y-4 text-sm font-semibold">
          {navLinks.map((link) => (<Link key={link.href} href={link.href} onClick={closeMenu} className="block hover:text-byellow">
              {link.label}
            </Link>))}
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="block text-center bg-byellow text-slate-900 font-bold py-2.5 rounded-full mt-2">
            Chat on WhatsApp
          </a>
        </div>)}
    </header>);
}
