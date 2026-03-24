import { Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#F5F7FA] border-t border-gray-300 pt-10 pb-8">
            <div className="max-w-7xl mx-auto px-6">

                {/* TOP GRID */}
                <div className="grid md:grid-cols-4 gap-10">

                    {/* Logo + Text */}
                    <div>
                        <Link href="/" className="flex items-center gap-3 text-[#8F1FC9] font-semibold text-lg">
                            <Image
                                src="/LogoBg.png"
                                alt="L & A Fintech India"
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                            L & A Fintech India
                        </Link>

                        <p className="text-gray-600 text-sm mt-4 max-w-xs">
                            Established 2025. Leading the future of IT and Non-IT recruitment
                            with fintech-driven efficiency.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Company</h4>

                        <div className="space-y-2 text-sm text-gray-600">
                            <Link href="#vision" className="block hover:text-[#8F1FC9]">
                                About Us
                            </Link>
                            <Link href="/carrers" className="block hover:text-[#8F1FC9]">
                                Careers
                            </Link>
                            <Link href="/#services" className="block hover:text-[#8F1FC9]">
                                What We Do
                            </Link>
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>

                        <div className="space-y-2 text-sm text-gray-600">
                            <Link href="/privacy-policy" className="block hover:text-[#8F1FC9]">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="block hover:text-[#8F1FC9]">
                                Terms & Conditions
                            </Link>
                            {/* <Link href="/cookies-policy" className="block hover:text-[#8F1FC9]">
                                Cookies Policy
                            </Link> */}
                        </div>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>

                        <div className="flex items-center gap-4 text-gray-600">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="hover:text-[#8F1FC9]" size={18} />
                            </a>

                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Twitter className="hover:text-[#8F1FC9]" size={18} />
                            </a>

                            <a href="mailto:info@la-fintech.in">
                                <Mail className="hover:text-[#8F1FC9]" size={18} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">

                    <p>
                        © 2025 L & A Fintech India. All rights reserved.
                    </p>

                    {/* ✅ Added Legal Links */}
                    <div className="flex gap-4">
                        <Link href="/terms" className="hover:text-[#8F1FC9]">
                            Terms
                        </Link>
                        <Link href="/privacy-policy" className="hover:text-[#8F1FC9]">
                            Privacy
                        </Link>
                        {/* <Link href="/cookies-policy" className="hover:text-[#8F1FC9]">
                            Cookies
                        </Link> */}
                    </div>

                </div>

            </div>
        </footer>
    );
}