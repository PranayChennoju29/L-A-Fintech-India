import Navbar from "@/components/Navbar";
import { Linkedin, Twitter, Mail, FileCheck, Shield, Lock } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer"


export default function PrivacyPolicy() {
    return (
        <main className="bg-[#F6F7F9] min-h-screen">

            <Navbar />

            <section className="max-w-4xl mx-auto px-6 py-20">

                {/* TOP */}
                <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
                    Legal Documentation
                </span>

                <h1 className="text-4xl font-bold text-gray-900 mt-4">
                    Privacy Policy
                </h1>

                <p className="text-sm text-gray-500 mt-2">
                    Last updated: October 24, 2025
                </p>

                <div className="w-16 h-1 bg-[#8F1FC9] mt-4 mb-12"></div>

                {/* 01 Introduction */}
                <div className="mb-10">
                    <h2 className="text-lg font-semibold text-gray-900">
                        <span className="text-[#8F1FC9] mr-2">01</span> Introduction
                    </h2>

                    <p className="text-gray-600 mt-3 leading-relaxed">
                        At L & A Fintech India ("we", "us", or "our"), we are committed to protecting your privacy.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                        when you use our website and recruitment services.
                    </p>

                    <p className="text-gray-600 mt-2 leading-relaxed">
                        As a fintech-driven recruitment firm, we handle sensitive personal and professional data.
                        We adhere to applicable data protection laws in India and global standards where applicable.
                    </p>
                </div>

                {/* 02 Information */}
                <div className="mb-10">
                    <h2 className="text-lg font-semibold text-gray-900">
                        <span className="text-[#8F1FC9] mr-2">02</span> Information We Collect
                    </h2>

                    <ul className="mt-3 space-y-2 text-gray-600">
                        <li>• Personal details (name, email, phone number, address)</li>
                        <li>• Professional data (resume, experience, skills, certifications)</li>
                        <li>• Identity verification (if required for certain roles)</li>
                        <li>• Usage data (IP address, browser, cookies)</li>
                    </ul>
                </div>

                {/* 03 Use Data */}
                <div className="mb-10">
                    <h2 className="text-lg font-semibold text-gray-900">
                        <span className="text-[#8F1FC9] mr-2">03</span> How We Use Your Data
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-4 mt-4">

                        <div className="bg-white border rounded-xl p-4 flex gap-3">
                            <Shield className="text-[#8F1FC9]" size={18} />
                            <p className="text-sm text-gray-600">
                                Match candidates with relevant job opportunities
                            </p>
                        </div>

                        <div className="bg-white border rounded-xl p-4 flex gap-3">
                            <FileCheck className="text-[#8F1FC9]" size={18} />
                            <p className="text-sm text-gray-600">
                                Verify credentials and conduct background checks
                            </p>
                        </div>

                        <div className="bg-white border rounded-xl p-4 flex gap-3">
                            <Lock className="text-[#8F1FC9]" size={18} />
                            <p className="text-sm text-gray-600">
                                Ensure platform security and prevent fraud
                            </p>
                        </div>

                        <div className="bg-white border rounded-xl p-4 flex gap-3">
                            <FileCheck className="text-[#8F1FC9]" size={18} />
                            <p className="text-sm text-gray-600">
                                Comply with legal and regulatory requirements
                            </p>
                        </div>

                    </div>
                </div>

                {/* 04 Cookies */}
                <div className="mb-10">
                    <h2 className="text-lg font-semibold text-gray-900">
                        <span className="text-[#8F1FC9] mr-2">04</span> Cookies & Tracking
                    </h2>

                    <p className="text-gray-600 mt-3 leading-relaxed">
                        We use cookies and similar technologies to improve your browsing experience,
                        analyze traffic, and personalize content. You may disable cookies in your browser settings,
                        but some features may not function properly.
                    </p>
                </div>

                {/* 05 Rights */}
                <div className="mb-12">
                    <h2 className="text-lg font-semibold text-gray-900">
                        <span className="text-[#8F1FC9] mr-2">05</span> User Rights & Control
                    </h2>

                    <ul className="mt-3 space-y-2 text-gray-600">
                        <li>• Right to Access: Request a copy of your data</li>
                        <li>• Right to Rectification: Correct inaccurate data</li>
                        <li>• Right to Erasure: Delete your data</li>
                        <li>• Right to Object: Opt-out of certain data processing</li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div className="bg-[#F3E8FF] border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

                    {/* LEFT */}
                    <div>
                        <h3 className="font-semibold text-gray-900 text-lg">
                            Questions about our privacy?
                        </h3>

                        <p className="text-gray-600 text-sm mt-2 max-w-md">
                            Our Data Protection Officer is here to help you understand how L & A Fintech India handles your sensitive information.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="text-sm text-gray-700 space-y-2">

                        <div className="flex items-center gap-2">
                            <span className="text-[#FF6A2B]">✉</span>
                            <span>privacy@la-fintech.in</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-[#FF6A2B]">📞</span>
                            <span>+91 (800) 123-4567</span>
                        </div>

                    </div>

                </div>
                <div className=" pt-6 text-center text-sm text-gray-400">

                    {/* Copyright */}
                    <p>
                        L & A Fintech India is a registered entity. © 2025 All Rights Reserved.
                    </p>

                    {/* Links */}
                    <div className="mt-2 flex justify-center gap-4 text-gray-400">
                        <span className="hover:text-[#8F1FC9] cursor-pointer">Terms of Service</span>
                        <span className="hover:text-[#8F1FC9] cursor-pointer">Home</span>
                    </div>

                </div>
            </section>

            {/* FOOTER */}
            <Footer />


        </main>
    );
}