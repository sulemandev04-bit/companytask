import React, { useEffect, useState } from 'react';

export default function HomeSection() {


  // Multi-modal services structural layout array
  const SERVICE_MATRIX = [
    {
      title: "Air Freight",
      desc: "We are India's leading air freight forwarder, offering complete import and export logistics. Our volume advantage ensures competitive pricing and guaranteed space.Our expert route planners optimize transit, carrier selection, and cargo handling. We reduce costs and transit time with on-demand pickup, drop-off, and warehousing.",
      tags: ["Speed", "Efficiency", "Reliability", "Affordability"],
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Sea Freight",
      desc: "We offer global sea freight services via top shipping lines. Our team understands your products, transit needs, and budget.With decades of experience, we plan, monitor, and manage shipments, ensuring compliance.We provide flexible FCL scheduling and cost-efficient LCL options. On-demand pickup, drop-off, and warehousing help cut costs and transit time.",
      tags: ["Flexibility", "Cost-Effective", "Scalability", "Expertise"],
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop"
    },

    {
      title: "Multi Modal Transport",
      desc: "Every shipment is unique, so we offer multiple affordable transport options.Along with air and sea freight, we provide multimodal transport via our global network.Our tailored solutions enable real-time cargo tracking. We streamline your supply chain as your single point of contact.",
      tags: ["Active Insulation", "PCM Frameworks", "Pharma Compliance"],
      image: "/modal.jfif" /* Note: Move this to public folder or assets for production */
    },
    {
      title: "Project Cargo",
      desc: "We understand the precise needs of customers and shipping lines, ensuring cargo is stuffed, lashed, and choked to specifications.We handle logistics, clearance, and oversized or breakbulk cargo with expertise.We transport over-dimensional cargo using open tops, flat racks, and flatbeds.",
      tags: ["Precision", "Expertise", "Oversized", "Security"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Custom Broking",
      desc: "Our licensed customs agents know domestic and international regulations.With 30+ years of experience, we have strong ties with authorities and handle all clearance challenges.We ensure smooth, timely, and transparent cargo clearance. Our experts get your documentation right the first time.",
      tags: ["Accuracy", "Compliance", "Speed", "Expertise"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Transit Warehouse and Fleet",
      desc: "Our transit warehouse is near the International Air Cargo Complex and Ocean Ports.We offer storage for all cargo types, including temperature-controlled (15–25°C, 2–8°C), DGR, and general cargo zones.We provide specialized packaging, palletizing, and shrink wrapping.Our reefer and general trucks ensure smooth nationwide transportation.",
      tags: ["Specialized", "Accessible", "Versatile", "Nationwide"],
      image: "/warehouse.jfif" /* Note: Move this to public folder or assets for production */
    }
  ];


  return (
    <div className="m-0 min-h-screen w-full bg-white text-slate-500 antialiased selection:bg-cyan-500/20 flex flex-col">

      <section className="relative w-full h-screen bg-black overflow-hidden select-none">

        {/* 1. Video Wrapper Layer */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden flex items-center justify-center">

          <video
            src="/sectionvideo.mp4" /* Note: Production me isse public folder ya assets me move kar lena */
            autoPlay
            loop
            muted
            playsInline
            /* - block: Base display style
              - max-w-full h-auto object-contain scale-100: Mobile par video bina kate fit hogi
              - md:w-full md:h-full md:object-cover md:scale-150: Desktop par full screen cover aur zoom (agar edges chhupani hon)
            */
            className="block max-w-full h-auto object-contain scale-100 md:w-full md:h-full md:object-cover md:scale-150 aspect-video"
            style={{
              minWidth: '100%',
              minHeight: '100%'
            }}
          />

        </div>

        {/* 2. Invisible Guard Layer: User interaction block karne ke liye */}
        <div className="absolute inset-0 bg-transparent z-20 pointer-events-auto" />

      </section>

      {/* 2. AIR TRAFFIC HERO BANNER (SCREENSHOT REPLICA) */}
      <section className="w-full flex flex-col bg-[#F9F6F0]">

        {/* Top Content Row */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* Left Column: Labels */}
          <div className="md:col-span-4 flex flex-col space-y-1 md:pl-12">
            <span className="text-[11px] font-bold text-[#E25C24] tracking-wider uppercase">
              About Us
            </span>
            <div className="w-16 h-0.5 bg-[#E25C24] my-1" />
            <span className="text-xs font-black text-[#E25C24] tracking-widest uppercase">
              Penta Freight
            </span>
          </div>

          {/* Right Column: Paragraph Text */}
          <div className="md:col-span-8 max-w-3xl">
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              Penta Freight provides reliable <strong className="font-bold text-slate-900">logistics solutions</strong>, specializing in temperature-sensitive shipments. We ensure safe, <strong className="font-bold text-slate-900">on-time delivery</strong> worldwide. Trust us for seamless supply chain management.
            </p>
          </div>

        </div>

        {/* Bottom Image Container */}
        <div
          className="w-full min-h-screen bg-cover bg-top md:bg-center bg-no-repeat relative"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1600&auto=format&fit=crop')"
          }}
        >
          {/* Subtle gradient overlay to match professional terminal themes if needed */}
          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
        </div>
      </section>

      {/* 3. CORPORATE PHILOSOPHY CORE (CENTERED WITH READ MORE BUTTON) */}
      {/* 3. CORPORATE PHILOSOPHY CORE (SCREENSHOT MATCH) */}
      <section className="relative bg-[#3A4D5C] py-16 text-center overflow-hidden">

        {/* Background SVG Wave/Topology Lines Lines to match the screenshot pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400">
            <path d="M0,120 Q360,240 720,120 T1440,200 M0,200 Q360,320 720,200 T1440,280 M0,40 Q360,160 720,40 T1440,120" fill="none" stroke="#ffffff" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center">

          {/* Heading: Exact color and capitalization from image */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E25C24] tracking-wide mb-6">
            Our Philosophy
          </h2>

          {/* Paragraph Text: Exact words from your screenshot */}
          <p className="text-white text-[13px] sm:text-[15px] leading-relaxed max-w-4xl font-normal text-center mb-8 opacity-95">
            Customer satisfaction drives everything we do. Every shipment is a promise, and we deliver it with precision, care, and professionalism. With expert resources, we ensure safe, timely transport, building lasting partnerships founded on trust and excellence.
          </p>

          {/* Custom Button: Exact padding and font styling from image */}
          <div>
            <button className="bg-[#E25C24] hover:bg-[#d04b16] text-white font-medium text-sm px-7 py-2.5 rounded-lg shadow-md transition-all duration-300 cursor-pointer capitalize">
              Read more
            </button>
          </div>

        </div>
      </section>

      {/* 4. PERFORMANCE CAPABILITIES LAYER (6 SERVICES INTERACTION MATRIX) */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 space-y-16">

        <div className="w-full flex flex-col space-y-4">
          <div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
              • Services
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <h2 className="lg:col-span-7 text-3xl sm:text-5xl font-normal text-black tracking-tight leading-tight">
              Seamless Solutions for <br />
              <span className="text-slate-400">Every Logistics Need</span>
            </h2>
            <p className="lg:col-span-5 text-slate-400 text-sm sm:text-base leading-relaxed pt-2">
              Tailored logistics solutions for timely, cost-effective deliveries across air, sea, and multimodal transport.
            </p>
          </div>
        </div>

        {/* Dynamic Cards Stack Container */}
        <div className="relative flex flex-col space-y-20 pt-8">
          {SERVICE_MATRIX.map((srv, idx) => {
            const isOdd = idx % 2 === 0; // Alternating structural alignment logic

            return (
              <div
                key={idx}
                className="sticky top-28 w-full bg-[#F9F7F4] text-slate-900 rounded-4xl overflow-hidden shadow-2xl border border-white/50 grid grid-cols-1 lg:grid-cols-12 min-h-110"
                style={{
                  // Higher index cards overlap previous cards during scroll
                  zIndex: idx + 1
                }}
              >

                {/* Column One: Image Component with Blur Soft Edge Fade */}
                <div className={`w-full h-70 lg:h-full lg:col-span-5 relative overflow-hidden ${!isOdd ? 'lg:order-last' : ''}`}>
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Replicating the exact smooth brush-fade transition from image to text section */}
                  <div className={`hidden lg:block absolute inset-y-0 w-24 bg-linear-to-r from-transparent to-[#F9F7F4] ${isOdd ? '-right-1' : 'left-0 rotate-180'}`} />
                </div>

                {/* Column Two: Content Component */}
                <div className="w-full lg:col-span-7 flex flex-col justify-center p-8 sm:p-12 lg:p-14 space-y-5">

                  {/* Service Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    {srv.title}
                  </h3>

                  {/* Description text matches design specs */}
                  <p className="text-slate-600 text-sm  leading-relaxed font-normal">
                    {srv.desc}
                  </p>

                  {/* White Pill Utility Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {srv.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs text-slate-500 font-medium shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Absolute Image Matching Read More Button */}
                  <div className="pt-3">
                    <button className="bg-[#E25C24] hover:bg-[#c84d1b] text-white font-bold text-xs px-8 py-3.5 rounded-xl shadow-md transition-colors cursor-pointer capitalize tracking-wide">
                      Read More
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </section>

      <section className="w-full bg-white text-slate-900 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-stretch">

          {/* Left Header Column (Occupies 3 columns) */}
          <div className="lg:col-span-3 flex flex-col justify-start space-y-4 pr-4">
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200">
                • Why us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-950 leading-tight">
              Why choose <br />
              <span className="text-slate-400 font-light">Penta Freight.</span>
            </h2>
          </div>

          {/* Feature 1: Comprehensive Solutions (Occupies 3 columns) */}
          <div className="lg:col-span-3 flex flex-col space-y-4 pt-2 lg:border-l lg:border-slate-200 lg:pl-8">
            {/* Circular Gear/Check Integration Icon */}
            <div className="text-slate-800 w-12 h-12 flex items-center justify-center">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 tracking-tight pt-1">
              Comprehensive Solutions
            </h3>
            <p className="text-slate-500 text-[13px] sm:text-sm leading-relaxed font-normal">
              Full-spectrum logistics services including air, sea, and multimodal transport for seamless handling of your cargo.
            </p>
          </div>

          {/* Feature 2: Expertise and Experience (Occupies 3 columns) */}
          <div className="lg:col-span-3 flex flex-col space-y-4 pt-2 lg:border-l lg:border-slate-200 lg:pl-8">
            {/* Ribbon/Expert Badge Icon */}
            <div className="text-slate-800 w-12 h-12 flex items-center justify-center">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                {/* Internal structured text mimic for EXPERT banner */}
                <path d="M6 10h12v3H6z" fill="white" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 tracking-tight pt-1">
              Expertise and Experience
            </h3>
            <p className="text-slate-500 text-[13px] sm:text-sm leading-relaxed font-normal">
              Over 30+ years of experience with skilled customs agents ensuring accurate clearance and secure delivery.
            </p>
          </div>

          {/* Feature 3: State-of-the-Art Facilities (Occupies 3 columns) */}
          <div className="lg:col-span-3 flex flex-col space-y-4 pt-2 lg:border-l lg:border-slate-200 lg:pl-8">
            {/* Logistics Cargo Truck/Gear Icon */}
            <div className="text-slate-800 w-12 h-12 flex items-center justify-center">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10h10zm0 0h4l4-4v-4h-8v8z" />
                <circle cx="8" cy="10" r="1.5" strokeWidth="1.2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 tracking-tight pt-1">
              State-of-the-Art Facilities
            </h3>
            <p className="text-slate-500 text-[13px] sm:text-sm leading-relaxed font-normal">
              Advanced transit warehouse with specialized storage and a fleet of reefer and general trucks for efficient nationwide transport.
            </p>
          </div>

        </div>
      </section>

      {/* 6. BUSINESS MILESTONES (ACHIEVEMENT SECTION) */}
      <section className="relative bg-[#3a4b56] py-20 px-6 sm:px-12 lg:px-24 overflow-hidden text-white">
        {/* Background Topography Lines Overlay (Optional SVG representation) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <path d="M-100,200 Q200,400 500,100 T1100,300" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M-100,350 Q250,550 550,250 T1100,450" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M-100,500 Q300,700 600,400 T1100,600" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Heading and Paragraph */}
          <div className="lg:col-span-5 max-w-md">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f26522] tracking-tight">
              Our Achievements
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed font-light">
              Over 31+ years of excellence, trusted globally, delivering reliable logistics solutions with precision.
            </p>
          </div>

          {/* Right Column: 2x2 Grid of Stats */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 pl-0 lg:pl-12">

            {/* Stat 1 */}
            <div className="flex flex-col justify-start">
              <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">7+</span>
              <span className="mt-2 text-sm sm:text-base text-slate-200/90 font-medium">
                Strategic Domestic Offices
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col justify-start">
              <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">USA</span>
              <span className="mt-2 text-sm sm:text-base text-slate-200/90 font-medium">
                Global presence
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col justify-start">
              <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">200+</span>
              <span className="mt-2 text-sm sm:text-base text-slate-200/90 font-medium">
                Logistics Experts
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col justify-start">
              <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">50+</span>
              <span className="mt-2 text-sm sm:text-base text-slate-200/90 font-medium">
                Awards & Accolades
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CUSTOMER VOICES (REVIEW SECTION) */}
      <section className="py-24 bg-white text-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

            {/* Left Column: Header Info */}
            <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-10">
              {/* Review Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-full shadow-sm w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                Reviews
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Hear From Our Satisfied <br />
                <span className="text-slate-400 font-normal">Clients Worldwide.</span>
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-500 max-w-sm leading-relaxed">
                Explore what industry leaders and long-term partners say about our commitment to excellence and innovation.
              </p>
            </div>

            {/* Right Column: 4 Cards Arrangement */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">

              {/* Card 1 - Lufthansa Cargo */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col items-center text-center space-y-6 sm:mt-0">
                <div className="h-12 flex items-center justify-center">
                  {/* Replace with your actual image tag if needed */}
                  <div className="text-[#ff9900] font-bold text-lg tracking-wide flex flex-col items-center">
                    <span className="text-xl font-black"> Lufthansa Cargo</span>
                    <span className="text-[9px] text-slate-700 tracking-tighter uppercase font-medium -mt-1">Networking the world.</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  "Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our..."
                </p>
              </div>

              {/* Card 2 - Sun Pharma */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col items-center text-center space-y-6 sm:mt-12">
                <div className="h-12 flex items-center justify-center">
                  <div className="text-slate-900 font-bold text-lg tracking-wider flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full border-4 border-orange-500 border-t-transparent animate-spin-slow"></div>
                    <span className="font-extrabold text-xl">SUN</span>
                    <span className="text-xs font-light text-slate-500 self-end mb-1">PHARMA</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  "We highly regard Penta Freight's professionalism and knowledge in managing complex pharmaceutical shipments. Their specialized handling of life-saving temperature-controlled supply chains ensures our global distribution moves flawlessly without risk."
                </p>
              </div>

              {/* Card 3 - Additional Client */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col items-center text-center space-y-6 sm:-mt-6">
                <div className="h-12 flex items-center justify-center">
                  <span className="text-xl font-black tracking-widest text-blue-950">EMIRATES SKYCARGO</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  "An exceptional partner to work with. Their seamless digital documentation processing and swift response times at major airport operations hubs have optimized our freight loading efficiency significantly over the last decade."
                </p>
              </div>

              {/* Card 4 - Additional Client */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col items-center text-center space-y-6">
                <div className="h-12 flex items-center justify-center">
                  <span className="text-xl font-extrabold text-red-600 tracking-tight">DHL GLOBAL FORWARDING</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  "Penta Freight brings unmatched logistics expertise to local customs clearance and multi-modal transport lines. Their team operates with absolute reliability and high ethical standards, executing every operation perfectly."
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 8. CERTIFICATIONS CAROUSEL SECTION */}
      <section className="relative bg-[#3a4b56] py-20 overflow-hidden text-center">

        {/* Optional Topography Lines Overlay to match image */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <path d="M-100,200 Q200,400 500,100 T1100,300" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M-100,400 Q250,600 550,300 T1100,500" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 z-10">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#f26522] tracking-tight">
            Certifications
          </h2>
          {/* Subtitle */}
          <p className="text-sm text-slate-200/90 max-w-2xl mx-auto font-light">
            Certified excellence, ensuring compliance, quality, and global logistics reliability.
          </p>
        </div>

        {/* Slider Track Wrapper (Right to Left Marquee) */}
        <div className="mt-12 relative w-full flex overflow-x-hidden group">
          {/* Gradient Faders for Smooth Left/Right Blending Edge */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#3a4b56] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#3a4b56] to-transparent z-20 pointer-events-none" />

          {/* Dynamic Infinite Marquee Track */}
          <div className="flex gap-6 animate-marquee whitespace-nowrap py-4 pr-6 shrink-0 [animation-play-state:running] group-hover:[animation-play-state:paused]">

            {/* Set 1 of 15 Cards */}
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">TATA</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">ISO 9001</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">MTO</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">PHARMA AERO</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">INDO-ITALIAN</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">FIATA</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">AEO</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">ACAAI</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">AMCHAM</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">BCBA</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">FFFAI</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">WCA</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">GDP</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">CEIV</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">C-TPAT</div>

          </div>

          {/* Duplicate Set 2 (Crucial for loop continuity) */}
          <div className="flex gap-6 animate-marquee whitespace-nowrap py-4 aria-hidden='true' shrink-0 [animation-play-state:running] group-hover:[animation-play-state:paused]">

            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">IATA</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">ISO 9001</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">MTO</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">PHARMA AERO</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">INDO-ITALIAN</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">FIATA</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">AEO</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">ACAAI</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">AMCHAM</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">BCBA</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">FFFAI</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">WCA</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">GDP</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">CEIV</div>
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center p-6 shadow-md shadow-black/5 shrink-0 font-bold text-slate-700">C-TPAT</div>

          </div>
        </div>

        {/* CSS Keyframes Injection */}
        <style>{`
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-100%); }
    }
    .animate-marquee {
      animation: marquee 35s linear infinite;
    }
  `}</style>
      </section>

      {/* 10. AWARDS AND ACCOMS PANEL (RECOGNITION) */}
      <section className="py-24 bg-white border-t border-slate-100 text-center relative overflow-hidden">
        {/* Light tech grid background accent */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[16px_16px]" />

        <div className="max-w-6xl mx-auto px-4 space-y-12 relative z-10">
          {/* Section Header */}
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 text-[10px] font-mono tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-200 rounded-full">
              Awards
            </div>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
              Proudly Recognized with Prestigious <span className="text-blue-600 block sm:inline">Awards and Accolades</span>
            </h2>
          </div>

          {/* Awards Grid Framework */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">

            {/* Emirates SkyCargo */}
            <div className="p-6 bg-slate-50/60 border border-slate-200 rounded-xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-2 hover:border-slate-400 hover:scale-[1.01]">
              <div className="h-12 flex items-center justify-start opacity-90">
                <span className="text-slate-800 font-black tracking-wider text-lg">Emirates <span className="text-red-600 block text-xs tracking-widest uppercase">SkyCargo</span></span>
              </div>
              <div className="font-mono text-[11px] text-slate-600 space-y-1">
                <p>Top Cargo Agents, 2016/17</p>
                <p>Top Cargo Agents, 2005/06</p>
              </div>
            </div>

            {/* Delta Air Lines */}
            <div className="p-6 bg-slate-50/60 border border-slate-200 rounded-xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-2 hover:border-slate-400 hover:scale-[1.01]">
              <div className="h-12 flex items-center justify-start opacity-90">
                <span className="text-slate-800 font-black tracking-tighter text-lg">▲ DELTA <span className="text-[9px] font-normal tracking-widest block text-slate-500">AIR LINES</span></span>
              </div>
              <div className="font-mono text-[11px] text-slate-600 space-y-1">
                <p>Top Revenue Performance, 2002</p>
              </div>
            </div>

            {/* Maskargo */}
            <div className="p-6 bg-slate-50/60 border border-slate-200 rounded-xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-2 hover:border-slate-400 hover:scale-[1.01]">
              <div className="h-12 flex items-center justify-start opacity-90">
                <span className="text-slate-800 font-bold tracking-tight text-lg italic">maskargo <span className="text-red-600 font-sans">✈</span></span>
              </div>
              <div className="font-mono text-[11px] text-slate-600 space-y-1">
                <p>Mega Tonners, 2006/07</p>
              </div>
            </div>

            {/* CONCOR */}
            <div className="p-6 bg-slate-50/60 border border-slate-200 rounded-xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-2 hover:border-slate-400 hover:scale-[1.01]">
              <div className="h-12 flex items-center justify-start opacity-90">
                <span className="text-slate-800 font-mono font-bold border border-blue-200 px-2 py-0.5 text-xs bg-blue-50/50 tracking-widest">CONCOR</span>
              </div>
              <div className="font-mono text-[11px] text-slate-600 space-y-1">
                <p>CONCOR Exim Star, 2003/04</p>
              </div>
            </div>

            {/* Air France */}
            <div className="p-6 bg-slate-50/60 border border-slate-200 rounded-xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-2 hover:border-slate-400 hover:scale-[1.01]">
              <div className="h-12 flex items-center justify-start opacity-90">
                <span className="text-slate-800 font-black tracking-widest text-sm">AIRFRANCE <span className="text-red-600">/</span></span>
              </div>
              <div className="font-mono text-[11px] text-slate-600 space-y-1">
                <p>Meritorious Performance, 1999/2000</p>
              </div>
            </div>

            {/* Finnair Cargo */}
            <div className="p-6 bg-slate-50/60 border border-slate-200 rounded-xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-2 hover:border-slate-400 hover:scale-[1.01]">
              <div className="h-12 flex items-center justify-start opacity-90">
                <span className="text-slate-800 font-black tracking-tight text-base">FINNAIR <span className="text-[10px] text-slate-500 block font-mono tracking-widest mt-0.5">CARGO</span></span>
              </div>
              <div className="font-mono text-[11px] text-slate-600 space-y-1">
                <p>Top Performance, 2008</p>
                <p>Top Performance, 2007</p>
              </div>
            </div>

            {/* IAG Cargo */}
            <div className="p-6 bg-slate-50/60 border border-slate-200 rounded-xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-2 hover:border-slate-400 hover:scale-[1.01]">
              <div className="h-12 flex items-center justify-start opacity-90">
                <span className="text-slate-800 font-black text-lg tracking-tight">IAG <span className="text-red-600 font-normal">Cargo</span></span>
              </div>
              <div className="font-mono text-[11px] text-slate-600 space-y-1">
                <p>Significant Support and Contribution, 2007</p>
              </div>
            </div>

            {/* THE STAT TRADE TIMES (Active Focus Card from Screenshot adapted for light mode) */}
            <div className="p-6 bg-blue-50/30 border-2 border-blue-500 rounded-xl flex flex-col justify-between space-y-6 shadow-[0_4px_20px_rgba(37,99,235,0.08)] transition-all duration-300 hover:border-[3px] hover:border-blue-600 scale-[1.02]">
              <div className="h-12 flex flex-col justify-center">
                <span className="text-blue-600 font-serif font-black text-xl tracking-tighter leading-none">THE STAT</span>
                <span className="text-slate-700 font-mono text-[8px] tracking-[0.25em] uppercase block font-semibold mt-0.5">TRADE TIMES</span>
              </div>
              <div className="font-mono text-[11px] space-y-2">
                <p className="font-semibold text-slate-900 leading-snug">International Award for Excellence in Air Cargo</p>
                <p className="text-blue-600 font-medium">Region India · Winner, 2018</p>
              </div>
            </div>

            {/* Turkish Cargo */}
            <div className="p-6 bg-slate-50/60 border border-slate-200 rounded-xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-2 hover:border-slate-400 hover:scale-[1.01]">
              <div className="h-12 flex items-center justify-start opacity-90">
                <span className="text-slate-800 font-black tracking-tight text-sm">TURKISH CARGO</span>
              </div>
              <div className="font-mono text-[11px] text-slate-600 space-y-1">
                <p>Best Performance, 2017</p>
                <p>Excellence Revenue Performance, 2016</p>
                <p>Best Performance, 2014</p>
                <p>Cargo Agency, 2013</p>
                <p>Cargo Agency, 2011</p>
              </div>
            </div>

            {/* Singapore Airlines */}
            <div className="p-6 bg-slate-50/60 border border-slate-200 rounded-xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-2 hover:border-slate-400 hover:scale-[1.01]">
              <div className="h-12 flex items-center justify-start opacity-90">
                <span className="text-slate-800 font-bold tracking-tight text-xs uppercase">SINGAPORE AIRLINES</span>
              </div>
              <div className="font-mono text-[11px] text-slate-600 space-y-1">
                <p>Top Cargo Agent, 2003/04</p>
                <p>Top Cargo Agent, 2002/03</p>
                <p>Top Cargo Agent, 2001/02</p>
                <p>Top Cargo Agent, 1999/2000</p>
              </div>
            </div>

            {/* Lufthansa Cargo */}
            <div className="p-6 bg-slate-50/60 border border-slate-200 rounded-xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-2 hover:border-slate-400 hover:scale-[1.01]">
              <div className="h-12 flex items-center justify-start opacity-90">
                <span className="text-slate-800 font-bold tracking-tight text-sm">Lufthansa Cargo</span>
              </div>
              <div className="font-mono text-[11px] text-slate-600 space-y-1">
                <p>Outstanding Performance, 2007</p>
                <p>Outstanding Quality, 2007</p>
                <p>Outstanding Performance - Quality, 2007</p>
                <p>Outstanding performance, 2006</p>
                <p>Premium Partner, 2017</p>
                <p>Asia Partner, 2014</p>
              </div>
            </div>

            {/* British Airways World Cargo */}
            <div className="p-6 bg-slate-50/60 border border-slate-200 rounded-xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-2 hover:border-slate-400 hover:scale-[1.01]">
              <div className="h-12 flex items-center justify-start opacity-90">
                <span className="text-slate-800 font-bold text-xs tracking-tight">BRITISH AIRWAYS <span className="block font-normal text-[9px] text-slate-500 tracking-wider">WORLD CARGO</span></span>
              </div>
              <div className="font-mono text-[11px] text-slate-600 space-y-1">
                <p>Best Business Mix, 2006/07</p>
                <p>Significant Contribution, 2000/01</p>
                <p>Significant Contribution, 1999/2000</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. SYSTEM FOOTPRINT LAYER (FOOTER)
      <footer className="bg-[#0A0D14] border-t border-slate-900 py-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-base font-black tracking-tighter text-white">PENTA<span className="text-cyan-500">FREIGHT</span></span>
            <p className="text-slate-600 mt-1">Precision global supply logistics structures. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-slate-400">
            <span>Mumbai Hub (Times Square Tower)</span>
            <span>&copy; 2026 Penta Freight Matrix.</span>
          </div>
        </div>
      </footer> */}

    </div>
  );
}