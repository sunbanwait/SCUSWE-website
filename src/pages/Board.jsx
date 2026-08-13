function Board() {
  return (
    <section className="py-12 md:py-20 bg-[repeating-linear-gradient(to_right,#E8DDFA,#E8DDFA_160px,#F2EAFD_160px,#F2EAFD_320px)] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-nav-periwinkle/30 rounded-full blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="bg-primary-white max-w-4xl mx-auto px-8 py-10 rounded-[3rem] shadow-sm mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-text-eggplant mb-6">Meet the ‘26-’27 Board!</h1>
          <p className="text-lg text-text-eggplant font-medium max-w-2xl mx-auto ">
            These are the students working behind the scenes to make SWE at SCU a supportive, fun, and empowering community. Say hi if you see us around campus!
          </p>
        </div>

        {/* Add new board members below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Board Member 1 */}
          <div className="bg-primary-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-nav-periwinkle group">
            <div className="w-64 h-64 bg-bg-lavender border-4 border-accent-purple rounded-[4rem] flex items-center justify-center text-text-eggplant font-bold mb-6 overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
              <img src="/assets/kaylam.png" alt="Kayla Malloy" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-text-eggplant mb-1">Kayla Malloy</h2>
            <div className="bg-nav-periwinkle px-4 py-1 rounded-full mb-4 mt-2">
              <p className="text-xs font-medium text-text-eggplant uppercase tracking-wide">President</p>
            </div>
            <p className="text-sm font-medium text-text-eggplant mb-1">Computer Science and Engineering, 2027</p>
            <p className="text-xs text-text-eggplant font-medium bg-bg-lavender px-3 py-1 rounded-full mt-2 inline-block ">Santa Clarita, CA</p>
          </div>

          {/* Board Member 2 */}
          <div className="bg-primary-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-nav-periwinkle group">
            <div className="w-64 h-64 bg-bg-lavender border-4 border-accent-purple rounded-[4rem] flex items-center justify-center text-text-eggplant font-bold mb-6 overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
              <img src="/assets/izzys.png" alt="Isabella Simonutti" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-text-eggplant mb-1">Isabella Simonutti</h2>
            <div className="bg-nav-periwinkle px-4 py-1 rounded-full mb-4 mt-2">
              <p className="text-xs font-medium text-text-eggplant uppercase tracking-wide">VP Conference + Budget</p>
            </div>
            <p className="text-sm font-medium text-text-eggplant mb-1">Mechanical Engineering, 2027</p>
            <p className="text-xs text-text-eggplant font-medium bg-bg-lavender px-3 py-1 rounded-full mt-2 inline-block ">Salt Lake City, UT</p>
          </div>

          {/* Board Member 3 */}
          <div className="bg-primary-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-nav-periwinkle group">
            <div className="w-64 h-64 bg-bg-lavender border-4 border-accent-purple rounded-[4rem] flex items-center justify-center text-text-eggplant font-bold mb-6 overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
              <img src="/assets/juliag.png" alt="Julia Garcia" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-text-eggplant mb-1">Julia Garcia</h2>
            <div className="bg-nav-periwinkle px-4 py-1 rounded-full mb-4 mt-2">
              <p className="text-xs font-medium text-text-eggplant uppercase tracking-wide">VP Relations</p>
            </div>
            <p className="text-sm font-medium text-text-eggplant mb-1">Mechanical Engineering, 2028</p>
            <p className="text-xs text-text-eggplant font-medium bg-bg-lavender px-3 py-1 rounded-full mt-2 inline-block ">Pleasant Hill, CA</p>
          </div>

          {/* Board Member 4 */}
          <div className="bg-primary-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-nav-periwinkle group">
            <div className="w-64 h-64 bg-bg-lavender border-4 border-accent-purple rounded-[4rem] flex items-center justify-center text-text-eggplant font-bold mb-6 overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
              <img src="/assets/riog.png" alt="Rio Fleming" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-text-eggplant mb-1">Rio Fleming</h2>
            <div className="bg-nav-periwinkle px-4 py-1 rounded-full mb-4 mt-2">
              <p className="text-xs font-medium text-text-eggplant uppercase tracking-wide">VP Fundraising</p>
            </div>
            <p className="text-sm font-medium text-text-eggplant mb-1">Mechanical Engineering, 2028</p>
            <p className="text-xs text-text-eggplant font-medium bg-bg-lavender px-3 py-1 rounded-full mt-2 inline-block ">Morro Bay, CA</p>
          </div>

          {/* Board Member 5 */}
          <div className="bg-primary-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-nav-periwinkle group">
            <div className="w-64 h-64 bg-bg-lavender border-4 border-accent-purple rounded-[4rem] flex items-center justify-center text-text-eggplant font-bold mb-6 overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
              <img src="/assets/johannab.png" alt="Johanna Brown" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-text-eggplant mb-1">Johanna Brown</h2>
            <div className="bg-nav-periwinkle px-4 py-1 rounded-full mb-4 mt-2">
              <p className="text-xs font-medium text-text-eggplant uppercase tracking-wide">Secretary</p>
            </div>
            <p className="text-sm font-medium text-text-eggplant mb-1">Bioengineering, 2027</p>
            <p className="text-xs text-text-eggplant font-medium bg-bg-lavender px-3 py-1 rounded-full mt-2 inline-block ">Rocky Hill, CT</p>
          </div>

          {/* Board Member 6 */}
          <div className="bg-primary-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-nav-periwinkle group">
            <div className="w-64 h-64 bg-bg-lavender border-4 border-accent-purple rounded-[4rem] flex items-center justify-center text-text-eggplant font-bold mb-6 overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
              <img src="/assets/shreyav.png" alt="Shreya Vishwanath" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-text-eggplant mb-1">Shreya Vishwanath</h2>
            <div className="bg-nav-periwinkle px-4 py-1 rounded-full mb-4 mt-2">
              <p className="text-xs font-medium text-text-eggplant uppercase tracking-wide">Outreach Coordinator</p>
            </div>
            <p className="text-sm font-medium text-text-eggplant mb-1">Computer Science and Engineering, 2027</p>
            <p className="text-xs text-text-eggplant font-medium bg-bg-lavender px-3 py-1 rounded-full mt-2 inline-block ">Redondo Beach, CA</p>
          </div>

          {/* Board Member 7 */}
          <div className="bg-primary-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-nav-periwinkle group">
            <div className="w-64 h-64 bg-bg-lavender border-4 border-accent-purple rounded-[4rem] flex items-center justify-center text-text-eggplant font-bold mb-6 overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
              <img src="/assets/savanag.png" alt="Savana Garber" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-text-eggplant mb-1">Savana Garber</h2>
            <div className="bg-nav-periwinkle px-4 py-1 rounded-full mb-4 mt-2">
              <p className="text-xs font-medium text-text-eggplant uppercase tracking-wide">Event Coordinator</p>
            </div>
            <p className="text-sm font-medium text-text-eggplant mb-1">Mechanical Engineering, 2029</p>
            <p className="text-xs text-text-eggplant font-medium bg-bg-lavender px-3 py-1 rounded-full mt-2 inline-block ">Pleasanton, CA</p>
          </div>

          {/* Board Member 8 */}
          <div className="bg-primary-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-nav-periwinkle group">
            <div className="w-64 h-64 bg-bg-lavender border-4 border-accent-purple rounded-[4rem] flex items-center justify-center text-text-eggplant font-bold mb-6 overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
              <img src="/assets/ariac.png" alt="Aria Cuthbertson" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-text-eggplant mb-1">Aria Cuthbertson</h2>
            <div className="bg-nav-periwinkle px-4 py-1 rounded-full mb-4 mt-2">
              <p className="text-xs font-medium text-text-eggplant uppercase tracking-wide">Treasurer</p>
            </div>
            <p className="text-sm font-medium text-text-eggplant mb-1">Mechanical Engineering, 2029</p>
            <p className="text-xs text-text-eggplant font-medium bg-bg-lavender px-3 py-1 rounded-full mt-2 inline-block ">Maui, HI</p>
          </div>

          {/* Board Member 9 */}
          <div className="bg-primary-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-nav-periwinkle group">
            <div className="w-64 h-64 bg-bg-lavender border-4 border-accent-purple rounded-[4rem] flex items-center justify-center text-text-eggplant font-bold mb-6 overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
              <img src="/assets/izzyg.png" alt="Isabella Guzman" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-text-eggplant mb-1">Isabella Guzman</h2>
            <div className="bg-nav-periwinkle px-4 py-1 rounded-full mb-4 mt-2">
              <p className="text-xs font-medium text-text-eggplant uppercase tracking-wide">Professional Development</p>
            </div>
            <p className="text-sm font-medium text-text-eggplant mb-1">Computer Science and Engineering, 2029</p>
            <p className="text-xs text-text-eggplant font-medium bg-bg-lavender px-3 py-1 rounded-full mt-2 inline-block ">San Francisco, CA</p>
          </div>
          
          {/* Board Member 10 */}
          <div className="bg-primary-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-nav-periwinkle group">
            <div className="w-64 h-64 bg-bg-lavender border-4 border-accent-purple rounded-[4rem] flex items-center justify-center text-text-eggplant font-bold mb-6 overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
              <img src="/assets/sunjanab.png" alt="Sunjana Banwait" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-text-eggplant mb-1">Sunjana Banwait</h2>
            <div className="bg-nav-periwinkle px-4 py-1 rounded-full mb-4 mt-2">
              <p className="text-xs font-medium text-text-eggplant uppercase tracking-wide">Public Relations</p>
            </div>
            <p className="text-sm font-medium text-text-eggplant mb-1">Computer Science and Engineering, 2029</p>
            <p className="text-xs text-text-eggplant font-medium bg-bg-lavender px-3 py-1 rounded-full mt-2 inline-block ">Morgan Hill, CA</p>
          </div>

          {/* Board Member 11 */}
          <div className="bg-primary-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-nav-periwinkle group">
            <div className="w-64 h-64 bg-bg-lavender border-4 border-accent-purple rounded-[4rem] flex items-center justify-center text-text-eggplant font-bold mb-6 overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
              <img src="/assets/arpitham.png" alt="Arpitha Mamidi" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-text-eggplant mb-1">Arpitha Mamidi</h2>
            <div className="bg-nav-periwinkle px-4 py-1 rounded-full mb-4 mt-2">
              <p className="text-xs font-medium text-text-eggplant uppercase tracking-wide">Corporate Relations</p>
            </div>
            <p className="text-sm font-medium text-text-eggplant mb-1">Mechanical Engineering, 2028</p>
            <p className="text-xs text-text-eggplant font-medium bg-bg-lavender px-3 py-1 rounded-full mt-2 inline-block ">San Ramon, CA</p>
          </div>

          {/* Board Member 12 */}
          <div className="bg-primary-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-nav-periwinkle group">
            <div className="w-64 h-64 bg-bg-lavender border-4 border-accent-purple rounded-[4rem] flex items-center justify-center text-text-eggplant font-bold mb-6 overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
              <img src="/assets/anjikar.png" alt="Anjika Rai" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-text-eggplant mb-1">Anjika Rai</h2>
            <div className="bg-nav-periwinkle px-4 py-1 rounded-full mb-4 mt-2">
              <p className="text-xs font-medium text-text-eggplant uppercase tracking-wide">Corporate Relations</p>
            </div>
            <p className="text-sm font-medium text-text-eggplant mb-1">Computer Science and Engineering, 2029</p>
            <p className="text-xs text-text-eggplant font-medium bg-bg-lavender px-3 py-1 rounded-full mt-2 inline-block ">Dublin, CA</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Board;
