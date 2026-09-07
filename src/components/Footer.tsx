import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-[#2a3226] text-white pt-16 lg:pt-20 pb-8 mt-12 lg:mt-[70px]">
      {/* SVG Wavy Top Edge - Absolute top, translated up */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%] z-10">
        <svg 
          className="relative block w-full h-[60px] lg:h-[90px] -scale-y-100" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          {/* Path 1 (Back Layer): Light Beige - peaks out highest (visually after flip) */}
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#E2E1D3"></path>
          
          {/* Path 2 (Middle Layer): Olive Green */}
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#2a3226" opacity="0.5"></path>
          
          {/* Path 3 (Front Layer): Dark Forest Green - connects to footer base */}
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#2a3226"></path>
        </svg>
      </div>

      {/* Decorative Textures (Leaves) - Wrapped to prevent bottom overflow scroll */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.03] z-0 translate-y-1/4 -translate-x-1/4">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
            <path d="M100,10 C100,10 20,40 20,100 C20,160 100,190 100,190 C100,190 180,160 180,100 C180,40 100,10 100,10 Z M100,20 C140,50 170,80 170,100 C170,140 110,175 100,180 C90,175 30,140 30,100 C30,80 60,50 100,20 Z" />
            <path d="M100,20 L100,180 M100,100 C120,80 140,70 140,70 M100,130 C120,110 140,100 140,100 M100,70 C80,50 60,40 60,40 M100,100 C80,80 60,70 60,70" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] opacity-[0.03] z-0 -translate-y-1/4 translate-x-1/4 rotate-[120deg]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
            <path d="M100,10 C100,10 20,40 20,100 C20,160 100,190 100,190 C100,190 180,160 180,100 C180,40 100,10 100,10 Z M100,20 C140,50 170,80 170,100 C170,140 110,175 100,180 C90,175 30,140 30,100 C30,80 60,50 100,20 Z" />
            <path d="M100,20 L100,180 M100,100 C120,80 140,70 140,70 M100,130 C120,110 140,100 140,100 M100,70 C80,50 60,40 60,40 M100,100 C80,80 60,70 60,70" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      {/* Container */}
      <div className="max-w-[90rem] mx-auto px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Top Section - 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 items-center">
          
          {/* Column 1: Newsletter */}
          <div className="flex flex-col justify-center lg:pr-10 xl:pr-14">
            <h4 className="text-[10px] tracking-widest uppercase text-white/50 mb-2 font-bold">Stay Updated</h4>
            <h2 className="text-2xl lg:text-[22px] font-serif mb-3 leading-tight text-white">Join Our Newsletter</h2>
            <p className="text-gray-300 text-[12px] lg:text-[13px] mb-5 leading-relaxed max-w-sm">
              Subscribe to get the latest updates on our projects, offers and real estate insights — straight to your inbox.
            </p>
            <div className="relative flex items-center bg-white rounded-full p-1 mb-3 shadow-md max-w-[320px]">
              <div className="pl-3 text-gray-400 shrink-0">
                <i className="fa-regular fa-envelope text-xs"></i>
              </div>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent border-none outline-none px-2.5 text-[12px] text-gray-800 placeholder-gray-400 min-w-0"
              />
              <button className="bg-[#2a3226] hover:bg-[#1f251c] text-white px-5 py-2 rounded-full text-[11px] font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 shrink-0">
                Subscribe <i className="fa-solid fa-arrow-right text-[9px] opacity-80"></i>
              </button>
            </div>
            <p className="text-[8px] tracking-[0.15em] uppercase text-white/40 font-bold ml-2">
              No Spam. Just valuable updates.
            </p>
          </div>

          {/* Column 2: Branding */}
          <div className="flex flex-col items-center justify-center text-center py-6 lg:py-0 w-full h-full">
            <div className="lg:border-l lg:border-white/10 w-full flex flex-col items-center py-4 lg:px-8">
              <div className="mb-4 flex flex-col items-center">
                {/* Logo Icon Placeholder */}
                <div className="w-12 h-12 flex items-center justify-center mb-2 text-[#e8e4db]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M4 21V8L12 2L20 8V21H14V14H10V21H4ZM12 5.5L6 10V19H8V12H16V19H18V10L12 5.5ZM10 10H14V12H10V10Z"/>
                      <path d="M12 2 L12 21 M8 5 L8 21 M16 5 L16 21" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl lg:text-[22px] leading-none tracking-tight mb-1.5 text-white">Roman Builders</h3>
                <p className="text-[8px] tracking-[0.3em] font-sans text-white/70 uppercase">& Developers</p>
              </div>
              <div className="text-[7px] sm:text-[8px] font-bold tracking-[0.25em] text-white/40 uppercase">
                People <span className="mx-2 lg:mx-2.5 text-white/10">|</span> Places <span className="mx-2 lg:mx-2.5 text-white/10">|</span> Progress <span className="mx-2 lg:mx-2.5 text-white/10">|</span> Together
              </div>
            </div>
          </div>

          {/* Column 3: Socials */}
          <div className="flex flex-col justify-center text-center lg:text-left h-full w-full">
            <div className="lg:border-l lg:border-white/10 w-full flex flex-col justify-center py-4 lg:pl-10 xl:pl-14">
              <h4 className="text-[10px] tracking-widest uppercase text-white/50 mb-2 font-bold">Follow Us</h4>
              <h2 className="text-2xl lg:text-[22px] font-serif mb-3 leading-tight text-white">Let&apos;s Stay Connected</h2>
              <p className="text-gray-300 text-[12px] lg:text-[13px] mb-5 leading-relaxed max-w-xs mx-auto lg:mx-0">
                Follow us on social media for project updates, behind the scenes and more.
              </p>
              <div className="flex flex-wrap gap-3 lg:gap-4 items-start justify-center lg:justify-start">
                {[
                  { name: 'Facebook', icon: 'fa-facebook-f' },
                  { name: 'Instagram', icon: 'fa-instagram' },
                  { name: 'YouTube', icon: 'fa-youtube' },
                  { name: 'LinkedIn', icon: 'fa-linkedin-in' },
                  { name: 'X', isCustom: true },
                  { name: 'TikTok', icon: 'fa-tiktok' },
                  { name: 'WhatsApp', icon: 'fa-whatsapp' },
                ].map((social, i) => (
                  <div key={i} className="flex flex-col items-center justify-start gap-1.5 group cursor-pointer w-10">
                    <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all shadow-sm">
                      {social.isCustom ? (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[12px] h-[12px]">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      ) : (
                        <i className={`fa-brands ${social.icon} text-[11px]`}></i>
                      )}
                    </a>
                    <span className="text-[7px] text-white/40 group-hover:text-white/80 transition-colors text-center w-full">{social.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-5 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 pb-2">
          
          {/* Left */}
          <div className="flex flex-col items-center lg:items-start gap-1.5 text-center lg:text-left">
            <p className="text-[9px] sm:text-[10px] text-white/70">
              © 2024 Roman Builders & Developers. All Rights Reserved.
            </p>
            <p className="text-[7px] sm:text-[8px] text-white/40 uppercase tracking-[0.15em] font-bold">
              Empowering your real estate journey. Together, we build your future.
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] text-white/70 font-medium">
             <a href="#" className="hover:text-white transition-colors">About Us</a>
             <span className="text-white/20">|</span>
             <a href="#" className="hover:text-white transition-colors">Properties</a>
             <span className="text-white/20">|</span>
             <a href="#" className="hover:text-white transition-colors">Services</a>
             <span className="text-white/20">|</span>
             <a href="#" className="hover:text-white transition-colors">Blog</a>
             <span className="text-white/20">|</span>
             <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2.5 lg:justify-end">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
               <i className="fa-solid fa-location-dot text-[9px] text-white/90"></i>
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="text-[10px] sm:text-xs text-white/90 font-medium leading-none mb-1">Abbottabad, Pakistan</span>
              <span className="text-[7px] sm:text-[8px] text-white/40 uppercase tracking-[0.15em] font-bold leading-none">
                A Brighter Tomorrow Here
              </span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
