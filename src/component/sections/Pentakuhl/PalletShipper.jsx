import React from 'react';

export default function PalletShipper() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-800 font-sans pb-24 overflow-x-hidden">
      
      {/* Dynamic Inline Styles for Heavy Pallet Continuous 3D Animations */}
      <style>{`
        @keyframes palletFloat3D {
          0% { transform: translateY(0px) rotateY(-5deg) rotateX(3deg); }
          50% { transform: translateY(-10px) rotateY(15deg) rotateX(-2deg); }
          100% { transform: translateY(0px) rotateY(-5deg) rotateX(3deg); }
        }
        @keyframes palletSlowRotate3D {
          0% { transform: rotateY(0deg) translateY(0px); }
          50% { transform: rotateY(180deg) translateY(-8px); }
          100% { transform: rotateY(360deg) translateY(0px); }
        }
        .animate-pallet-3d {
          animation: palletFloat3D 10s infinite ease-in-out;
          transform-style: preserve-3d;
          perspective: 1200px;
        }
        .animate-cargo-3d {
          animation: palletSlowRotate3D 16s infinite linear;
          transform-style: preserve-3d;
          perspective: 1200px;
        }
        .perspective-wrapper {
          perspective: 1500px;
        }
      `}</style>

      {/* Hero Header Title Section */}
      <div className="max-w-4xl mx-auto text-center pt-16 pb-16 px-6">
        <h1 className="text-4xl md:text-5xl font-light tracking-wide text-neutral-900 uppercase mb-4">
          Pallet<span className="text-[#f37023] font-normal">Shipper</span>
        </h1>
        <div className="w-16 h-0.75 bg-[#f37023] mx-auto mb-6 rounded-full" />
        <p className="text-sm md:text-base text-neutral-500 max-w-xl mx-auto tracking-wide uppercase">
          High-Volume Bulk Thermal Cargo Systems for Global Cold Chain Excellence
        </p>
      </div>

      {/* Main Container Grid for Pallet Products */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 space-y-32">

        {/* ================= 1. COOLPALL™ VERTOS SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Core Specs Sheet */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight uppercase">
                COOLPALL™ VERTOS
              </h2>
              <p className="text-xs font-semibold text-sky-600 tracking-widest uppercase">
                High Efficiency Bulk Shipping Systems
              </p>
            </div>

            {/* Technical Parameters Matrix */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4 border-t border-gray-100">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Cooling Technology</span>
                <span className="text-sm font-semibold text-neutral-800">ISOPAD System</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Insulation Layering</span>
                <span className="text-sm font-semibold text-neutral-800">¼ PMC/PAG½, PMC/PAG</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Temperature Range</span>
                <span className="text-sm font-semibold text-neutral-800">2°C – 8°C, 15°C – 25°C</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Duration Range</span>
                <span className="text-sm font-semibold text-neutral-800">Upto 120 hours *Controlled Lane</span>
              </div>
            </div>
          </div>

          {/* Right Block: Dynamic 3D Floating Pallet Graphics Card */}
          <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2 perspective-wrapper min-h-95">
            <div className="relative w-80 h-72 animate-pallet-3d group cursor-pointer">
              {/* Ground Blur Shadows Plane */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-64 h-8 bg-neutral-900/10 rounded-full blur-xl transform scale-x-110 group-hover:scale-x-125 transition-all duration-500" />
              
              {/* Pallet Simulated Frame container */}
              <div className="w-full h-full bg-linear-to-br from-neutral-800 to-neutral-900 text-white rounded-3xl p-6 flex flex-col justify-between shadow-2xl border border-neutral-700/50">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold text-neutral-400 tracking-wider">BULK FREIGHT</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
                </div>
                {/* Visual Representation of Nested ISO Containers Inside Pallet */}
                <div className="grid grid-cols-3 gap-2 my-auto px-4 py-2">
                  <div className="h-28 bg-white/10 rounded-lg border border-white/20 flex flex-col justify-end p-2 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <span className="text-[8px] font-bold text-sky-400 text-center">VERTOS</span>
                  </div>
                  <div className="h-28 bg-white/10 rounded-lg border border-white/20 flex flex-col justify-end p-2 transform group-hover:-translate-y-4 transition-transform duration-500">
                    <span className="text-[8px] font-bold text-sky-400 text-center">VERTOS</span>
                  </div>
                  <div className="h-28 bg-white/10 rounded-lg border border-white/20 flex flex-col justify-end p-2 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <span className="text-[8px] font-bold text-sky-400 text-center">VERTOS</span>
                  </div>
                </div>
                <div className="flex justify-between items-center border-t border-neutral-700/50 pt-3 text-[10px] font-bold text-neutral-400">
                  <span>COOLPALL™ FRAME</span>
                  <span>ISOPAD CERTIFIED</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= 2. COOLPALL™ VERTOS ADVANCE SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: 3D Animated Object Card (Alternating Position) */}
          <div className="lg:col-span-6 flex justify-center items-center perspective-wrapper min-h-95">
            <div className="relative w-80 h-72 animate-cargo-3d group cursor-pointer">
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-64 h-8 bg-neutral-900/10 rounded-full blur-xl transform scale-x-110 group-hover:scale-x-125 transition-all duration-500" />
              
              <div className="w-full h-full bg-white text-neutral-800 rounded-3xl p-6 flex flex-col justify-between shadow-2xl border border-neutral-200">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold text-neutral-400 tracking-wider">ADVANCED INSULATION</span>
                  <span className="text-[9px] font-extrabold text-[#f37023] bg-orange-50 px-2 py-0.5 rounded border border-orange-100 uppercase">Premium</span>
                </div>
                {/* Flat-packed heavy shield geometric representation */}
                <div className="my-auto py-2 flex justify-center">
                  <div className="w-44 h-28 bg-neutral-100 rounded-xl border-2 border-neutral-200 shadow-inner relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute top-0 bottom-0 left-4 w-1 bg-neutral-300" />
                    <div className="absolute top-0 bottom-0 right-4 w-1 bg-neutral-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[10px] font-black tracking-widest text-neutral-400 uppercase">VERTOS ADVANCE</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center border-t border-neutral-100 pt-3 text-[10px] font-bold text-neutral-400">
                  <span>FLAT-PACKED DESIGN</span>
                  <span>UPTO 120 HOURS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Core Specs Sheet */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight uppercase">
                COOLPALL™ VERTOS ADVANCE
              </h2>
              <p className="text-xs font-semibold text-[#f37023] tracking-widest uppercase">
                Optimized Structural Storage Logistics
              </p>
            </div>

            {/* Technical Parameters Matrix */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4 border-t border-gray-100">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Cooling Technology</span>
                <span className="text-sm font-semibold text-neutral-800">ISOPAD Advanced Matrix</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Insulation Configuration</span>
                <span className="text-sm font-semibold text-neutral-800">¼ PMC/PAG, ½ PMC/PAG Dual Layers</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Temperature Metrics</span>
                <span className="text-sm font-semibold text-neutral-800">2°C – 8°C, 15°C – 25°C</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Duration Performance</span>
                <span className="text-sm font-semibold text-neutral-800">Up to 120 Hours Hold Time</span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= SHARED FEATURES PARAGRAPH BLOCK ================= */}
        <div className=" text-black rounded-3xl p-8 md:p-12 shadow-xl bord relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-[#f37023]/10 to-transparent rounded-full pointer-events-none" />
          <h3 className="text-xl font-bold tracking-tight mb-4 uppercase">
            Key features for COOLPALL™ VERTOS | COOLPALL™ VERTOS ADVANCE
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-4xl mb-8">
            Our single use pallets utilise advanced insulation that provides an efficient temperature controlled environment where in your product remains guarded from excursions. Our products are designed to be flat-packed, modular and easy to assemble for your convenience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-neutral-300">
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#f37023] mt-1.5 shrink-0" />
              <span>Strict temperature control for global distribution</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#f37023] mt-1.5 shrink-0" />
              <span>Decreased transportation costs via advanced configurations</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#f37023] mt-1.5 shrink-0" />
              <span>Ergonomic design for interlocking components ensure quick and easy assembly</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#f37023] mt-1.5 shrink-0" />
              <span>Reduced flat-packed height saves storage space and minimizes in-bound distribution cost</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#f37023] mt-1.5 shrink-0" />
              <span>High density molded materials provide lightweight thermal and mechanical integrity</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#f37023] mt-1.5 shrink-0" />
              <span>Accepts full pallets for operational speed and efficiency across entire modular product range</span>
            </div>
          </div>
        </div>

        {/* ================= 3. CRĒDO™ XTREME SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
          
          {/* Left Block: Core Specs Sheet */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight uppercase">
                Crēdo™ XTREME
              </h2>
              <p className="text-xs font-semibold text-emerald-600 tracking-widest uppercase">
                Passive Thermal Protection Shippers
              </p>
            </div>

            {/* Technical Parameters Matrix */}
            <div className="grid grid-cols-1 gap-y-4 pt-4 border-t border-gray-100 text-sm">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Insulation Architecture</span>
                <span className="font-semibold text-neutral-800">HALF PALLET, FULL PALLET Dual Scale Options</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Temperature Parameters Spectrum</span>
                <span className="font-semibold text-neutral-800">2°C – 8°C, 15°C – 25°C, Sub -20°C, Sub -40°C</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Duration Validation</span>
                <span className="font-semibold text-neutral-800">Upto 120 Hours Secured Guard</span>
              </div>
            </div>
          </div>

          {/* Right Block: Dynamic 3D Floating Block */}
          <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2 perspective-wrapper min-h-95">
            <div className="relative w-80 h-72 animate-pallet-3d group cursor-pointer">
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-64 h-8 bg-neutral-900/10 rounded-full blur-xl transform scale-x-110 group-hover:scale-x-125 transition-all duration-500" />
              
              <div className="w-full h-full bg-white text-neutral-800 rounded-3xl p-6 flex flex-col justify-between shadow-2xl border border-neutral-200/80">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold text-neutral-400 tracking-wider">CREDO HARD-CASE</span>
                  <span className="text-[9px] font-bold text-emerald-600 border border-emerald-100 bg-emerald-50 px-2 rounded-full uppercase">XTREME Endurance</span>
                </div>
                
                {/* Stacked box graphic layout representation */}
                <div className="my-auto flex flex-col gap-1 items-center justify-center">
                  <div className="w-36 h-14 bg-linear-to-tr from-neutral-50 to-neutral-100 border border-neutral-300 rounded-t-xl transform group-hover:translate-y-1 transition-transform" />
                  <div className="w-36 h-16 bg-linear-to-br from-neutral-100 to-neutral-200 border border-neutral-300 rounded-b-xl shadow-md transform group-hover:-translate-y-1 transition-transform relative">
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-neutral-400">CRĒDO XTREME</div>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-neutral-100 pt-3 text-[10px] font-bold text-neutral-400">
                  <span>PASSIVE CONTAINER</span>
                  <span>NO ELECTRICITY REQUIRED</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= 4. CRĒDO™ CARGO SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: 3D Animated Object Card (Alternating Position) */}
          <div className="lg:col-span-6 flex justify-center items-center perspective-wrapper min-h-95">
            <div className="relative w-80 h-72 animate-cargo-3d group cursor-pointer">
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-64 h-8 bg-neutral-900/10 rounded-full blur-xl transform scale-x-110 group-hover:scale-x-125 transition-all duration-500" />
              
              <div className="w-full h-full bg-neutral-50 text-neutral-800 rounded-3xl p-6 flex flex-col justify-between shadow-2xl border border-neutral-200">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold text-neutral-400 tracking-wider">SECURE CARGO SHIPPER</span>
                  <span className="text-[10px] font-black text-[#f37023]">PELI BIOTHERMAL</span>
                </div>
                
                {/* Simulated Front view mechanical door of Credo Cargo */}
                <div className="my-auto flex justify-center">
                  <div className="w-48 h-32 bg-white rounded-xl border border-neutral-300 shadow-sm p-2 grid grid-cols-2 gap-2 transform group-hover:rotate-6 transition-transform duration-500">
                    <div className="border border-dashed border-neutral-200 rounded bg-neutral-50/50 flex flex-col justify-between p-1">
                      <div className="w-4 h-4 bg-neutral-300/60 rounded-sm" />
                      <div className="h-1 bg-neutral-200 w-full" />
                    </div>
                    <div className="border border-dashed border-neutral-200 rounded bg-neutral-50/50 flex flex-col justify-between p-1">
                      <div className="w-4 h-4 bg-neutral-300/60 rounded-sm" />
                      <div className="h-1 bg-neutral-200 w-full" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-neutral-200 pt-3 text-[10px] font-bold text-neutral-400">
                  <span>ACTIVE HIBERNATION</span>
                  <span>CRĒDO™ CARGO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Core Specs Sheet */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight uppercase">
                Crēdo™ CARGO
              </h2>
              <p className="text-xs font-semibold text-neutral-500 tracking-widest uppercase">
                Premium Reusable Bulk Pallet Shippers
              </p>
            </div>

            {/* Technical Parameters Matrix */}
            <div className="grid grid-cols-1 gap-y-4 pt-4 border-t border-gray-100 text-sm">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Insulation Configuration</span>
                <span className="font-semibold text-neutral-800">HALF PALLET, FULL PALLET Framework Matrix</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Temperature Validation Corridor</span>
                <span className="font-semibold text-neutral-800">2°C – 8°C, 15°C – 25°C, Sub -20°C, Sub -40°C</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block">Operational Duration Profile</span>
                <span className="font-semibold text-neutral-800">Upto 120 Hours Continuous Buffer Protection</span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM SHARED FEATURES LOGISTICS PANEL ================= */}
        <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 border border-neutral-100 shadow-sm">
          <h3 className="text-xl font-bold tracking-tight text-neutral-900 mb-4 uppercase">
            Key features for Crēdo™ XTREME | Crēdo™ CARGO
          </h3>
          <p className="text-sm text-neutral-500 leading-relaxed max-w-4xl mb-8">
            Our reusable pallets are designed to provide your product with a durable and secure environment, ensuring that the temperature remains locked and sealed within the container, also protecting it from any physical damage which tends to occur in transit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-700">
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>Modular design scaling structure</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>Convertible stacking – Half pallet / Full pallet modes</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>Active hibernation validation logic</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>Protection from extreme atmospheric excursion</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>Extended passive thermal protection arrays</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>No electricity / Dry ice dependency needed</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-neutral-100 md:col-span-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>Multiple precise pre-conditioned temperature ranges supported natively</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}