import React from 'react'

// Screenshots se extract kiya gaya accurate data array
const industriesData = [
  {
    id: "pharmaceuticals",
    title: "Pharmaceuticals",
    description: "The pharmaceutical industry requires highly customized supply chain solutions. Our temperature-controlled warehouse ensures seamless end-to-end service, prioritizing transparency and attention to detail for precise and reliable shipments.",
    iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", 
  },
  {
    id: "chemicals",
    title: "Chemicals",
    description: "We follow IATA guidelines for chemical imports and exports, offering competitive options. With strong authority relations and continuous monitoring, we ensure a smooth, compliant, and efficient supply chain experience.",
    iconPath: "M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-1.5V9a3 3 0 00-3-3h-3V4.5a3 3 0 00-3-3H4.5a3 3 0 00-3 3V9H3a3 3 0 003 3h1.5v1.5a3 3 0 003 3h3v1.5a3 3 0 003 3h6z",
  },
  {
    id: "textiles",
    title: "Textiles",
    description: "We are sensitive to the tightly controlled consignments and seasonality within the textile industry. We optimize your supply chain through our distribution and consolidation services. Our door to door offerings and constant shipment tracking allow you to efficiently monitor your consignments.",
    iconPath: "M21 7.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v1.5m18 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8m18 0H3",
  },
  {
    id: "energy",
    title: "Energy",
    description: "As an organization we have kept up with the growing consumption of renewable energy through our forward looking perspective. We have supported the transport of cutting edge tools used to generate renewable energy by coming up with creative methods to serve emerging markets.",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    id: "automobile",
    title: "Automobile",
    description: "Our adaptable nature allows us to handle inventory of any dimension and value for the automobile industry. We demonstrate the same flexibility by catering to the dynamic market trends of this industry across our global network.",
    iconPath: "M9 17a2 2 0 11-4 0 2 2 0 014 0z M19 17a2 2 0 11-4 0 2 2 0 014 0z M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2h-2",
  },
  {
    id: "packaging",
    title: "Packaging",
    description: "The packaging industry needs forwarders with a widespread reach. We are able to offer this through our global partnerships and diverse network of carriers. Our experienced team uses this network to provide you with timely and affordable solutions.",
    iconPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14v10m0 0l-8-4m0 0V7",
  },
  {
    id: "time-critical-cargo",
    title: "Time Critical Cargo",
    description: "We leverage strong carrier relations to secure priority pricing while ensuring swift, efficient operations for time-critical cargo.",
    iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    id: "glassware",
    title: "Glassware",
    description: "Our team is acquainted with the extensive reach and distribution network of the glassware industry. We couple our global supply chain knowledge with material handling expertise to ensure your shipments are transported reliably and efficiently.",
    iconPath: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
  },
];

// Screenshot se nikala hua accurate FAQ Data array
const faqData = [
  {
    id: "faq-1",
    question: "What industries do you serve?",
    answer: "We offer tailored logistics and supply chain services across key market sectors including Pharmaceuticals, Chemicals, Textiles, Energy, Automobile, Packaging, Time Critical Cargo, and Glassware imports/exports."
  },
  {
    id: "faq-2",
    question: "How do you handle temperature-sensitive shipments?",
    answer: "We utilize modern temperature-controlled storage and pristine cold-chain tracking frameworks that fully prioritize product safety and visibility from dispatch to delivery."
  },
  {
    id: "faq-3",
    question: "What sets your logistics apart?",
    answer: "Our direct combinations of localized freight expertise, multi-carrier network control, structural scalability, and continuous end-to-end milestone updates ensure absolute transit reliability."
  },
  {
    id: "faq-4",
    question: "How do you ensure compliance with regulations?",
    answer: "Our operations rigorously match continuous regional authority requirements and specific international bodies, explicitly maintaining standard guidelines like IATA directives for hazardous materials."
  }
];

function Industries() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-orange-200">
      
      {/* Header Title Section */}
      <div className="max-w-4xl mx-auto text-center pt-16 pb-12 px-6">
        <h1 className="text-4xl md:text-5xl font-light tracking-wide text-neutral-900 uppercase mb-6">
          Industries
        </h1>
        <p className="text-base md:text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto">
          Over the past two decades we have been coming up with innovative ways to 
          enable global trade across various industries.
        </p>
      </div>

      {/* Main Container for Alternating Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col gap-12 md:gap-0 relative">
          
          {industriesData.map((industry, index) => {
            // Logic to separate left and right alignment on desktop
            const isRightSide = index % 2 !== 0;

            return (
              <div
                key={industry.id}
                className={`flex w-full justify-start md:mb-4 ${
                  isRightSide ? "md:justify-end" : "md:justify-start"
                }`}
              >
                {/* Specific Rounded Styling and Orange Background color (#ee8553) */}
                <div className="w-full md:w-[42%] bg-[#ee8553] text-white p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                  
                  {/* Icon and Title Layout */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 inline-flex items-center justify-center shrink-0 w-14 h-14">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d={industry.iconPath}
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                      {industry.title}
                    </h2>
                  </div>

                  {/* Card Body Description */}
                  <p className="text-sm md:text-[0.95rem] text-white/90 leading-relaxed font-light">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
          
        </div>
      </div>

      {/* --- NEW SECTION: Frequently Asked Questions --- */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-gray-100">
        
        {/* Left column heading text */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight">
            Frequently Asked <span className="text-neutral-400 font-normal">Questions</span>
          </h2>
          <p className="text-neutral-500 text-sm md:text-base max-w-sm leading-relaxed">
            Find answers to common industry questions, ensuring clarity on our services, processes, and solutions.
          </p>
        </div>

        {/* Right column pure CSS native accordion items */}
        <div className="lg:col-span-7 divide-y divide-gray-200">
          {faqData.map((faq) => (
            <details key={faq.id} className="group py-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-4 cursor-pointer text-neutral-800 hover:text-neutral-900 transition-colors list-none">
                <span className="text-base md:text-md font-medium tracking-wide">
                  {faq.question}
                </span>
                {/* Custom animated chevron down icon */}
                <svg
                  className="w-5 h-5 text-gray-400 group-open:-rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-3 text-neutral-600 text-sm md:text-base leading-relaxed pl-1 animate-fadeIn">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* --- NEW SECTION: Bottom Accent Banner --- */}
      <div className="w-full bg-[#707070] text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Tailored Logistics for Every Industry
          </h3>
          <p className="text-white/80 text-base md:text-lg font-light tracking-wide">
            Delivering tailored supply chain solutions to meet the unique needs of industries worldwide.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Industries;