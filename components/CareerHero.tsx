import Image from "next/image";

export default function CareerHero() {
    return (
        <section className="relative py-28 overflow-hidden">

            {/* Background Image */}
            <Image
                src="/2.jpg" // place inside /public
                alt="Background"
                fill
                priority
                className="object-cover"
            />

            {/* Dark/Light Overlay (IMPORTANT for readability) */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />

            {/* Content */}
            <div className="relative max-w-5xl mx-auto px-6 text-center">

                {/* Tag */}
                <span className="inline-block bg-[#F3E8FF] text-[#8F1FC9] text-xs px-4 py-1 rounded-full font-medium tracking-wide">
                    Careers at L & A Fintech
                </span>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-6 leading-tight">
                    Join the Future of{" "}
                    <span className="text-[#8F1FC9]">Fintech Recruitment</span>
                </h1>

                {/* Description */}
                <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed text-lg">
                    We are more than a recruitment firm. We bridge the gap between
                    world-class talent and the next generation of financial technology.
                    Help us redefine how the world builds teams.
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-4 mt-10 flex-wrap">

                    <a
                        href="#jobs"
                        className="bg-[#8F1FC9] text-white px-7 py-3 rounded-full hover:bg-[#7a1aad] transition"
                    >
                        Explore Opportunities →
                    </a>

                    <a
                        href="#upload"
                        className="px-7 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-200 transition"
                    >
                        Upload Resume
                    </a>

                </div>

                {/* Stats */}
                <div className="flex justify-center gap-10 mt-14 text-sm text-gray-700 flex-wrap">

                    <div>
                        <p className="text-2xl font-semibold text-gray-900">50+</p>
                        <p>Hiring Partners</p>
                    </div>

                    <div>
                        <p className="text-2xl font-semibold text-gray-900">500+</p>
                        <p>Talent Placed</p>
                    </div>

                    <div>
                        <p className="text-2xl font-semibold text-gray-900">10+</p>
                        <p>Countries Served</p>
                    </div>

                </div>

            </div>
        </section>
    );
}