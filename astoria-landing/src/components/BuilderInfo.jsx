import { useState } from "react";

export default function BuilderInfo() {
  const [openAccordion, setOpenAccordion] = useState("connectivity");

  const handleToggle = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Trusted Builder Section */}
        <div className="flex flex-col lg:flex-row gap-6 items-start mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-[#cfa441] text-5xl font-serif leading-tight mb-4">
              From the trusted
            </h2>
            <div className="h-[2px] w-40 bg-[#cfa441]"></div>
          </div>

          <div className="lg:w-1/2 flex gap-4 items-start">
            <p className="text-gray-300 text-base leading-relaxed">
              Nirman Greens is a dynamic force in Pune's real estate sector with
              30+ years of expertise. With 15 million square feet delivered and
              even more in the pipeline, every project they undertake is a
              testament to masterful craftsmanship and a relentless pursuit for
              excellence. Driven by innovation and an eye for detail, they
              remain steadfast in their commitment to conceiving spaces that
              adapt to nature and evolve with time.
            </p>
          </div>
        </div>

        {/* Key Distances Title */}
        <h3 className="text-3xl text-center text-gray-200 font-serif mb-10">
          Key Distances
        </h3>

        {/* Accordion UI */}
        <div className="space-y-4 max-w-2xl mx-auto text-sm">
          {/* CONNECTIVITY */}
          <div className="border border-[#cfa441]">
            <button
              onClick={() => handleToggle("connectivity")}
              className="w-full text-left px-6 py-3 flex justify-between items-center"
            >
              <span className="font-semibold tracking-wide">CONNECTIVITY</span>
              <span>{openAccordion === "connectivity" ? "▲" : "▼"}</span>
            </button>
            {openAccordion === "connectivity" && (
              <ul className="px-6 pb-4 text-gray-300">
                <li className="flex justify-between py-1">
                  <span>Mumbai–Pune Expressway</span>
                  <span>05 Mins.</span>
                </li>
                <li className="flex justify-between py-1">
                  <span>Hinjawadi connectivity</span>
                  <span>20 Mins.</span>
                </li>
                <li className="flex justify-between py-1">
                  <span>Balewadi High Street</span>
                  <span>30 Mins.</span>
                </li>
              </ul>
            )}
          </div>

          {/* LEISURE (Static look) */}
          <div className="border border-[#cfa441] px-6 py-3 flex justify-between items-center">
            <span className="font-semibold tracking-wide">LEISURE</span>
            <span>▼</span>
          </div>

          {/* SHOPPING / MALLS (Static look) */}
          <div className="border border-[#cfa441] px-6 py-3 flex justify-between items-center">
            <span className="font-semibold tracking-wide">SHOPPING/ MALLS</span>
            <span>▼</span>
          </div>

          {/* EDUCATIONAL INSTITUTES (Static look) */}
          <div className="border border-[#cfa441] px-6 py-3 flex justify-between items-center">
            <span className="font-semibold tracking-wide">
              EDUCATIONAL INSTITUTES
            </span>
            <span>▼</span>
          </div>

          {/* HEALTHCARE (Static look) */}
          <div className="border border-[#cfa441] px-6 py-3 flex justify-between items-center">
            <span className="font-semibold tracking-wide">HEALTHCARE</span>
            <span>▼</span>
          </div>
        </div>
      </div>
    </section>
  );
}
