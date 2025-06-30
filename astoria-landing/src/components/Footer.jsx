import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1717] text-white py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        {/* Brand Logos */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img
            src="/assets/Nirman.png"
            alt="Astoria Royals"
            className="h-26 object-contain"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 w-full">
          {/* Left: Address Info */}
          {/* Vertical Divider */}
          <div className="hidden md:block h-auto w-px bg-white/30" />
          <div className="text-sm text-gray-300 md:w-1/2 space-y-4">
            <div>
              <p className="font-semibold uppercase mb-1">Site Address</p>
              <p>
                Astoria Royals, Aundh-Ravet BRTS Road, Ravet, Pimpri-Chinchwad,
                Maharashtra - 412101
              </p>
            </div>
            <div>
              <p className="font-semibold uppercase mb-1">Corporate Office</p>
              <p>
                Amar Business Zone, B Wing, Office No. 902 S. No. 87/1A & 87
                (Part), Baner, Pune - 411045
              </p>
            </div>
          </div>

          <div className="hidden md:block h-auto w-px bg-white/30" />

          {/* Right: Phone, QR, MAHARERA, Socials */}
          <div className="md:w-1/2 flex flex-col space-y-4 text-sm text-gray-300">
            {/* Phone */}
            <div className="flex items-center gap-2 text-lg font-bold">
              <Phone size={18} /> 00000 00000
            </div>

            {/* QR Code */}
            <div className="flex gap-3">
              <img src="/assets/QR.png" alt="QR Code" className="w-32 h-16" />
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <img
                src="/assets/Insta.png"
                alt="Instagram"
                className="w-5 h-5"
              />
              <img
                src="/assets/Youtube.png"
                alt="YouTube"
                className="w-5 h-5"
              />
              <img
                src="/assets/Facebook.png"
                alt="Facebook"
                className="w-5 h-5"
              />
              <img
                src="/assets/LinkdIn.png"
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
