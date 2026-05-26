import React from 'react';

export default function ParcelShipper() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-800 font-sans pb-24 overflow-x-hidden">

      {/* Dynamic Inline Styles for Complex 3D Hardware Accelerated Floating & Continuous Rotation Animations */}
      <style>{`
        @keyframes float3D {
          0% { transform: translateY(0px) rotateY(0deg) rotateX(2deg); }
          50% { transform: translateY(-12px) rotateY(180deg) rotateX(-2deg); }
          100% { transform: translateY(0px) rotateY(360deg) rotateX(2deg); }
        }
        @keyframes floatReverse3D {
          0% { transform: translateY(0px) rotateY(360deg) rotateX(-3deg); }
          50% { transform: translateY(-15px) rotateY(180deg) rotateX(3deg); }
          100% { transform: translateY(0px) rotateY(0deg) rotateX(-3deg); }
        }
        .animate-3d-box {
          animation: float3D 12s infinite linear;
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        .animate-3d-box-reverse {
          animation: floatReverse3D 14s infinite linear;
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        .perspective-container {
          perspective: 1200px;
        }
      `}</style>

      {/* Hero Top Title Section */}
      <div className="max-w-4xl mx-auto text-center pt-16 pb-16 px-6">
        <h1 className="text-4xl md:text-5xl font-light tracking-wide text-neutral-900 uppercase mb-4">
          Parcel<span className="text-[#f37023] font-normal">Shipper</span>
        </h1>
        <div className="w-16 h-0.75 bg-[#f37023] mx-auto mb-6 rounded-full" />
        <p className="text-sm md:text-base text-neutral-500 max-w-xl mx-auto tracking-wide uppercase">
          Advanced Thermal Packaging Solutions for Global Cold Chain Logistics
        </p>
      </div>

      {/* Main Grid Wrapper for Products */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 space-y-32">

        {/* ================= 1. COOLGUARD PCM SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Data Specifications */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight flex items-center gap-2">
                CoolGuard™ PCM
              </h2>
              <p className="text-xs font-semibold text-[#f37023] tracking-widest uppercase">
                Phase Change Material Technology
              </p>
            </div>

            {/* Technical Parameters List Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-2 border-t border-gray-100">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Cooling Technology</span>
                <span className="text-sm font-semibold text-neutral-800">VIP (Vacuum Insulation Panels) and PCM Bricks</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Insulation</span>
                <span className="text-sm font-semibold text-neutral-800">VIPs Framework</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Temperature Range</span>
                <span className="text-sm font-semibold text-neutral-800">2°C – 8°C, 15°C – 25°C, Sub -20°C</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Duration Range</span>
                <span className="text-sm font-semibold text-neutral-800">48 – 72 Hours Guaranteed</span>
              </div>
              <div className="col-span-2">
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Available Volumes</span>
                <span className="text-sm font-semibold text-neutral-800">6L – 96L Capacities</span>
              </div>
            </div>

            {/* Bullet Highlights Box */}
            <div className="bg-neutral-50/80 rounded-2xl p-6 border border-neutral-100 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700">Key Features for CoolGuard™ PCM</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-neutral-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f37023]" /> Temperature Stability
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f37023]" /> Simple packout configuration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f37023]" /> Excursion reduction
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f37023]" /> Hibernation Flexibility
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: 3D Animated Product Render Visualizer */}
          <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2 perspective-container min-h-87.5">
            <div className="relative w-72 h-72 animate-3d-box group cursor-pointer transition-transform duration-500">
              {/* Premium Floating Shadow Effect on Bottom plane */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-6 bg-neutral-900/10 rounded-full blur-xl transform scale-x-110 group-hover:scale-x-120 transition-transform duration-500" />
              {/* Box Structural Mockup Wrapper */}
              <div className="w-full h-full bg-white border border-neutral-200 shadow-2xl rounded-3xl p-6 flex flex-col justify-between hover:border-[#f37023]/30 transition-all">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-neutral-300">28L MODEL</span>
                  <span className="text-[10px] font-bold tracking-widest text-[#f37023] border border-[#f37023]/20 px-2 py-0.5 rounded-md uppercase">PCM Active</span>
                </div>
                {/* Simulated Box 3D Geometry Inner Graphics lines */}
                <div className="my-auto py-4 space-y-2 text-center">
                  <div className="inline-block w-24 h-24 bg-linear-to-tr from-neutral-100 to-neutral-50 rounded-xl border border-dashed border-neutral-300 transform group-hover:scale-105 group-hover:rotate-12 transition-all duration-500" />
                  <p className="text-md font-bold tracking-tight text-neutral-800 mt-2">COOLGUARD™ <span className="text-neutral-400">PCM</span></p>
                </div>
                <div className="flex justify-between items-center text-[10px] font-bold text-neutral-400 border-t border-neutral-100 pt-3">
                  <span>PELI BioThermal</span>
                  <span>PERISHABLE & FRAGILE</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= 2. COOLGUARD ADVANCE SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: 3D Animated Product Render Visualizer (Alternating Position) */}
          <div className="lg:col-span-6 flex justify-center items-center perspective-container min-h-87.5">
            <div className="relative w-72 h-72 animate-3d-box-reverse group cursor-pointer">
              {/* Dynamic shadow plane layer */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-6 bg-neutral-900/10 rounded-full blur-xl transform scale-x-110 group-hover:scale-x-120 transition-transform duration-500" />

              {/* Component Card */}
              <div className="w-full h-full bg-white border border-neutral-200 shadow-2xl rounded-3xl p-6 flex flex-col justify-between hover:border-[#f37023]/30 transition-all">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-neutral-300">4-96L SYSTEM</span>
                  <span className="text-[10px] font-bold tracking-widest text-sky-500 border border-sky-100 bg-sky-50/50 px-2 py-0.5 rounded-md uppercase">Hybrid PCM</span>
                </div>

                {/* Inner Graphic Mockup elements */}
                <div className="my-auto py-4 space-y-2 text-center">
                  <div className="relative inline-block w-28 h-28 bg-linear-to-br from-neutral-50 to-neutral-100 rounded-2xl border border-neutral-200 shadow-sm overflow-hidden group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                    <div className="absolute top-0 inset-x-0 h-1/2 bg-neutral-200/40 transform -skew-y-12" />
                  </div>
                  <p className="text-md font-bold tracking-tight text-neutral-800 mt-2">COOLGUARD™ <span className="text-sky-500">ADVANCE</span></p>
                </div>

                <div className="flex justify-between items-center text-[10px] font-bold text-neutral-400 border-t border-neutral-100 pt-3">
                  <span>HIGH VOLUMETRIC</span>
                  <span>PELI CHASSIS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Data Specifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
                CoolGuard™ Advance
              </h2>
              <p className="text-xs font-semibold text-sky-500 tracking-widest uppercase">
                Hybrid Phase Change Material Bricks
              </p>
            </div>

            {/* Technical Specifications Specs Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-2 border-t border-gray-100">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Cooling Technology</span>
                <span className="text-sm font-semibold text-neutral-800">Hybrid PCM (Phase Change Material) Bricks</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Insulation Layering</span>
                <span className="text-sm font-semibold text-neutral-800">High Performance VIPs</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Temperature Range</span>
                <span className="text-sm font-semibold text-neutral-800">2°C – 8°C, 15°C – 25°C, Sub -20°C</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Duration Profile</span>
                <span className="text-sm font-semibold text-neutral-800">Extended 48 – 72 Hours Hold</span>
              </div>
              <div className="col-span-2">
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Volume Multipliers</span>
                <span className="text-sm font-semibold text-neutral-800">4L up to 96L Volumetric Space</span>
              </div>
            </div>

            {/* Additional Features box context directly corresponding to screenshot data */}
            <div className="bg-neutral-50/80 rounded-2xl p-6 border border-neutral-100 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700">Key Features for CoolGuard™ Advance</h4>
              <p className="text-xs font-medium text-neutral-400 -mt-2">- In addition to CoolGuard™ PCM properties</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-neutral-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" /> Higher Volumetric Efficiency
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" /> Lightweight Structural Shield
                </li>
                <li className="flex items-center gap-2 col-span-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" /> Long durations performance stability
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* ================= 3. CRĒDO CUBE SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Data Specifications */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
                Crēdo™ Cube
              </h2>
              <p className="text-xs font-semibold text-emerald-600 tracking-widest uppercase">
                Thermal Insulation Chamber Systems
              </p>
            </div>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-1 gap-y-4 pt-2 border-t border-gray-100">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Cooling Technology Integration</span>
                <span className="text-sm font-semibold text-neutral-800 leading-relaxed block">
                  VIP (Vacuum Insulation Panels), PCM (Phase Change Material), and TICS (Thermal Insulation Chamber System)
                </span>
              </div>
              <div className="pt-2 border-t border-neutral-100">
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Chamber Integrity</span>
                <span className="text-sm font-medium text-neutral-500 leading-relaxed block">
                  High efficiency multi-tier shielding engineered to prevent structural temperature leakage across vulnerable international logistics corridors.
                </span>
              </div>
            </div>

            {/* Bottom Info Banner */}
            <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100/50 text-xs font-medium text-emerald-800">
              * All standard product structures feature high interactive continuous hardware-accelerated 3D auto rotation.
            </div>
          </div>

          {/* Right Column: 3D Animated Product Render Visualizer */}
          <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2 perspective-container min-h-87.5">
            <div className="relative w-72 h-72 animate-3d-box group cursor-pointer">
              {/* Shadow layer */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-6 bg-neutral-900/10 rounded-full blur-xl transform scale-x-110 group-hover:scale-x-120 transition-transform duration-500" />

              {/* Card Container */}
              <div className="w-full h-full bg-white border border-neutral-200 shadow-2xl rounded-3xl p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-neutral-300">TICS CONTROL</span>
                  <span className="text-[10px] font-bold tracking-widest text-emerald-600 border border-emerald-100 bg-emerald-50 px-2 py-0.5 rounded-md uppercase">Secure Cube</span>
                </div>

                {/* 3D Box Mockup details */}
                <div className="my-auto py-4 space-y-2 text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 bg-linear-to-tr from-emerald-50 to-neutral-50 rounded-xl border border-neutral-200 transform group-hover:scale-105 group-hover:rotate-45 transition-all duration-700">
                    <div className="w-12 h-12 border-2 border-emerald-200 rounded-lg border-dashed animate-spin [animation-duration:10s]" />
                  </div>
                  <p className="text-md font-bold tracking-tight text-neutral-800 mt-2">CRĒDO™ <span className="text-emerald-600">CUBE</span></p>
                </div>

                <div className="flex justify-between items-center text-[10px] font-bold text-neutral-400 border-t border-neutral-100 pt-3">
                  <span>THERMAL CHAMBER</span>
                  <span>SYSTEM INTEGRITY</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}