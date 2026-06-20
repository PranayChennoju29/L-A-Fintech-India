import Navbar from "@/components/Navbar";
import CareerHero from "@/components/CareerHero";
import CareersSection from "@/components/CareersSection";



import Footer from "@/components/Footer"


export default function CareersPage() {
    return (
        <main>
            <Navbar />
            <CareerHero />
            <CareersSection />
            <section
                className="relative py-20 text-center bg-cover bg-center"
                style={{
                    backgroundImage: "url('/4.jpg')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#F3E8FF]/85"></div>

                {/* Content */}
                <div className="relative max-w-3xl mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                        Know Someone Perfect?
                    </h2>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                        We offer referral bonuses for successfully placed candidates.
                        Help your network find their dream role in fintech and get rewarded.
                    </p>

                    <div className="flex justify-center gap-4 mt-8 flex-wrap">
                        <button className="bg-[#8F1FC9] text-white px-6 py-3 rounded-md hover:bg-[#7a1aad] transition">
                            Refer a Friend
                        </button>
                    </div>
                </div>
            </section>
            <Footer />



        </main>
    );
}