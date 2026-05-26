import React from 'react';

const Footer = () => {
  // Data structure for India Offices
  const indiaOffices = [
    {
      city: "Mumbai",
      address: "902, 'A' Wing, Times Square, Andheri-Kurla Road, Marol, Andheri (East), Mumbai 400 059",
      phone: "+91 22-6222-6222"
    },
    {
      city: "Ahmedabad",
      address: "D21 The Address, True Value West Gate, SG highway, Ahmedabad 380 009",
      phone: "+91 7940227900"
    },
    {
      city: "Bengaluru",
      address: "205, 2nd floor, Connection point H.A.L Airport Exit Road, Bangalore 560 017",
      phone: "+91 80-4112-5590"
    },
    {
      city: "Chennai",
      address: "Flat no.A1, 1st floor, No 24 Vembuli Amman koil Street, Palavanthangal Chennai- 600 114",
      phone: "+91-44-22241462/ 1464"
    },
    {
      city: "Delhi",
      address: "Penta Freight Pvt. Ltd. Khasra No. 10/1/10/2, 11/5/1, No. 4, Samalkha, Old Delhi – Gurgaon Road, Opposite Primary School, New Delhi – 110 037",
      phone: "+91 11-4078-2222"
    },
    {
      city: "Hyderabad",
      address: "G-27 & 28, Cargo Satellite Building, Rajiv Gandhi International Airport, Shamshabad 501 218, Telangana, India",
      phone: "+91 40-2400-4048"
    },
    {
      city: "Kolkata",
      address: "131, Jangalpur Road, near airport, Gate No. 3, Motilal Colony, P.O Rajbari, Kolkata 700 081, West Bengal",
      phone: "+91 33-2514-7089"
    }
  ];

  return (
    <footer className="relative w-full bg-[#fcfcfc] text-[#555555] font-sans pt-16 pb-8 px-8 md:px-16 lg:px-24 tracking-wide overflow-hidden select-none">
      
      {/* Background Subtle Line Pattern (Simulated) */}
      {/* <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[length:60px_60px] bg-[position:0_0,30px_30px]"></div> */}

      {/* Left Vertical Ribbon Branding */}
      <div className="absolute left-0 top-1/3 bg-[#f37023] text-white py-4 px-1.5 font-bold uppercase tracking-widest text-xs [writing-mode:vertical-lr] rotate-180 shadow-sm z-10">
        Penta Freight
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- INDIA OFFICES SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          
          {/* Main India Intro Grid Item */}
          <div>
            <h2 className="text-2xl font-bold text-[#111111] mb-4">
              Our <span className="text-[#f37023]">India</span> Offices
            </h2>
            <p className="text-sm text-[#666663] leading-relaxed max-w-[240px]">
              Penta Freight delivers seamless logistics across India, with branches in key cities for your convenience.
            </p>
          </div>

          {/* Map India Office Cards */}
          {indiaOffices.map((office, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-lg font-bold text-[#111111] mb-4">{office.city}</h3>
              <p className="text-xs text-[#666666] leading-relaxed mb-2 max-w-[250px]">
                {office.address}
              </p>
              <p className="text-xs text-[#555555] font-medium mt-auto">
                {office.phone}
              </p>
            </div>
          ))}
        </div>

        {/* --- USA OFFICES SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 pb-16 border-b border-gray-200">
          
          {/* Main USA Intro Grid Item */}
          <div>
            <h2 className="text-2xl font-bold text-[#111111] mb-4">
              Our <span className="text-[#f37023]">USA</span> Office
            </h2>
            <p className="text-sm text-[#666663] leading-relaxed max-w-[240px]">
              Penta Freight has expanded its operations globally, beginning with the USA, to offer continuous support across continents.
            </p>
          </div>

          {/* Chicago Office Card */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-[#111111] mb-4">Chicago</h3>
            <p className="text-xs text-[#666666] leading-relaxed mb-2 max-w-[250px]">
              Penta Freight Pvt.Ltd 5100 Newport Dr. Suite 4, Rolling Meadows, IL 60008 USA
            </p>
            <p className="text-xs text-[#555555] font-medium mt-auto">
              +040 234 6559 / +224 434 2154
            </p>
          </div>

          {/* Empty placeholders to precisely match the clean grid column alignment */}
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
        </div>

        {/* --- FOOTER BOTTOM STRIP --- */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#555555] gap-4">
          
          {/* Copyright Information */}
          <div>
            © 2026 Penta Freight. All Rights Reserved Developed by <span className="hover:text-[#f37023] cursor-pointer transition-colors">Nipralo</span>
          </div>

          {/* Social Icon / LinkedIn */}
          <div className="flex items-center justify-center">
            <a 
              href="#linkedin" 
              className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center text-[10px] font-bold text-[#555555] hover:bg-[#f37023] hover:text-white hover:border-transparent transition-all"
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>

          {/* Privacy & Legal Links */}
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-[#f37023] transition-colors">Privacy Policy</a>
            <span className="text-gray-300">•</span>
            <a href="#terms" className="hover:text-[#f37023] transition-colors">Terms and Conditions</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;