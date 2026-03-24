import {
    Code,
    TrendingUp,
    Users,
    Handshake,
    Palette,
    Server,
    UploadCloud,
    ShieldCheck
} from "lucide-react";

export default function CareersSection() {
    return (
        <section id="jobs" className="py-24 bg-[#F6F7F9]">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

                {/* LEFT SIDE */}
                <div className="md:col-span-2">

                    {/* Label */}
                    <p className="text-xs tracking-widest text-[#8F1FC9] font-semibold">
                        EXPLORE OPPORTUNITIES
                    </p>

                    {/* Heading */}
                    <h2 className="text-3xl font-semibold text-gray-900 mt-2">
                        Open Role Categories
                    </h2>

                    {/* Description */}
                    <p className="text-gray-500 mt-3 max-w-xl">
                        We specialize in IT and Non-IT recruitment for the fintech sector.
                        Browse our primary categories to see where your skills fit best.
                    </p>

                    {/* CATEGORY CARDS */}
                    <div className="grid sm:grid-cols-2 gap-6 mt-10">

                        {[
                            {
                                title: "Engineering & Dev",
                                icon: <Code size={20} />,
                                tags: ["Frontend", "Backend", "Mobile"],
                            },
                            {
                                title: "Fintech Strategy",
                                icon: <TrendingUp size={20} />,
                                tags: ["Analytics", "Risk", "Growth"],
                            },
                            {
                                title: "Operations & HR",
                                icon: <Users size={20} />,
                                tags: ["People Ops", "Recruitment"],
                            },
                            {
                                title: "Sales & Partnerships",
                                icon: <Handshake size={20} />,
                                tags: ["B2B Sales", "Accounts"],
                            },
                            {
                                title: "Product Design",
                                icon: <Palette size={20} />,
                                tags: ["UI/UX", "Research"],
                            },
                            {
                                title: "Core Infrastructure",
                                icon: <Server size={20} />,
                                tags: ["DevOps", "Cloud"],
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-200 rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                            >
                                {/* ICON */}
                                <div className="w-10 h-10 flex items-center justify-center bg-[#F3E8FF] text-[#8F1FC9] rounded-lg mb-4">
                                    {item.icon}
                                </div>

                                <h3 className="font-semibold text-gray-900">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-500 mt-2">
                                    Explore roles in {item.title.toLowerCase()}.
                                </p>

                                {/* TAGS */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {item.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* WHY JOIN (UPDATED) */}
                    <div className="bg-white/70 backdrop-blur border border-gray-200 rounded-2xl p-6 mt-12 relative overflow-hidden hover:shadow-md transition">

                        {/* Watermark */}
                        <div className="absolute right-4 bottom-2 opacity-10 text-[100px]">
                            ⚙️
                        </div>

                        {/* Header */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-6 h-6 flex items-center justify-center bg-[#E6F7F5] text-[#0EA5A4] rounded-md">
                                <ShieldCheck size={14} />
                            </div>

                            <h3 className="font-semibold text-gray-900">
                                Why join L & A Fintech?
                            </h3>
                        </div>

                        {/* Grid */}
                        <div className="grid sm:grid-cols-2 gap-6 text-sm">

                            <div>
                                <p className="font-medium text-gray-900">Global Impact</p>
                                <p className="text-gray-500 mt-1">
                                    Work with clients from India, Singapore, and global fintech hubs.
                                </p>
                            </div>

                            <div>
                                <p className="font-medium text-gray-900">Accelerated Growth</p>
                                <p className="text-gray-500 mt-1">
                                    Direct mentorship from industry veterans in fintech recruitment.
                                </p>
                            </div>

                            <div>
                                <p className="font-medium text-gray-900">Innovation First</p>
                                <p className="text-gray-500 mt-1">
                                    We use AI tools to match talent with perfect opportunities.
                                </p>
                            </div>

                            <div>
                                <p className="font-medium text-gray-900">Flexible Work</p>
                                <p className="text-gray-500 mt-1">
                                    A hybrid, results-driven culture that respects your time and life.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-6">

                    {/* QUICK APPLY FORM */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

                        <h3 className="font-semibold text-gray-900">
                            Quick Apply
                        </h3>

                        <p className="text-sm text-gray-500 mb-4">
                            Fill out the form below and attach your resume.
                        </p>

                        <form className="space-y-4">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8F1FC9]"
                            />

                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="px-4 py-3 border rounded-lg"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="px-4 py-3 border rounded-lg"
                                />
                            </div>

                            {/* Upload Box */}
                            <div className="border border-dashed rounded-lg p-6 text-center text-sm text-gray-500 hover:bg-gray-50 transition cursor-pointer">
                                <UploadCloud className="mx-auto mb-2" size={20} />
                                Click to upload or drag & drop
                                <p className="text-xs mt-1">PDF, DOC (Max 3MB)</p>
                            </div>

                            <textarea
                                rows={3}
                                placeholder="Cover Letter"
                                className="w-full px-4 py-3 border rounded-lg"
                            />

                            <button
                                type="submit"
                                className="w-full bg-[#8F1FC9] text-white py-3 rounded-lg hover:bg-[#7a1aad] transition"
                            >
                                Submit Application →
                            </button>

                        </form>

                    </div>

                    {/* TESTIMONIAL */}
                    <div className="bg-white border rounded-xl p-4 text-sm text-gray-600">
                        ⭐⭐⭐⭐⭐
                        <p className="mt-2">
                            "L & A Fintech helped me land a career path I never imagined."
                        </p>
                        <p className="mt-2 font-medium text-gray-900">
                            — Siddharth K.
                        </p>
                    </div>

                    {/* STATS CARD */}
                    {/* <div className="bg-green-100 rounded-xl p-4 text-sm text-gray-800 flex justify-between items-center">
                        <span>50+ Openings Monthly</span>
                        <span>→</span>
                    </div> */}

                </div>

            </div>
        </section>
    );
}