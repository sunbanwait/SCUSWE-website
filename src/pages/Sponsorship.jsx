function Sponsorship() {
  return (
    <section className="py-20 md:py-32 bg-primary-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-nav-periwinkle/30 rounded-full blur-[60px] -z-10 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-nav-periwinkle text-text-eggplant text-sm font-bold rounded-full mb-6 shadow-sm">
            Partnerships
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-text-eggplant mb-6">Partner With Us</h1>
          <p className="text-lg text-text-eggplant font-medium ">
            The SWE chapter at Santa Clara University offers companies direct access to talented, diverse engineering students. Sponsors gain opportunities to network, recruit, and build brand recognition with a high-achieving student audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch mt-10">
          
          {/* Bronze Tier */}
          <article className="bg-primary-white rounded-[3rem] overflow-hidden flex flex-col mt-4 md:mt-10 border-4 border-bg-lavender hover:border-accent-purple/30 shadow-lg shadow-purple-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="bg-bg-lavender p-10 text-center transition-colors group-hover:bg-bg-lavender/80">
              <h2 className="text-3xl font-bold text-text-eggplant">Bronze</h2>
              <div className="mt-3 text-4xl font-extrabold text-text-eggplant">$800</div>
            </div>
            <div className="p-10 flex-grow">
              <ul className="space-y-4 text-sm text-text-eggplant font-medium ">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-accent-purple mr-3 mt-1.5 shrink-0"></span>
                  <span>2 complimentary events (workshops, info sessions, socials)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-accent-purple mr-3 mt-1.5 shrink-0"></span>
                  <span>Early career fair registration</span>
                </li>
              </ul>
            </div>
          </article>

          {/* Gold Tier */}
          <article className="bg-primary-white rounded-[3rem] overflow-hidden flex flex-col relative z-20 border-4 border-text-eggplant shadow-2xl shadow-purple-200 md:-translate-y-4 hover:-translate-y-6 transition-all duration-300 group">
            <div className="bg-text-eggplant p-12 text-center relative overflow-hidden">
              <span className="inline-block px-4 py-1 bg-primary-white text-text-eggplant text-xs font-extrabold uppercase tracking-wider rounded-full mb-4 shadow-sm relative z-10">Highest Impact</span>
              <h2 className="text-4xl font-bold text-primary-white relative z-10">Gold</h2>
              <div className="mt-3 text-5xl font-extrabold text-primary-white relative z-10">$2,500</div>
              
              {/* Cute decorative circles inside header */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            </div>
            
            <div className="p-10 flex-grow bg-bg-lavender/30">
              <ul className="space-y-5 text-sm text-text-eggplant font-medium ">
                <li className="flex items-start bg-primary-white p-4 rounded-2xl shadow-sm border border-nav-periwinkle/50">
                  <span className="w-2 h-2 rounded-full bg-text-eggplant mr-3 mt-1.5 shrink-0"></span>
                  <span className="font-bold text-text-eggplant">Featured as Gold Sponsor at all events/communications</span>
                </li>
                <li className="flex items-start px-2">
                  <span className="w-2 h-2 rounded-full bg-text-eggplant mr-3 mt-1.5 shrink-0"></span>
                  <span>4 complimentary events (career fair, panels, tech talks, socials)</span>
                </li>
                <li className="flex items-start px-2">
                  <span className="w-2 h-2 rounded-full bg-text-eggplant mr-3 mt-1.5 shrink-0"></span>
                  <span>Early yearly career fair registration</span>
                </li>
                <li className="flex items-start px-2">
                  <span className="w-2 h-2 rounded-full bg-text-eggplant mr-3 mt-1.5 shrink-0"></span>
                  <span>Quarterly resume book</span>
                </li>
                <li className="flex items-start px-2">
                  <span className="w-2 h-2 rounded-full bg-text-eggplant mr-3 mt-1.5 shrink-0"></span>
                  <span>Dedicated email to SWE members highlighting company/roles</span>
                </li>
                <li className="flex items-start px-2">
                  <span className="w-2 h-2 rounded-full bg-text-eggplant mr-3 mt-1.5 shrink-0"></span>
                  <span>Prominent logo placement on website, weekly newsletters, social media, event materials, and merchandise</span>
                </li>
              </ul>
            </div>
          </article>

          {/* Silver Tier */}
          <article className="bg-primary-white rounded-[3rem] overflow-hidden flex flex-col mt-4 md:mt-10 border-4 border-nav-periwinkle hover:border-accent-purple/30 shadow-lg shadow-purple-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="bg-nav-periwinkle/40 p-10 text-center transition-colors group-hover:bg-nav-periwinkle/60">
              <h2 className="text-3xl font-bold text-text-eggplant">Silver</h2>
              <div className="mt-3 text-4xl font-extrabold text-text-eggplant">$1,500</div>
            </div>
            <div className="p-10 flex-grow">
              <ul className="space-y-4 text-sm text-text-eggplant font-medium ">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-accent-purple mr-3 mt-1.5 shrink-0"></span>
                  <span>3 complimentary events</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-accent-purple mr-3 mt-1.5 shrink-0"></span>
                  <span>Early yearly career fair registration</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-accent-purple mr-3 mt-1.5 shrink-0"></span>
                  <span>Quarterly resume book</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-accent-purple mr-3 mt-1.5 shrink-0"></span>
                  <span>Logo placement on website, event materials, and social media channels</span>
                </li>
              </ul>
            </div>
          </article>

        </div>
        
        <div className="mt-20 text-center bg-bg-lavender rounded-[3rem] p-12 shadow-sm border border-white">
          <p className="text-text-eggplant font-medium mb-8 text-lg">Interested in partnering with us or have custom sponsorship ideas?</p>
          <a href="mailto:swe@scu.edu" className="inline-flex items-center justify-center px-10 py-5 bg-text-eggplant text-primary-white font-bold rounded-full hover:bg-text-eggplant/90 hover:-translate-y-1 shadow-lg shadow-purple-200/50 transition-all duration-300">
            Let's Get in Touch
          </a>
        </div>
        
      </div>
    </section>
  );
}

export default Sponsorship;
