"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/LogoBg.png"
                        alt="L & A Fintech India"
                        width={36}
                        height={36}
                        className="object-contain"
                    />

                    <span className="text-[#8F1FC9] font-semibold text-lg">
                        L & A Fintech India
                    </span>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex gap-8 text-gray-700">
                    <Link href="/" className="hover:text-[#8F1FC9]">Home</Link>
                    <Link href="#vision" className="hover:text-[#8F1FC9]">About</Link>
                    <Link href="#services" className="hover:text-[#8F1FC9]">Services</Link>
                    <Link href="#careers" className="hover:text-[#8F1FC9]">Careers</Link>
                    <Link href="#contact" className="hover:text-[#8F1FC9]">Contact</Link>
                </div>

                {/* CTA Button */}
                <button className="bg-[#8F1FC9] text-white px-5 py-2 rounded-lg hover:bg-[#7a1aad] transition">
                    Hire Talent
                </button>

            </div>
        </nav>
    );
}