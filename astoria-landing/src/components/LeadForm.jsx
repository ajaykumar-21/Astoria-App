import { useState } from "react";

function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

    // Formatted body for MDOC API (CRM)
    const crmBody = new URLSearchParams({
      DataFrom: "T",
      ApiKey: "a28cc43c-526d-4010-970e-0d0e92c18902",
      EnquiryDate: today,
      Salutation: "",
      FirstName: formData.name,
      MiddleName: "",
      LastName: "",
      MobileNo: formData.phone,
      Email: formData.email,
      Preferences: "",
      Source: "Digitals",
      SourceDetail: "Website",
      AgeRange: "",
      CurrentLivingPlace: "",
      NativePlace: "",
      Industry: "",
      CompanyName: "",
      Budget: "",
      PossessionReq: "",
      BuyingPurpose: "",
      BookingPlanWithin: "",
      PreferredBankForLoan: "",
      Country: "",
      State: "",
      City: "",
      PinCode: "",
      DOB: "",
      PanNo: "",
      PreferredLocation: "",
      AlternativeMobileNo: "",
      WhatsAppNo: formData.phone,
      Remark: "Submitted from Landing Page",
    });

    try {
      // 1. Send to CRM
      const crmRes = await fetch(
        "https://nirman.maksoftbox.com/MDocBoxAPI/MdocAddEnquiryORTeleCalling",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: crmBody.toString(),
        }
      );

      const crmJson = await crmRes.json();

      if (crmJson.status === "success") {
        setStatus("✅ CRM submission successful.");
      } else {
        setStatus(`❌ CRM Error: ${crmJson.message}`);
      }

      // 2. Send to your backend DB (optional if live)
      await fetch("https://astoria-app.onrender.com/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setFormData({ name: "", email: "", phone: "" });
    } catch (err) {
      console.error(err);
      setStatus("❌ Submission failed. Please try again.");
    }
  };

  return (
    <section className="bg-black text-white px-4 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 border border-[#cfa441]">
        {/* Left: Form Panel */}
        <div className="p-8 flex flex-col justify-center border-r border-[#cfa441]">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-8">
            THE SUITE LIFE UPGRADE <br />
            YOU'VE BEEN WAITING <br />
            FOR IS HERE
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1">Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full bg-transparent border border-[#cfa441] px-4 py-2 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full bg-transparent border border-[#cfa441] px-4 py-2 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1">Phone Number*</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full bg-transparent border border-[#cfa441] px-4 py-2 outline-none"
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="bg-[#cfa441] text-black px-6 py-3 w-full font-semibold hover:bg-[#b18c33] transition"
              >
                KNOW MORE
              </button>
            </div>
          </form>

          <p className="text-xs text-center mt-6 text-gray-400">
            *T&C Apply <br />
            Your privacy is very important to us; we will never share your
            information.
          </p>
        </div>

        {/* Right: Image Panel */}
        <div className="h-full w-full">
          <img
            src={"/assets/Lead-Form-Building.png"}
            alt="Project Building"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default LeadForm;
