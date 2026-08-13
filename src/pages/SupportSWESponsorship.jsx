function SupportSWESponsorship() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
      <div className="text-center mb-20 animate-fade-in-up">
        <h1 className="font-poppins font-extrabold text-5xl md:text-7xl text-text-eggplant mb-6 tracking-tight">
          Sponsorship
        </h1>
        <div className="w-24 h-1.5 bg-accent-purple mx-auto rounded-full mb-8"></div>
      </div>
      <div className="bg-primary-white rounded-3xl p-8 md:p-12 shadow-xl shadow-purple-900/5 mb-12 border border-purple-100 flex flex-col items-center">
        <p className="text-lg md:text-xl text-text-eggplant font-medium leading-relaxed mb-8 text-center max-w-3xl">
          The SWE chapter at Santa Clara University offers companies direct access to talented, diverse engineering students, particularly women in STEM. Sponsors gain opportunities to network, recruit, and build brand recognition with a high-achieving, engaged student audience.
        </p>
        
        <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-md">
          <img src="/assets/sponsorship.png" alt="Sponsorship Opportunities" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
}

export default SupportSWESponsorship;
