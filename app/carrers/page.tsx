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
            <section className="py-20 text-center bg-[#F3E8FF]">
                <div className="max-w-3xl mx-auto px-6">

                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                        Know Someone Perfect?
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 mt-4 leading-relaxed">
                        We offer referral bonuses for successfully placed candidates.
                        Help your network find their dream role in fintech and get rewarded.
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4 mt-8 flex-wrap">

                        <button className="bg-[#8F1FC9] text-white px-6 py-3 rounded-md hover:bg-[#7a1aad] transition">
                            Refer a Friend
                        </button>

                        {/* <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-100 transition">
                            View Open Job Board
                        </button> */}

                    </div>

                </div>
            </section>
            <Footer />



        </main>
    );
}