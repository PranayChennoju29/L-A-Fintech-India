import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"

export default function TermsPage() {
    return (
        <main className="bg-[#F6F7F9] min-h-screen">

            <Navbar />

            <section className="max-w-4xl mx-auto px-6 py-20">

                {/* TOP */}
                <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
                    Legal Documentation
                </span>

                <h1 className="text-4xl font-bold text-gray-900 mt-4">
                    Terms & Conditions
                </h1>

                <p className="text-gray-500 mt-3 max-w-2xl">
                    Welcome to L & A Fintech India. These terms govern your use of our
                    recruitment platform and services. Please read them carefully.
                </p>

                <div className="w-16 h-1 bg-[#8F1FC9] mt-4 mb-12"></div>

                {/* 1 */}
                <div className="mb-10">
                    <h2 className="font-semibold text-gray-900">
                        <span className="text-[#8F1FC9] mr-2">1.</span> Acceptance of Terms
                    </h2>

                    <p className="text-gray-600 mt-3 leading-relaxed">
                        By accessing or using our platform, you agree to comply with these
                        Terms & Conditions. If you do not agree, you should not use our services.
                    </p>

                    <p className="text-gray-600 mt-2 leading-relaxed">
                        These terms constitute a legally binding agreement between you and
                        L & A Fintech India regarding your use of our website and services.
                    </p>
                </div>

                {/* 2 */}
                <div className="mb-10">
                    <h2 className="font-semibold text-gray-900">
                        <span className="text-[#8F1FC9] mr-2">2.</span> Scope of Services
                    </h2>

                    <p className="text-gray-600 mt-3">
                        L & A Fintech India provides recruitment services focused on IT and Non-IT roles.
                    </p>

                    <ul className="mt-3 text-gray-600 space-y-2">
                        <li>• Candidate sourcing and screening</li>
                        <li>• Resume shortlisting and job matching</li>
                        <li>• Interview coordination and hiring support</li>
                        <li>• Talent consulting and workforce solutions</li>
                    </ul>
                </div>

                {/* 3 */}
                <div className="mb-10">
                    <h2 className="font-semibold text-gray-900">
                        <span className="text-[#8F1FC9] mr-2">3.</span> User Responsibilities
                    </h2>

                    <p className="text-gray-600 mt-3">
                        Users must provide accurate and complete information while using our services.
                    </p>

                    <ul className="mt-3 text-gray-600 space-y-2">
                        <li>• Do not submit false or misleading information</li>
                        <li>• Maintain confidentiality of login credentials</li>
                        <li>• Use services only for lawful purposes</li>
                    </ul>
                </div>

                {/* 4 */}
                <div className="mb-10">
                    <h2 className="font-semibold text-gray-900">
                        <span className="text-[#8F1FC9] mr-2">4.</span> Limitation of Liability
                    </h2>

                    <p className="text-gray-600 mt-3 leading-relaxed">
                        L & A Fintech India shall not be held liable for any indirect,
                        incidental, or consequential damages arising from the use of our services.
                    </p>

                    <p className="text-gray-600 mt-2 leading-relaxed">
                        We do not guarantee job placement or employment outcomes.
                    </p>
                </div>

                {/* 5 */}
                <div className="mb-12">
                    <h2 className="font-semibold text-gray-900">
                        <span className="text-[#8F1FC9] mr-2">5.</span> Governing Law & Contact
                    </h2>

                    <p className="text-gray-600 mt-3">
                        These terms shall be governed by Indian laws. For any queries,
                        please contact us:
                    </p>

                    {/* CONTACT BOX */}
                    <div className="bg-[#F3E8FF] border border-gray-200 rounded-xl p-5 mt-4">

                        <p className="text-gray-700 text-sm">
                            support@la-fintech.in
                        </p>

                        <p className="text-gray-700 text-sm mt-1">
                            +91 (800) 123-4567
                        </p>

                    </div>

                </div>

                {/* Bottom Links */}
                <div className="text-center text-sm text-gray-400 mt-10">
                    <p>© 2025 L & A Fintech India</p>

                    <div className="flex justify-center gap-4 mt-2">
                        <span className="hover:text-[#8F1FC9] cursor-pointer">Terms of Service</span>
                        <span className="hover:text-[#8F1FC9] cursor-pointer">Privacy Policy</span>
                    </div>
                </div>

            </section>

            <Footer />

        </main>
    );
}