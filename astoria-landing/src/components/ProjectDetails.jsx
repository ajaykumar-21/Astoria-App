const ProjectDetails = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Left side - Title and Line */}
        <div className="lg:w-1/2">
          <h1 className="text-[#cfa441] font-serif text-5xl md:text-6xl leading-tight">
            Where <br />
            prestige <br />
            takes <br />
            residence
          </h1>
          <div className="h-1 w-48 bg-[#cfa441] mt-4"></div>
        </div>

        {/* Right side - Description */}
        <div className="lg:w-1/2 text-gray-300 text-lg leading-relaxed">
          <p>
            Royal living is reimagined as <strong>Astoria Royals</strong>, a
            luxurious project of spacious 4 & 3 BHK homes. Thoughtful layout and
            optimal use of space are not the only defining attributes of this
            gem of a residence; it also boasts a massive array of amenities.
            Tucked in a fast-developing location and constructed with precision
            in mind to bring to you a lifestyle that resonates with the name of
            the project itself.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
