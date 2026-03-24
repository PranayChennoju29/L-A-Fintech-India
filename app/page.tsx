import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"

import {
  Users,
  Code,


  Mail, Phone, MapPin, Linkedin, Twitter,
} from "lucide-react";
import UploadResume from "@/components/ResumeUpload";
import Link from "next/link";




export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">

        {/* Background Image */}
        <Image
          src="/8.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-25"
        />

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <span className="bg-[#F3E8FF] text-[#8F1FC9] px-4 py-2 rounded-full text-sm">
              Est. 2025 • Next-Gen Recruitment
            </span>

            <h1 className="text-6xl font-bold mt-6 text-gray-900">
              L&A
            </h1>

            <h2 className="text-2xl text-gray-600 mt-4 leading-relaxed">
              Smart Recruitment Solutions for the Future.
            </h2>

            <p className="text-gray-500 mt-6 max-w-lg">
              We bridge the gap between visionary companies and world-class
              talent. Leveraging fintech-driven efficiency, we specialize in
              high-impact hiring across IT and Non-IT sectors globally.
            </p>

            <div className="flex gap-4 mt-10">

              <Link
                href="/carrers"
                className="flex items-center gap-2 bg-[#8F1FC9] text-white px-7 py-3 rounded-full hover:bg-[#7a1aad] transition"
              >
                Get Started →
              </Link>

              <Link
                href="#vision"
                className="px-7 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-200 transition"
              >
                Learn More
              </Link>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <Image
              src="/2.jpg"
              alt="Team"
              width={600}
              height={420}
              className="rounded-2xl shadow-xl"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-8 left-10 bg-white shadow-lg rounded-xl px-6 py-4 flex items-center gap-4">

              <Users size={22} className="text-gray-600" />

              <div>
                <p className="text-sm text-gray-500">Talent Placed</p>
              </div>

            </div>

          </div>

        </div>

      </section>


      <section id="vision" className="bg-[#F6F7F9] py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

          {/* Left Title */}
          <div className="flex items-start gap-4">
            <div className="w-1 h-10 bg-[#8F1FC9] mt-2"></div>

            <h2 className="text-3xl font-semibold text-gray-900">
              Our Vision
            </h2>
          </div>

          {/* Right Content */}
          <div className="text-gray-600 space-y-6 leading-relaxed">

            <p>
              Founded in 2025, L & A Fintech India was born from a simple realization:
              recruitment shouldn’t be a bottleneck to growth. In an era of rapid
              digital transformation, traditional hiring methods are no longer
              sufficient.
            </p>

            <p>
              We combine industry-leading fintech operational standards with a
              deeply human approach to talent acquisition. Our mission is to
              transform the hiring landscape by providing seamless, data-driven,
              and highly personalized recruitment experiences for startups and
              enterprises alike.
            </p>

          </div>

        </div>
      </section>
      <section id="cta" className="relative py-24 overflow-hidden">

        {/* Background Image */}
        <Image
          src="/3.jpg"
          alt="Services Background"
          fill
          priority
          className="object-cover opacity-10"
        />

        {/* Content Wrapper */}
        <div className="relative max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">
              What We Do
            </h2>

            <p className="text-gray-500 mt-2">
              Comprehensive recruitment services tailored to the demands of a modern economy.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* Card */}
            <div className="bg-white border rounded-xl p-7 hover:shadow-lg transition duration-300">
              <div className="w-10 h-10 flex items-center justify-center bg-[#F3E8FF] text-[#8F1FC9] rounded-lg mb-4">
                <Code size={20} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                IT Recruitment
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Expert sourcing for software developers, system architects, and tech leadership roles across diverse stack.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-7 hover:shadow-lg transition duration-300">
              <div className="w-10 h-10 flex items-center justify-center bg-[#F3E8FF] text-[#8F1FC9] rounded-lg mb-4">
                <Code size={20} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Non-IT Recruitment
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Scaling your operations, finance, and marketing teams with professionals who match your culture and goals.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-7 hover:shadow-lg transition duration-300">
              <div className="w-10 h-10 flex items-center justify-center bg-[#F3E8FF] text-[#8F1FC9] rounded-lg mb-4">
                <Code size={20} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Fintech Talent
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Specialized hiring for the financial technology sector, bridging finance expertise and tech innovation.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-7 hover:shadow-lg transition duration-300">
              <div className="w-10 h-10 flex items-center justify-center bg-[#F3E8FF] text-[#8F1FC9] rounded-lg mb-4">
                <Code size={20} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Startup Support
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Helping early-stage companies build their core teams quickly with versatile, high-impact talent.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-7 hover:shadow-lg transition duration-300">
              <div className="w-10 h-10 flex items-center justify-center bg-[#F3E8FF] text-[#8F1FC9] rounded-lg mb-4">
                <Code size={20} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Permanent Hiring
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Strategic executive search and long-term placement services to build your organization’s future foundation.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-7 hover:shadow-lg transition duration-300">
              <div className="w-10 h-10 flex items-center justify-center bg-[#F3E8FF] text-[#8F1FC9] rounded-lg mb-4">
                <Code size={20} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Contract Staffing
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Flexible workforce solutions for project-based needs, providing immediate expertise when you need it most.
              </p>
            </div>

          </div>

        </div>

      </section>
      <section id="services" className="relative py-24 overflow-hidden">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#8F1FC9] to-[#a855f7]"></div>

        {/* Soft Glow Shapes */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-[60px] border border-white/20 opacity-20"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[420px] h-[420px] rounded-[40px] border border-white/20 opacity-20"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-3xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            We are not just a recruitment agency; we are your strategic
            growth partner in the digital age.
          </h2>

          <p className="mt-6 text-white/80 text-sm md:text-base">
            L&A Fintech India represents the convergence of high-speed fintech
            efficiency and high-touch human expertise. We don’t just find employees;
            we discover the future leaders of your organization.
          </p>

        </div>

      </section>
      <section id="careers" className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-gray-200 rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 border-2 border-gray-300">

            {/* LEFT CONTENT */}
            <div className="max-w-lg">

              <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                Join Our Talent Pool
              </span>

              <h2 className="text-3xl font-semibold text-gray-900 mt-4">
                Ready to Leap Forward in Your Career?
              </h2>

              <p className="text-gray-500 mt-4 leading-relaxed">
                We're always looking for exceptional individuals to join our
                network and explore opportunities with India’s most innovative
                companies. Submit your profile today and let's find your perfect match.
              </p>

              <Link
                href="/carrers"
                className="mt-6 inline-block bg-[#8F1FC9] text-white px-6 py-3 rounded-full hover:bg-[#7a1aad] transition"
              >
                Explore Career Opportunities
              </Link>

            </div>

            {/* RIGHT CARD (Upload Component) */}
            <UploadResume />

          </div>

        </div>
      </section>
      <section id="contact" className="py-24 bg-[#F6F7F9]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-3xl font-semibold text-gray-900">
              Let's Connect
            </h2>

            <p className="text-gray-600 mt-3 max-w-md">
              Whether you're looking to hire the best talent or searching for
              your next big role, we're here to help you navigate the process.
            </p>

            <div className="mt-10 space-y-8">

              {/* Email */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 flex items-center justify-center bg-[#F3E8FF] text-[#8F1FC9] rounded-xl">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="font-medium text-gray-900">Email Us</p>
                  <p className="text-gray-600 text-sm">careers@fintechindia.com</p>
                  <p className="text-gray-600 text-sm">talent@fintechindia.com</p>
                </div>

              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-600 rounded-xl">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="font-medium text-gray-900">Call Us</p>
                  <p className="text-gray-600 text-sm">+91 123 456 7890</p>
                  <p className="text-gray-600 text-sm">Mon - Fri, 9am - 6pm IST</p>
                </div>

              </div>

              {/* Address */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-700 rounded-xl">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="font-medium text-gray-900">Visit Us</p>
                  <p className="text-gray-600 text-sm">Cyber City, Phase II</p>
                  <p className="text-gray-600 text-sm">Gurugram, Haryana, 122002</p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

            <form className="space-y-5">

              <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8F1FC9]"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8F1FC9]"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us how we can help you..."
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8F1FC9]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#8F1FC9] text-white py-3 rounded-lg hover:bg-[#7a1aad] transition"
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>
      </section>


      <Footer />



    </main>
  );
}