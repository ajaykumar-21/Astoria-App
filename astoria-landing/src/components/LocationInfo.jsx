export default function LocationInfo() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading and description */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Left Heading */}
          <div className="lg:w-1/2">
            <h2 className="text-[#cfa441] text-4xl md:text-5xl font-serif leading-tight">
              A landmark <br />
              destination for <br />
              elevated <br />
              living
            </h2>
            <div className="h-[2px] w-40 bg-[#cfa441] mt-4"></div>
          </div>

          {/* Right Text */}
          <div className="lg:w-1/2 text-gray-300 text-lg leading-relaxed">
            <p>
              Ravet is where Pune's future is unfolding. Tucked between the
              Pune-Mumbai Expressway and the Katraj-Dehu Bypass, this rapidly
              developing suburban neighbourhood connects you to wherever you
              want to be without the usual hassle. It owes its incredible
              connectivity to the old and new Mumbai highways, the Aundh-Ravet
              BRTS road, and Akurdi Railway Station. Top schools, business hubs,
              entertainment enclaves, healthcare facilities and other essentials
              are all within close proximity. This isn't just a convenient
              location, but a smart one.
            </p>
          </div>
        </div>

        {/* Map Image */}
        <div className="rounded overflow-hidden shadow-lg">
          <img
            src={"/assets/map.png"}
            alt="Location Map"
            className="w-full object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
}
