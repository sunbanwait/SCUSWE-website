import { Link, useLocation } from 'react-router-dom';

function Layout({ children }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="min-h-screen flex flex-col bg-primary-white font-sans text-text-eggplant font-bold antialiased overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full bg-accent-purple border-b border-black/10 transition-all duration-300">
        <div className="max-w-full mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo & Title */}
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center group">
                <span className="font-poppins font-bold text-xl md:text-2xl text-[#F8F9FA] tracking-wide group-hover:text-primary-white transition-colors">
                  SCU SWE
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 bg-black/20 px-6 py-2 rounded-full shadow-inner">
              <Link
                to="/"
                className={`font-bold text-base transition-colors ${currentPath === '/' ? 'text-primary-white' : 'text-nav-periwinkle hover:text-primary-white'}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-bold text-base transition-colors ${currentPath === '/about' ? 'text-primary-white' : 'text-nav-periwinkle hover:text-primary-white'}`}
              >
                About
              </Link>
              <Link
                to="/board"
                className={`font-bold text-base transition-colors ${currentPath === '/board' ? 'text-primary-white' : 'text-nav-periwinkle hover:text-primary-white'}`}
              >
                Board
              </Link>
              <a
                href="https://scuswe.us13.list-manage.com/subscribe?u=3da2baff5f14b838a717f5192&id=e46bfc1821"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-base text-nav-periwinkle hover:text-primary-white transition-colors"
              >
                Newsletter
              </a>
              <div className="relative group">
                <button
                  className={`font-bold text-base transition-colors ${currentPath.startsWith('/support-swe') ? 'text-primary-white' : 'text-nav-periwinkle group-hover:text-primary-white'}`}
                >
                  Support SWE
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden text-sm z-50">
                  <Link
                    to="/support-swe/sponsorship"
                    className="block px-4 py-3 text-text-eggplant font-bold hover:bg-bg-lavender hover:text-text-eggplant transition-colors"
                  >
                    Sponsorship
                  </Link>
                  <Link
                    to="/support-swe/donate"
                    className="block px-4 py-3 text-text-eggplant font-bold hover:bg-bg-lavender hover:text-text-eggplant transition-colors"
                  >
                    Donate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-bg-lavender py-12 rounded-t-[3rem] shadow-[0_-10px_30px_-15px_rgba(140,122,190,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            {/* Logo Container with Zoom-Crop */}
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm flex items-center justify-center">
              <img src="/assets/logo.png" alt="SWE Logo" className="w-full h-full object-cover scale-[1.15]" />
            </div>
            <span className="font-bold text-text-eggplant text-lg">Santa Clara University SWE</span>
          </div>

          <div className="text-sm text-text-eggplant font-bold ">
            &copy; {new Date().getFullYear()} Santa Clara University Society of Women Engineers.
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6 justify-center bg-primary-white px-6 py-3 rounded-full shadow-md shadow-purple-100/50">
            <a href="https://www.instagram.com/scuswe/" target="_blank" rel="noopener noreferrer" className="flex items-center text-text-eggplant font-bold hover:text-text-eggplant hover:-translate-y-1 transition-all" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/swe-scu-society-of-women-engineers-scu-chapter-b3b9a3291/" target="_blank" rel="noopener noreferrer" className="flex items-center text-text-eggplant font-bold hover:text-text-eggplant hover:-translate-y-1 transition-all" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
            </a>
            <a href="https://www.facebook.com/scuswe/" target="_blank" rel="noopener noreferrer" className="flex items-center text-text-eggplant font-bold hover:text-text-eggplant hover:-translate-y-1 transition-all" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="mailto:swe@scu.edu" className="flex items-center text-text-eggplant font-bold hover:text-text-eggplant hover:-translate-y-1 transition-all" aria-label="Contact">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
