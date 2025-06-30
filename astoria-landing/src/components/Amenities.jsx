export default function Amenities() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title & Description */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="lg:w-1/2">
            <h2 className="text-[#cfa441] text-4xl md:text-5xl font-serif leading-tight">
              A stellar <br />
              lineup <br />
              of luxuries
            </h2>
            <div className="h-[2px] w-40 bg-[#cfa441] mt-4"></div>
          </div>
          <div className="lg:w-1/2 text-gray-300 text-lg leading-relaxed">
            <p>
              Luxury isn't a label at <strong>Astoria Royals</strong>, it is a
              full-blown experience. From indulgent leisure spaces and wellness
              facilities to top-tier entertainment, every amenity is designed to
              surpass expectations. Whatever you desire, chances are, it's
              already waiting for you.
            </p>
          </div>
        </div>

        {/* Image Strip */}
        <div className="relative flex justify-center items-center h-[400px]">
          {/* Left Image */}
          <img
            src={"/assets/banner-2.png"}
            alt="Luxury 1"
            className="absolute left-1/2 transform -translate-x-[150%] scale-90 opacity-70 rounded-lg shadow-lg hidden md:block w-[300px]"
          />

          {/* Center Image with Tag */}
          <div className="relative z-10">
            <img
              src={"/assets/banner-1.jpg"}
              alt="Swimming Pool"
              className="w-[400px] md:w-[450px] rounded-lg shadow-2xl"
            />
            <span className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white text-sm px-4 py-1 rounded">
              Swimming Pool
            </span>
          </div>

          {/* Right Image */}
          <img
            src={"/assets/banner-3.png"}
            alt="Luxury 3"
            className="absolute right-1/2 transform translate-x-[150%] scale-90 opacity-70 rounded-lg shadow-lg hidden md:block w-[300px]"
          />
        </div>
      </div>
    </section>
  );
}
