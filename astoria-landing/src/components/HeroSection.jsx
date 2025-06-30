import { Menu } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Main Hero Image */}
      <img
        src="/assets/Astoria-Royals-Landing-Page-Desktop.png"
        alt="Hero"
        className="w-full h-full object-cover absolute inset-0 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Top Navigation */}
      <div className="relative z-10 flex justify-between items-center px-6 md:px-12 py-4">
        {/* Left Branding */}
        <div className="flex items-center space-x-4">
          {/* Uncomment logo when available */}
          {/* <img src="/assets/astoria-logo.png" alt="Astoria Royals" className="h-10" /> */}
          <img src="/assets/Nirman.png" alt="Nirman Greens" className="h-16" />
        </div>

        {/* Right Action */}
        <div className="flex items-center space-x-4">
          <button className="border px-4 py-1 text-sm uppercase tracking-wide">
            Schedule A Site Visit
          </button>
          <Menu className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
