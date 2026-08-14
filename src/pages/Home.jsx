function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-4 md:pt-20 md:pb-6 relative overflow-hidden flex flex-col justify-center">
        {/* Background Image with Translucent Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/assets/banner.png" alt="Santa Clara University Campus" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-bg-lavender/75"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block relative w-[95%] sm:w-auto bg-primary-white border-8 border-nav-periwinkle px-2 py-4 sm:px-8 sm:py-6 rounded-[2.5rem] shadow-lg mb-10 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <h1 className="font-epilogue font-black text-[4.8vw] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap text-text-eggplant tracking-tight leading-[1.1] relative z-10 text-center">
              SWE at Santa Clara University
            </h1>
          </div>
          <p className="text-lg md:text-xl text-text-eggplant font-medium mb-6 max-w-3xl mx-auto leading-relaxed">
            At Santa Clara University, SWE supports women in engineering with professional development, community-building events, and community outreach — all aimed at fostering connection, growth, and empowerment for women in STEM.
          </p>
        </div>
      </section>

      {/* Photo Carousel */}
      {/* Note: We use a CSS animation to scroll the photos infinitely */}
      <section className="pb-10 bg-bg-lavender relative overflow-hidden flex flex-col items-center group cursor-pointer" onClick={() => window.open('https://www.instagram.com/scuswe/', '_blank')}>
        <div className="absolute inset-0 bg-text-eggplant/10 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center backdrop-blur-[1px]">
          <span className="bg-primary-white px-6 py-3 rounded-full text-text-eggplant font-bold shadow-xl flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            Follow us on Instagram
          </span>
        </div>

        {/* The scrolling track (POLAROID VERSION) */}
        <div className="flex gap-4 min-w-max self-start animate-carousel pb-12 pt-4 px-4 -mx-4">
          <div className="w-96 flex-shrink-0 bg-[#Fdfdfd] p-4 pb-16 shadow-xl border border-gray-200 rounded-sm">
            <img src="/assets/swegoldengate.png" alt="SWE Event" className="w-full h-[18.75rem] object-cover rounded-sm shadow-inner" />
          </div>
          <div className="w-96 flex-shrink-0 bg-[#Fdfdfd] p-4 pb-16 shadow-xl border border-gray-200 rounded-sm">
            <div className="w-full h-[18.75rem] overflow-hidden rounded-sm shadow-inner">
              <img src="/assets/sweboard.png" alt="SWE Event" className="w-full h-full object-cover object-[50%_75%] transform scale-125 origin-[50%_75%]" />
            </div>
          </div>
          <div className="w-96 flex-shrink-0 bg-[#Fdfdfd] p-4 pb-16 shadow-xl border border-gray-200 rounded-sm">
            <img src="/assets/tablingswe.png" alt="SWE Event" className="w-full h-[18.75rem] object-cover object-bottom rounded-sm shadow-inner" />
          </div>
          <div className="w-96 flex-shrink-0 bg-[#Fdfdfd] p-4 pb-16 shadow-xl border border-gray-200 rounded-sm">
            <img src="/assets/swehonor.png" alt="SWE Event" className="w-full h-[18.75rem] object-cover rounded-sm shadow-inner" />
          </div>
          <div className="w-96 flex-shrink-0 bg-[#Fdfdfd] p-4 pb-16 shadow-xl border border-gray-200 rounded-sm">
            <img src="/assets/swewatercolor.png" alt="SWE Event" className="w-full h-[18.75rem] object-cover rounded-sm shadow-inner" />
          </div>
          <div className="w-96 flex-shrink-0 bg-[#Fdfdfd] p-4 pb-16 shadow-xl border border-gray-200 rounded-sm">
            <img src="/assets/conference3.png" alt="SWE Event" className="w-full h-[18.75rem] object-cover rounded-sm shadow-inner" />
          </div>
          <div className="w-96 flex-shrink-0 bg-[#Fdfdfd] p-4 pb-16 shadow-xl border border-gray-200 rounded-sm">
            <img src="/assets/swecandid.png" alt="SWE Event" className="w-full h-[18.75rem] object-cover rounded-sm shadow-inner" />
          </div>
          <div className="w-96 flex-shrink-0 bg-[#Fdfdfd] p-4 pb-16 shadow-xl border border-gray-200 rounded-sm">
            <img src="/assets/gsnorcal.png" alt="SWE Event" className="w-full h-[18.75rem] object-cover rounded-sm shadow-inner" />
          </div>
          <div className="w-96 flex-shrink-0 bg-[#Fdfdfd] p-4 pb-16 shadow-xl border border-gray-200 rounded-sm">
            <img src="/assets/conference2.swe.png" alt="SWE Event" className="w-full h-[18.75rem] object-cover object-top rounded-sm shadow-inner" />
          </div>

          {/* Duplicate the items for a seamless scroll effect */}
          <div className="w-96 flex-shrink-0 bg-[#Fdfdfd] p-4 pb-16 shadow-xl border border-gray-200 rounded-sm">
            <img src="/assets/swegoldengate.png" alt="SWE Event" className="w-full h-[18.75rem] object-cover rounded-sm shadow-inner" />
          </div>
          <div className="w-96 flex-shrink-0 bg-[#Fdfdfd] p-4 pb-16 shadow-xl border border-gray-200 rounded-sm">
            <div className="w-full h-[18.75rem] overflow-hidden rounded-sm shadow-inner">
              <img src="/assets/sweboard.png" alt="SWE Event" className="w-full h-full object-cover object-[50%_75%] transform scale-125 origin-[50%_75%]" />
            </div>
          </div>
          <div className="w-96 flex-shrink-0 bg-[#Fdfdfd] p-4 pb-16 shadow-xl border border-gray-200 rounded-sm">
            <img src="/assets/tablingswe.png" alt="SWE Event" className="w-full h-[18.75rem] object-cover object-bottom rounded-sm shadow-inner" />
          </div>
          <div className="w-96 flex-shrink-0 bg-[#Fdfdfd] p-4 pb-16 shadow-xl border border-gray-200 rounded-sm">
            <img src="/assets/swehonor.png" alt="SWE Event" className="w-full h-[18.75rem] object-cover rounded-sm shadow-inner" />
          </div>
          <div className="w-96 flex-shrink-0 bg-[#Fdfdfd] p-4 pb-16 shadow-xl border border-gray-200 rounded-sm">
            <img src="/assets/swewatercolor.png" alt="SWE Event" className="w-full h-[18.75rem] object-cover rounded-sm shadow-inner" />
          </div>
          <div className="w-96 flex-shrink-0 bg-[#Fdfdfd] p-4 pb-16 shadow-xl border border-gray-200 rounded-sm">
            <img src="/assets/conference3.png" alt="SWE Event" className="w-full h-[18.75rem] object-cover rounded-sm shadow-inner" />
          </div>
          <div className="w-96 flex-shrink-0 bg-[#Fdfdfd] p-4 pb-16 shadow-xl border border-gray-200 rounded-sm">
            <img src="/assets/swecandid.png" alt="SWE Event" className="w-full h-[18.75rem] object-cover rounded-sm shadow-inner" />
          </div>
          <div className="w-96 flex-shrink-0 bg-[#Fdfdfd] p-4 pb-16 shadow-xl border border-gray-200 rounded-sm">
            <img src="/assets/gsnorcal.png" alt="SWE Event" className="w-full h-[18.75rem] object-cover rounded-sm shadow-inner" />
          </div>
          <div className="w-96 flex-shrink-0 bg-[#Fdfdfd] p-4 pb-16 shadow-xl border border-gray-200 rounded-sm">
            <img src="/assets/conference2.swe.png" alt="SWE Event" className="w-full h-[18.75rem] object-cover object-top rounded-sm shadow-inner" />
          </div>
        </div>
      </section>

      {/* Activities Columns */}
      <section className="py-24 bg-primary-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Career Oriented Activities */}
            <div className="bg-bg-lavender p-10 rounded-[2.5rem] shadow-sm flex flex-col justify-between border-4 border-accent-purple/30 hover:border-accent-purple transition-colors h-full">
              <div>
                <h3 className="font-tangkiwood text-3xl text-text-eggplant mb-6">Career-Oriented Activities</h3>
                <ul className="text-text-eggplant font-medium text-lg leading-relaxed mb-8 list-disc list-inside space-y-2">
                  <li>Annual SWE Conference</li>
                  <li>Career Fairs</li>
                  <li>Company Visits</li>
                  <li>Networking Nights</li>
                  <li>Resume Refreshes</li>
                  <li>Interview Workshops</li>
                  <li>Professional Headshot Sessions</li>
                  <li>Company Panels with Industry Experts</li>
                </ul>
              </div>
              <div className="mt-auto h-72 w-full rounded-2xl overflow-hidden shadow-inner">
                <img src="/assets/conference1swe.png" alt="Career Events" className="w-full h-full object-cover object-[50%_20%] transform hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            {/* Social Events */}
            <div className="bg-bg-lavender p-10 rounded-[2.5rem] shadow-sm flex flex-col justify-between border-4 border-accent-purple/30 hover:border-accent-purple transition-colors h-full">
              <div>
                <h3 className="font-tangkiwood text-3xl text-text-eggplant mb-6">Social Events</h3>
                <ul className="text-text-eggplant font-medium text-lg leading-relaxed mb-8 list-disc list-inside space-y-2">
                  <li>Flower Bouquet Making</li>
                  <li>Group Study Sessions</li>
                  <li>Friendship Bracelet Making</li>
                  <li>Succulent Pot Painting</li>
                  <li>Yoga</li>
                  <li>Band Nights</li>
                  <li>Movie Nights</li>
                  <li>Events with Other SCU Organizations</li>
                </ul>
              </div>
              <div className="mt-auto h-72 w-full rounded-2xl overflow-hidden shadow-inner">
                <img src="/assets/yogaswe.png" alt="Social Events" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Engineering at SCU */}
      <section className="py-12 bg-[repeating-linear-gradient(to_right,#E8DDFA,#E8DDFA_160px,#F2EAFD_160px,#F2EAFD_320px)] text-text-eggplant relative z-10 rounded-[3rem] shadow-xl mx-4 sm:mx-6 lg:mx-8 mb-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-tangkiwood font-normal text-3xl md:text-4xl lg:text-5xl tracking-tight">Engineering at SCU</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Stat Card 1 */}
            <div className="group relative bg-primary-white/60 backdrop-blur-md p-8 rounded-3xl border-2 border-primary-white hover:border-nav-periwinkle hover:bg-primary-white/80 hover:shadow-[0_0_40px_rgba(204,191,248,0.5)] transition-all duration-500 cursor-pointer flex flex-col items-center justify-center text-center">
              <div className="text-6xl md:text-7xl font-black text-text-eggplant mb-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-sm">
                35<span className="text-4xl md:text-5xl">%</span>
              </div>
              <div className="h-1.5 w-16 bg-text-eggplant rounded-full mb-6 group-hover:w-full transition-all duration-500 ease-out"></div>
              
              <p className="text-base md:text-lg font-medium text-text-eggplant leading-relaxed">
                of students in the School of Engineering Class of 2026 were female
              </p>
              <p className="text-xs text-text-eggplant font-medium mt-2 font-medium opacity-90 uppercase tracking-wider">
                (record female enrollment)
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="group relative bg-primary-white/60 backdrop-blur-md p-8 rounded-3xl border-2 border-primary-white hover:border-text-eggplant hover:bg-primary-white/80 hover:shadow-[0_0_40px_rgba(204,191,248,0.5)] transition-all duration-500 cursor-pointer flex flex-col items-center justify-center text-center">
              <div className="text-6xl md:text-7xl font-black text-text-eggplant mb-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-sm">
                1968
              </div>
              <div className="h-1.5 w-16 bg-text-eggplant rounded-full mb-6 group-hover:w-full transition-all duration-500 ease-out"></div>
              
              <p className="text-base md:text-lg font-medium text-text-eggplant leading-relaxed">
                First female graduates from SCU with an engineering degree
              </p>
              <p className="text-xs text-text-eggplant font-medium mt-2 font-medium opacity-90 uppercase tracking-wider">
                (<span className="text-text-eggplant text-sm font-extrabold underline decoration-nav-periwinkle decoration-2 underline-offset-4">Nancy Streuter</span>, civil engineering)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Represent SWE (merch) */}
      <section className="py-20 bg-bg-lavender relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="font-tangkiwood text-4xl text-text-eggplant mb-8 tracking-wider">Represent SWE!</h2>
          
          {/* Merch Image */}
          <div className="w-full max-w-4xl mx-auto mb-8 rounded-[2.5rem] overflow-hidden border-8 border-nav-periwinkle">
            <img src="/assets/swemerch.png" alt="SWE Merchandise" className="w-full h-auto object-cover" />
          </div>

          <p className="text-xl text-text-eggplant font-medium mb-10 max-w-2xl mx-auto">
            Represent SWE with a crewneck and tote bag! You can pick up your purchase at any event.
          </p>
          
          {/* Merch Link */}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfxv_reQyjKsO9Ly-JcWLpmVI6watPZsb6VNClsqdx_PYtHFw/viewform?pli=1" target="_blank" rel="noopener noreferrer" className="inline-flex px-12 py-6 text-2xl md:text-3xl bg-text-eggplant hover:bg-text-eggplant/90 text-primary-white font-extrabold rounded-full shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 mx-auto items-center justify-center uppercase tracking-wider">
            Order Merch Here
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
