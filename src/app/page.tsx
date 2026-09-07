"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [newsletterStatus, setNewsletterStatus] = useState(false);

  const [activeProcessStep, setActiveProcessStep] = useState(0);



  const [testOffset, setTestOffset] = useState(0);

  const testimonials = [
    { name: "Ali Khan", role: "Investor", text: "Roman Builders Real Estate truly lives up to its name. They helped me find the perfect plot in a great society. The entire process was stress-free and smooth — from site visits to final paperwork." },
    { name: "Aisha Rehman", role: "Homeowner", text: "Exceptional service and dedication! They walked us through every step of building our dream home in Hazara." }
  ];







  const handleDummyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("This feature will be available soon!");
  };


  const processSteps = [
    {
      title: "Land Acquisition",
      icon: "fa-house",
      heading: "Developing Masterpiece Societies",
      description: "From acquiring prime land to securing complex legal NOCs and developing world-class infrastructure, we manage the entire lifecycle of housing scheme development in Hazara.",
      image: "/images/hero.jpg"
    },
    {
      title: "NOC Approvals",
      icon: "fa-calendar-check",
      heading: "Navigating Legal Complexities",
      description: "We handle all the paperwork, ensuring that every project clears TMA, EPA, and other regulatory approvals swiftly and securely.",
      image: "/images/project1.jpg"
    },
    {
      title: "Infrastructure Dev",
      icon: "fa-handshake-angle",
      heading: "Building World-Class Facilities",
      description: "Our engineering teams construct robust roads, reliable sewerage systems, and beautiful green spaces that stand the test of time.",
      image: "/images/project2.jpg"
    },
    {
      title: "Plot Handover",
      icon: "fa-shield-halved",
      heading: "Delivering on our Promises",
      description: "We ensure transparent, timely handover of residential plots to our investors.",
      image: "/images/project3.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProcessStep((prev) => (prev + 1) % processSteps.length);
    }, 4000); // Automatically cycle every 4 seconds
    return () => clearInterval(timer);
  }, [processSteps.length]);

  return (
    <main>

{/*  BEGIN: HeroAndHeaderWrapper  */}
<div 
  className="relative overflow-hidden flex flex-col justify-between bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/hero section.png')" }}
>
{/*  Large Havnex Watermark behind hero elements  */}
<div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full text-center text-[10rem] md:text-[18rem] font-black tracking-tight z-0 select-none bg-gradient-to-b from-black/[0.06] to-black/[0.01] bg-clip-text text-transparent leading-none pointer-events-none">
      Roman
    </div>
{/*  BEGIN: MainHeader  */}
<div className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 pt-4 sm:pt-6 pointer-events-none">
  <header className="relative pointer-events-auto max-w-7xl mx-auto px-6 py-3 flex items-center justify-between bg-white/70 backdrop-blur-md rounded-full shadow-lg border border-white/50 transition-all">
  {/*  Brand Logo  */}
  <a className="text-xl sm:text-2xl font-bold tracking-tight text-[#1a1c19] flex flex-col justify-center leading-none hover:opacity-80 transition-opacity" data-purpose="brand-logo" href="#" onClick={handleDummyClick}>
  <span>Roman Builders</span>
  <span className="text-[10px] sm:text-xs text-[#1a1c19]/70 font-medium tracking-wide mt-1">& Developers</span>
  </a>
  {/*  Desktop Navigation Links  */}
  <nav className="hidden md:flex items-center space-x-12 text-[13px] font-medium text-[#4a5240]" data-purpose="primary-navigation">
  <a className="hover:text-[#1a1c19] transition-colors" href="#about">About us</a>
  <a className="hover:text-[#1a1c19] transition-colors" href="#properties">Properties</a>
  <a className="hover:text-[#1a1c19] transition-colors" href="#process">Services</a>
  <a className="hover:text-[#1a1c19] transition-colors" href="#news">Blog</a>
  </nav>
  {/*  Action Icons & Button  */}
  <div className="flex items-center space-x-4 sm:space-x-6" data-purpose="header-actions">
  <button aria-label="Search" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#4a5240] hover:text-[#1a1c19] hover:bg-slate-50 transition-colors text-sm shadow-sm" type="button">
  <i className="fa-solid fa-magnifying-glass"></i>
  </button>
  <a className="inline-flex items-center gap-2 bg-[#4a5240] text-white px-6 py-2.5 rounded-full text-[13px] font-medium hover:bg-[#3d4435] transition-colors shadow-sm" href="#contact">
            <span>Contact us</span>
            <i className="fa-solid fa-arrow-right text-[11px]"></i>
          </a>
  </div>
  </header>
</div>
{/*  END: MainHeader  */}
{/*  BEGIN: HeroSection  */}
<section className="relative z-10 w-full pt-20 md:pt-24 pb-16 md:pb-20 min-h-screen flex items-center" data-purpose="hero-content">
{/*  Hero House Visual (Absolute to bottom-right corner) - Commented out since we are using a full background image */}
{/*
<div className="hidden lg:flex absolute bottom-0 right-0 w-[55vw] max-w-[850px] z-0 pointer-events-none justify-end items-end [mask-image:linear-gradient(to_right,transparent,black_20%)]" data-purpose="hero-image-container">
<img alt="House with red roof and vibrant greenery" className="w-full h-auto object-contain object-bottom translate-x-[4%] translate-y-[6%]" src="/images/download (1).png"/>
</div>
*/}

<div className="w-full max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
{/*  Hero Text & CTA  */}
<div className="max-w-2xl space-y-6 pt-36 md:pt-56">
<h1 className="text-5xl lg:text-[4.5rem] font-bold text-[#1a1c19] tracking-tight leading-[1.05]">
            Building Your Future<br/>in Abbottabad
          </h1>
<p className="text-[#1a1c19]/80 text-[15px] max-w-md leading-relaxed font-normal pt-2">
            Your trusted partners in land development, architecture, and cooperative housing society management in Hazara Division.
          </p>
<div className="pt-4">
<a className="inline-flex items-center gap-2 bg-[#4a5240] text-white px-5 py-3 rounded-lg text-[13px] font-medium hover:bg-[#3d4435] transition-all shadow-md" href="#properties">
<span>Explore properties</span>
<i className="fa-solid fa-arrow-right text-[12px]"></i>
</a>
</div>
</div>
</div>

</section>
{/*  END: HeroSection  */}
</div>
{/*  END: HeroAndHeaderWrapper  */}
{/*  BEGIN: VideoSection  */}
<section className="w-full bg-[#fdfcf8] relative overflow-hidden pt-20 pb-16 z-20" data-purpose="video-presentation" id="story">
  
  {/* Abstract Background SVG (Mountains/Curves) */}
  <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-30">
    <svg viewBox="0 0 1440 600" className="w-full h-full object-cover" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 450 Q 300 250 720 350 T 1440 250 L 1440 600 L 0 600 Z" fill="url(#paint0_linear)"/>
      <path d="M0 350 Q 250 150 600 250 T 1440 150 L 1440 600 L 0 600 Z" stroke="#e0ddd0" strokeWidth="1" fill="transparent"/>
      <path d="M0 450 C 300 350, 400 450, 720 350 C 1000 250, 1200 400, 1440 300 L 1440 600 L 0 600 Z" stroke="#e0ddd0" strokeWidth="2" fill="transparent"/>
      <path d="M1000 300 L 1100 150 L 1200 300" stroke="#e0ddd0" strokeWidth="1.5" fill="transparent" strokeLinejoin="round"/>
      <path d="M1100 250 L 1180 150 L 1280 300" stroke="#e0ddd0" strokeWidth="1.5" fill="transparent" strokeLinejoin="round"/>
      <path d="M1250 250 L 1320 150 L 1420 250" stroke="#e0ddd0" strokeWidth="1.5" fill="transparent" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear" x1="720" y1="250" x2="720" y2="600" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f3f1e8" stopOpacity="0.8"/>
          <stop offset="1" stopColor="#fdfcf8" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  </div>

  <div className="max-w-[90rem] mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center">
    
    {/* Header Area */}
    <div className="flex flex-col items-center text-center mb-12">
      {/* Eyebrow Pill */}
      <div className="flex items-center gap-4 mb-6">
        <div className="hidden sm:block w-16 h-[1px] bg-gray-300"></div>
        <div className="bg-[#f2efe4] px-4 py-1.5 rounded-full flex items-center gap-2 border border-[#e0ddd0]">
          <i className="fa-solid fa-video text-[10px] text-[#4a5240]"></i>
          <span className="text-[9px] font-bold tracking-[0.2em] text-[#4a5240] uppercase">Our Story</span>
        </div>
        <div className="hidden sm:block w-16 h-[1px] bg-gray-300"></div>
      </div>
      
      {/* Headings */}
      <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-serif text-[#161f18] leading-[1.1] tracking-tight mb-5">
        More Than Buildings,<br/>A Brighter Abbottabad
      </h2>
      <p className="text-gray-500 text-[13px] md:text-sm max-w-2xl leading-relaxed">
        Watch how Roman Builders is shaping communities in Abbottabad through<br className="hidden md:block" /> trust, quality construction, and a vision for a better tomorrow.
      </p>
    </div>

    {/* 3-Column Layout: Left (Icons), Center (Video), Right (Quote) */}
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-20 mb-12">
      
      {/* Left Column - Icons (Hidden on mobile & tablet) */}
      <div className="hidden lg:flex flex-col justify-center gap-8 w-48 shrink-0 relative">
         <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-[#f3f1e8] flex items-center justify-center border border-[#e0ddd0] group-hover:bg-[#4a5240] group-hover:text-white transition-colors duration-300">
               <i className="fa-solid fa-house text-[#4a5240] group-hover:text-white transition-colors"></i>
            </div>
            <div>
               <div className="font-bold text-[#161f18] text-sm">Better</div>
               <div className="text-xs text-gray-500">Living Spaces</div>
            </div>
         </div>
         <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-[#f3f1e8] flex items-center justify-center border border-[#e0ddd0] group-hover:bg-[#4a5240] group-hover:text-white transition-colors duration-300">
               <i className="fa-solid fa-users text-[#4a5240] group-hover:text-white transition-colors"></i>
            </div>
            <div>
               <div className="font-bold text-[#161f18] text-sm">Stronger</div>
               <div className="text-xs text-gray-500">Communities</div>
            </div>
         </div>
         <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-[#f3f1e8] flex items-center justify-center border border-[#e0ddd0] group-hover:bg-[#4a5240] group-hover:text-white transition-colors duration-300">
               <i className="fa-solid fa-seedling text-[#4a5240] group-hover:text-white transition-colors"></i>
            </div>
            <div>
               <div className="font-bold text-[#161f18] text-sm">Brighter</div>
               <div className="text-xs text-gray-500">Tomorrow</div>
            </div>
         </div>
      </div>

      {/* Center Column - Video Container */}
      <div className="w-full max-w-4xl relative rounded-3xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] group shrink border-[4px] border-white/50">
         <div className="aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/8] w-full relative bg-slate-900">
           <video 
             className="w-full h-full object-cover" 
             src="/search_about_Prime_View_City_–.mp4" 
             autoPlay 
             loop 
             muted 
             playsInline
           />
           {/* Dark Gradient Overlays for text legibility */}
           <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none"></div>

           {/* Bottom Left - Title */}
           <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-10">
              <div className="flex gap-3 sm:gap-4">
                 <div className="w-[2px] bg-white/70"></div>
                 <div className="text-white text-base sm:text-xl lg:text-2xl font-serif leading-tight">
                   Real Communities<br/>Real Progress
                 </div>
              </div>
           </div>

           {/* Bottom Right - Brand */}
           <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-10 flex items-end">
             <span className="text-[7px] sm:text-[9px] font-bold tracking-[0.25em] text-white/90 uppercase drop-shadow-md">Roman Builders</span>
           </div>
         </div>
      </div>

      {/* Right Column - Quote (Hidden on mobile & tablet) */}
      <div className="hidden lg:flex flex-col justify-center w-48 shrink-0 relative">
         <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-[8rem] font-serif text-[#e0ddd0] opacity-50 select-none z-0 leading-none">
           “
         </div>
         <div className="relative z-10 pl-6">
            <p className="font-serif text-[#4a5240] text-[17px] leading-relaxed italic mb-4">
              Building communities<br/>today for a<br/>brighter tomorrow.
            </p>
            <div className="w-12 h-[1px] bg-[#d5d2c5]"></div>
         </div>
      </div>
    </div>

    {/* Footer Area */}
    <div className="flex flex-col items-center mt-4">
       {/* Button */}
       <div className="flex items-center gap-4 sm:gap-6 mb-8">
         <div className="w-12 sm:w-20 h-[1px] bg-gray-300"></div>
         <a href="#" className="flex items-center gap-4 bg-[#4a5240] text-white pl-6 sm:pl-8 pr-1.5 py-1.5 rounded-full hover:bg-[#3d4435] transition-colors shadow-lg group">
           <span className="text-[10px] sm:text-[11px] font-medium tracking-wide">Watch Our Story</span>
           <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#4a5240] flex items-center justify-center group-hover:scale-105 transition-transform">
              <i className="fa-solid fa-arrow-right text-[9px] sm:text-[10px]"></i>
           </div>
         </a>
         <div className="w-12 sm:w-20 h-[1px] bg-gray-300"></div>
       </div>

       {/* Bottom Text */}
       <div className="text-[8px] sm:text-[9px] font-bold tracking-[0.3em] text-gray-400 uppercase">
         People • Places • Progress
       </div>
    </div>
  </div>
</section>
{/*  END: VideoSection  */}

{/*  BEGIN: ExpertiseSection  */}
<section className="bg-[#fdfcf8] mt-12 pt-20 lg:pt-28 relative overflow-hidden" data-purpose="expertise" id="about">
  
  {/* Giant text positioned absolute bottom-left */}
  <div className="absolute bottom-6 left-0 lg:left-4 pointer-events-none select-none z-0 hidden lg:block">
    <div className="text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem] font-serif italic text-gray-200/50 leading-[0.85] tracking-tight whitespace-nowrap">
      A BRIGHTER<br/>TOMORROW
    </div>
  </div>

  <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col">
    
    <div className="flex flex-col lg:flex-row items-stretch">
      
      {/* Left Content Area */}
      <div className="w-full lg:w-[60%] xl:w-[60%] lg:pr-10 xl:pr-16 pb-12 lg:pb-16 pt-2 relative z-20 flex flex-col">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-[1px] bg-gray-400"></div>
          <span className="text-[8px] font-bold tracking-[0.2em] text-gray-500 uppercase">Our Expertise</span>
        </div>
        
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-serif text-[#161f18] leading-[1.15] tracking-tight mb-4">
          From Land to Communities,<br/>We Make It Happen
        </h2>
        
        {/* Subheading */}
        <p className="text-gray-500 text-[11px] sm:text-xs max-w-[420px] leading-relaxed mb-8">
          At Roman Builders & Developers, we turn potential into thriving communities by combining strategic planning, legal expertise, and quality construction.
        </p>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {/* Card 1 */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform">
            <div className="w-8 h-8 rounded-full bg-[#2c3325] text-white flex items-center justify-center mb-3 shadow-sm">
              <i className="fa-solid fa-map-location-dot text-[11px]"></i>
            </div>
            <div className="text-[8px] text-gray-400 font-bold mb-1">01</div>
            <h3 className="font-serif text-[13px] text-[#161f18] mb-1.5 leading-tight">Land Planning &<br/>Development</h3>
            <p className="text-[9px] text-gray-500 leading-relaxed">
              We identify prime locations and create well-planned societies for long-term value.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform">
            <div className="w-8 h-8 rounded-full bg-[#2c3325] text-white flex items-center justify-center mb-3 shadow-sm">
              <i className="fa-solid fa-file-contract text-[11px]"></i>
            </div>
            <div className="text-[8px] text-gray-400 font-bold mb-1">02</div>
            <h3 className="font-serif text-[13px] text-[#161f18] mb-1.5 leading-tight">Legal Approvals<br/>& Compliance</h3>
            <p className="text-[9px] text-gray-500 leading-relaxed">
              Our experts handle all regulatory requirements with transparency and efficiency.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform">
            <div className="w-8 h-8 rounded-full bg-[#2c3325] text-white flex items-center justify-center mb-3 shadow-sm">
              <i className="fa-solid fa-helmet-safety text-[11px]"></i>
            </div>
            <div className="text-[8px] text-gray-400 font-bold mb-1">03</div>
            <h3 className="font-serif text-[13px] text-[#161f18] mb-1.5 leading-tight">Quality<br/>Construction</h3>
            <p className="text-[9px] text-gray-500 leading-relaxed">
              We build modern infrastructure and community spaces with lasting standards.
            </p>
          </div>
        </div>
        
        {/* CTA & Small Text */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <a href="#" className="inline-flex items-center gap-1.5 bg-[#2c3325] text-white px-5 py-2.5 rounded-full text-[11px] font-medium hover:bg-[#1a1f15] transition-colors shadow-lg group">
            Explore Our Work
            <i className="fa-solid fa-arrow-right text-[9px] group-hover:translate-x-1 transition-transform"></i>
          </a>
          <div className="flex items-center gap-2 text-[7px] font-bold tracking-[0.2em] text-gray-400 uppercase">
             <div className="w-5 h-[1px] bg-gray-300"></div>
             PEOPLE • PLACES • PROGRESS
          </div>
        </div>
        
        {/* Bottom "Sustainable" text pushed to bottom of left column on desktop */}
        <div className="hidden lg:flex flex-1 items-end mt-12">
          <div className="flex items-center gap-3">
             <div className="text-[8px] font-bold tracking-[0.2em] text-gray-400 uppercase leading-relaxed text-left">
               Sustainable<br/>Communities<br/>For Generations
             </div>
             <div className="w-12 h-[1px] bg-gray-300"></div>
          </div>
        </div>

      </div>
      
      {/* Right Image Area & Stats (Mobile & Tablet) */}
      <div className="block lg:hidden w-full relative mt-8 mb-6 rounded-t-[3rem] rounded-bl-[3rem] overflow-hidden shadow-2xl">
         <div className="w-full h-[300px] relative">
            <img src="/images/expertise-render.jpg" alt="Estate Entrance" className="w-full h-full object-cover absolute inset-0 z-0" />
            
            <div className="absolute top-6 right-6 z-20 flex gap-2">
              <div className="w-[1px] h-8 bg-black/80"></div>
              <div className="text-[7px] font-bold tracking-[0.25em] uppercase leading-relaxed text-left text-black/80">
                Better<br/>Communities<br/>Brighter<br/>Futures
              </div>
            </div>
         </div>
         
         {/* Mobile Green Box with overlap */}
         <div className="w-full bg-[#2b3628] rounded-bl-[3rem] rounded-tl-[2rem] -mt-6 z-10 relative flex flex-col p-6 gap-6">
            <div className="flex flex-col justify-center border-b border-white/20 pb-6">
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-3 leading-tight">More Than<br/>Properties</h3>
              <div className="w-8 h-[1px] bg-white/20 mb-3"></div>
              <p className="text-gray-300 text-[11px] font-light leading-relaxed max-w-[200px]">
                We build communities where people belong.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-3">
                  <i className="fa-solid fa-users text-white/70 text-sm w-4 text-center"></i>
                  <div>
                    <div className="font-bold text-xs text-white mb-0.5">1000+</div>
                    <div className="text-[8px] text-gray-400 uppercase tracking-widest font-semibold">Families to be Served</div>
                  </div>
               </div>
               
               <div className="flex items-center gap-3">
                  <i className="fa-solid fa-seedling text-white/70 text-sm w-4 text-center"></i>
                  <div>
                    <div className="font-bold text-xs text-white mb-0.5">5+</div>
                    <div className="text-[8px] text-gray-400 uppercase tracking-widest font-semibold">Upcoming Projects</div>
                  </div>
               </div>
               
               <div className="flex items-center gap-3">
                  <i className="fa-solid fa-mountain-sun text-white/70 text-sm w-4 text-center"></i>
                  <div>
                    <div className="font-bold text-xs text-white mb-0.5">A Brighter Tomorrow</div>
                    <div className="text-[8px] text-gray-400 uppercase tracking-widest font-semibold">for Generations</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
    </div>
  </div>

  {/* Right Side Background Image & Stats Box (Desktop) */}
  <div className="hidden lg:block absolute top-10 lg:top-16 right-0 w-[38%] xl:w-[38%] bottom-16 z-0">
    
    {/* Parent Container (clipped curves) */}
    <div className="w-full h-full rounded-tl-[6rem] rounded-bl-[6rem] overflow-hidden relative shadow-2xl bg-gray-900">
      
      {/* Background Image */}
      <img src="/images/expertise-render.jpg" alt="Estate Entrance" className="w-full h-full object-cover object-center absolute inset-0 z-0 opacity-90" />
      
      {/* Floating Top-Right Text */}
      <div className="absolute top-10 right-10 z-20 flex gap-3">
        <div className="w-[1px] h-10 bg-black/80"></div>
        <div className="text-[8px] font-bold tracking-[0.25em] uppercase leading-relaxed text-left text-black/80">
          Better<br/>Communities<br/>Brighter<br/>Futures
        </div>
      </div>

      {/* Overlapping Dark Green Stats Box inside Image Container */}
      <div className="absolute bottom-0 left-0 w-full bg-[#2b3628] rounded-bl-[6rem] rounded-tl-[3.5rem] z-10 flex p-8 xl:p-10 xl:px-12 items-center border-t border-white/5">
         
         {/* Left Side (40%) */}
         <div className="w-[40%] flex flex-col justify-center pr-6">
            <h3 className="font-serif text-2xl xl:text-3xl text-white mb-3 leading-tight">More Than<br/>Properties</h3>
            <div className="w-10 h-[1px] bg-white/20 mb-4"></div>
            <p className="text-gray-300 text-[10px] xl:text-[11px] font-light leading-relaxed">
              We build communities where people belong.
            </p>
         </div>
         
         {/* Right Side (60%) with Vertical Divider */}
         <div className="w-[60%] flex flex-col gap-4 border-l border-white/20 pl-6 xl:pl-8">
            <div className="flex items-center gap-3">
               <i className="fa-solid fa-users text-white/70 text-sm w-4 text-center"></i>
               <div>
                 <div className="font-bold text-xs text-white mb-0.5">1000+</div>
                 <div className="text-[8px] text-gray-400 uppercase tracking-widest font-semibold">Families to be Served</div>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <i className="fa-solid fa-seedling text-white/70 text-sm w-4 text-center"></i>
               <div>
                 <div className="font-bold text-xs text-white mb-0.5">5+</div>
                 <div className="text-[8px] text-gray-400 uppercase tracking-widest font-semibold">Upcoming Projects</div>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <i className="fa-solid fa-mountain-sun text-white/70 text-sm w-4 text-center"></i>
               <div>
                 <div className="font-bold text-xs text-white mb-0.5">A Brighter Tomorrow</div>
                 <div className="text-[8px] text-gray-400 uppercase tracking-widest font-semibold">for Generations</div>
               </div>
            </div>
         </div>

      </div>

    </div>
  </div>

</section>
{/*  END: ExpertiseSection  */}

{/*  BEGIN: FlagshipProjectShowcase  */}
<section className="bg-gray-50 py-20 lg:py-28 relative overflow-hidden" data-purpose="flagship-project" id="properties">

  {/* Subtle decorative background elements */}
  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#4a5240]/[0.03] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
  <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#4a5240]/[0.02] rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

  <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">

    {/* Section Header */}
    <div className="text-center mb-14 lg:mb-20">
      <div className="flex items-center justify-center gap-4 mb-5">
        <div className="hidden sm:block w-16 h-[1px] bg-[#4a5240]/30"></div>
        <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.25em] text-[#4a5240] uppercase">Our Flagship Project</span>
        <div className="hidden sm:block w-16 h-[1px] bg-[#4a5240]/30"></div>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#161f18] tracking-tight leading-[1.1]">
        Discover Prime View
      </h2>
    </div>

    {/* Main Content - Asymmetrical 60/40 Split */}
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 xl:gap-20 items-stretch">

      {/* Left Side - Visual (60%) */}
      <div className="w-full lg:w-[58%] xl:w-[60%] shrink-0">
        <div className="relative rounded-2xl overflow-hidden shadow-lg group h-[320px] sm:h-[400px] lg:h-[520px] xl:h-[560px]">
          <img
            src="/images/prime-view-showcase.jpg"
            alt="Aerial view of Prime View Co-Operative Housing Society in Abbottabad with mountain backdrop"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>

          {/* Floating badge on image */}
          <div className="absolute top-5 left-5 sm:top-6 sm:left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-white/50 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-[#161f18] uppercase">Now Selling</span>
          </div>

          {/* Bottom location label */}
          <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 flex items-center gap-2 text-white/90">
            <i className="fa-solid fa-location-dot text-xs"></i>
            <span className="text-[11px] sm:text-xs font-medium drop-shadow-md">Abbottabad, Hazara Division</span>
          </div>
        </div>
      </div>

      {/* Right Side - Content (40%) */}
      <div className="w-full lg:w-[42%] xl:w-[40%] flex flex-col justify-center gap-6 lg:gap-7">

        {/* Project Title */}
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-[2.2rem] xl:text-4xl font-serif text-[#161f18] leading-[1.15] tracking-tight mb-4">
            Prime View<br className="hidden sm:block" /> Co‑Operative Housing Society
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-[13px] sm:text-sm leading-relaxed max-w-md">
            Experience unparalleled living in Abbottabad&apos;s premier cooperative housing society.
            Prime View combines breathtaking natural landscapes with modern urban planning, offering
            secure, legal, and thriving community spaces for your family&apos;s future.
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-3.5">
          {[
            { icon: "fa-circle-check", text: "TMA & EPA Approved" },
            { icon: "fa-circle-check", text: "Underground Electrification" },
            { icon: "fa-circle-check", text: "Modern Sewerage & Infrastructure" },
            { icon: "fa-circle-check", text: "Prime Location with Mountain Views" },
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 group/feat">
              <div className="w-7 h-7 rounded-full bg-[#4a5240]/10 flex items-center justify-center shrink-0 group-hover/feat:bg-[#4a5240]/20 transition-colors">
                <i className={`fa-solid ${feature.icon} text-[#4a5240] text-xs`}></i>
              </div>
              <span className="text-[13px] sm:text-sm text-[#1a1c19] font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200"></div>

        {/* CTA & Secondary */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="https://prime-view-livid.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#2c3325] text-white pl-7 pr-2 py-2 rounded-full text-[13px] font-medium hover:bg-[#1a1f15] transition-all shadow-lg group/cta"
          >
            <span>Explore Prime View</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover/cta:bg-white/30 transition-colors">
              <i className="fa-solid fa-arrow-right text-[10px] group-hover/cta:translate-x-0.5 transition-transform"></i>
            </div>
          </a>
          <a
            href="#"
            onClick={handleDummyClick}
            className="inline-flex items-center gap-2 text-[#4a5240] text-[12px] font-semibold hover:text-[#2c3325] transition-colors border-b border-[#4a5240]/30 pb-0.5"
          >
            <i className="fa-solid fa-file-pdf text-[11px]"></i>
            <span>Download Brochure</span>
          </a>
        </div>

      </div>
    </div>

  </div>
</section>
{/*  END: FlagshipProjectShowcase  */}

{/*  BEGIN: FoundersSection  */}
<section className="w-full bg-[#f8f7f4] py-16 relative overflow-hidden" data-purpose="founders">
  <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
    
    {/* Top Header */}
    <div className="text-center mb-12 relative">
      <div className="flex items-center justify-center gap-4 mb-3">
        <div className="h-px bg-[#4a5240]/30 w-12"></div>
        <span className="text-[#4a5240] text-xs font-bold tracking-[0.2em] uppercase">Our Founders</span>
        <div className="h-px bg-[#4a5240]/30 w-12"></div>
      </div>
      <h2 className="text-3xl sm:text-4xl font-serif text-[#1a1c19] mb-3 tracking-tight">The Visionaries Behind Roman Builders & Developers</h2>
      <p className="text-gray-500 text-sm">Two Leaders. One Vision. A Better Tomorrow.</p>
      
      {/* Top right decorative text */}
      <div className="hidden lg:block absolute top-0 right-0 text-right text-[10px] font-bold tracking-[0.2em] text-[#4a5240]/40 leading-relaxed uppercase">
        People<br/>Progress<br/>Communities<br/>Together
      </div>
    </div>

    {/* Founders Layout */}
    <div className="flex flex-col lg:flex-row items-stretch justify-center gap-10 lg:gap-6 xl:gap-12">
      
      {/* Founder 1 */}
      <div className="flex-1 flex flex-col items-center lg:items-end relative">
        
        {/* Floating Quote (Left) */}
        <div className="hidden lg:block absolute top-20 -left-12 xl:-left-20 bg-[#e8e4db]/60 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-sm w-44 z-20">
          <div className="text-[#4a5240] text-3xl leading-none font-serif mb-1">&quot;</div>
          <p className="text-[#1a1c19] font-serif text-base italic leading-snug">Building Communities<br/>Creating<br/>Better Lives&quot;</p>
        </div>

        {/* Image & Name Box */}
        <div className="relative max-w-[360px] w-full">
          <img src="/WhatsApp%20Image%202026-09-04%20at%2012.10.28.jpeg" alt="Dr. Roman Gul" className="w-full aspect-[4/5] object-cover rounded-t-[100px] sm:rounded-t-[120px] rounded-b-xl shadow-lg border-4 border-white" />
          
          {/* Name Box */}
          <div className="absolute -bottom-5 -left-4 sm:-left-8 bg-[#4a5240] text-white p-5 sm:p-6 rounded-2xl shadow-xl max-w-[240px]">
            <h3 className="text-lg font-serif mb-1">Dr. Roman Gul</h3>
            <p className="text-[9px] font-semibold tracking-wider uppercase text-white/80 leading-relaxed">CEO, Roman Builders &<br/>Developers Pvt Ltd.</p>
          </div>
        </div>

        {/* Content Below */}
        <div className="w-full max-w-[360px] mt-10 text-left">
          <div className="flex items-center justify-between text-[#4a5240] text-xs font-semibold mb-5 border-b border-[#4a5240]/10 pb-4">
            <div className="flex flex-col items-center gap-1.5"><i className="fa-solid fa-users text-base"></i><span className="text-[9px] text-center">Strategic<br/>Leadership</span></div>
            <div className="flex flex-col items-center gap-1.5"><i className="fa-regular fa-heart text-base"></i><span className="text-[9px] text-center">Community<br/>Wellbeing</span></div>
            <div className="flex flex-col items-center gap-1.5"><i className="fa-solid fa-chart-line text-base"></i><span className="text-[9px] text-center">Sustainable<br/>Growth</span></div>
          </div>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-6">
            A distinguished Medical Professional and Businessman. Beyond leading Roman Builders, he serves as the Managing Director of Holistic Health Curative and the Secretary of Prime View Cooperative Housing Society in Abbottabad. His visionary approach and unwavering dedication have been instrumental in transforming regional real estate and infrastructure.
          </p>
          <div className="flex items-end justify-between">
            <a href="#" onClick={handleDummyClick} className="text-[#1a1c19] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 hover:text-[#4a5240] transition-colors border-b-2 border-[#1a1c19] pb-0.5">Learn More <i className="fa-solid fa-arrow-right"></i></a>
            <div className="font-serif italic text-xl text-gray-800/80 -rotate-3 pr-2">Dr. Roman Gul</div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden lg:flex flex-col items-center justify-center shrink-0 w-16 relative">
        <div className="h-[90%] w-px bg-[#4a5240]/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="bg-[#f8f7f4] py-6 z-10 text-center">
          <p className="text-[9px] font-bold tracking-[0.2em] text-[#4a5240]/60 uppercase leading-loose">Different<br/>Strengths<br/>A Stronger<br/>Tomorrow</p>
        </div>
      </div>

      {/* Founder 2 */}
      <div className="flex-1 flex flex-col items-center lg:items-start relative mt-16 lg:mt-0">
        
        {/* Floating Quote (Right) */}
        <div className="hidden lg:block absolute top-20 -right-12 xl:-right-20 bg-[#e8e4db]/60 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-sm w-44 z-20">
          <div className="text-[#4a5240] text-3xl leading-none font-serif mb-1">&quot;</div>
          <p className="text-[#1a1c19] font-serif text-base italic leading-snug">Discipline<br/>Today<br/>A Safer<br/>Tomorrow&quot;</p>
        </div>

        {/* Image & Name Box */}
        <div className="relative max-w-[360px] w-full">
          <img src="/Gemini_Generated_Image_7wr6bb7wr6bb7wr6.jfif" alt="Liaqat Khan Jadoon" className="w-full aspect-[4/5] object-cover rounded-t-[100px] sm:rounded-t-[120px] rounded-b-xl shadow-lg border-4 border-white" />
          
          {/* Name Box */}
          <div className="absolute -bottom-5 -left-4 sm:-left-8 bg-[#4a5240] text-white p-5 sm:p-6 rounded-2xl shadow-xl max-w-[240px]">
            <h3 className="text-lg font-serif mb-1">Liaqat Khan Jadoon</h3>
            <p className="text-[9px] font-semibold tracking-wider uppercase text-white/80 leading-relaxed">Commando Navy SEAL &<br/>Chief Engineer</p>
          </div>
        </div>

        {/* Content Below */}
        <div className="w-full max-w-[360px] mt-10 text-left">
          <div className="flex items-center justify-between text-[#4a5240] text-xs font-semibold mb-5 border-b border-[#4a5240]/10 pb-4">
            <div className="flex flex-col items-center gap-1.5"><i className="fa-solid fa-shield-halved text-base"></i><span className="text-[9px] text-center">Operational<br/>Excellence</span></div>
            <div className="flex flex-col items-center gap-1.5"><i className="fa-solid fa-gear text-base"></i><span className="text-[9px] text-center">Safety &<br/>Innovation</span></div>
            <div className="flex flex-col items-center gap-1.5"><i className="fa-solid fa-building-shield text-base"></i><span className="text-[9px] text-center">Building<br/>Stronger Pakistan</span></div>
          </div>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-6">
            An elite operative with a background in high-stakes environments. His extensive qualifications include being an International Sky Diver & Jump Master, International Deep Sea Diver, Chief Engineer of Special Operations Submarines, Master in small arms safety techniques, and a Nuclear/Biological Damage Control Fire Fighter.
          </p>
          <div className="flex items-end justify-between">
            <a href="#" onClick={handleDummyClick} className="text-[#1a1c19] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 hover:text-[#4a5240] transition-colors border-b-2 border-[#1a1c19] pb-0.5">Learn More <i className="fa-solid fa-arrow-right"></i></a>
            <div className="font-serif italic text-xl text-gray-800/80 -rotate-3 pr-2">Liaqat Khan Jadoon</div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Bottom Banner */}
    <div className="mt-16 bg-[#e8e4db]/80 rounded-2xl p-5 sm:p-6 flex flex-col lg:flex-row items-center justify-between gap-6 border border-white/50 shadow-sm relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-12 relative z-10 w-full lg:w-auto">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-people-group text-xl text-[#4a5240]"></i>
          <span className="text-[11px] font-bold text-[#1a1c19] leading-tight">Stronger<br/>Communities</span>
        </div>
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-leaf text-xl text-[#4a5240]"></i>
          <span className="text-[11px] font-bold text-[#1a1c19] leading-tight">Better<br/>Living Spaces</span>
        </div>
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-handshake-angle text-xl text-[#4a5240]"></i>
          <span className="text-[11px] font-bold text-[#1a1c19] leading-tight">A Brighter<br/>Tomorrow</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4 relative z-10 lg:ml-auto">
        <div className="text-[9px] font-bold tracking-[0.2em] text-[#4a5240]/60 uppercase text-right leading-relaxed">
          A Legacy<br/>In Progress
        </div>
        <div className="w-24 h-16 rounded-xl bg-white overflow-hidden shadow-sm border border-white">
           <img src="/images/hero.jpg" alt="Legacy" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>

  </div>
</section>
{/*  END: FoundersSection  */}

{/*  BEGIN: WorkProcessSection  */}
<section className="bg-[#f8f7f4] py-20 lg:py-28 relative overflow-hidden" data-purpose="work-process" id="process">

  {/* Subtle decorative leaf shapes */}
  <div className="absolute top-10 left-0 w-[200px] h-[400px] bg-[#4a5240]/[0.03] rounded-r-full pointer-events-none"></div>
  <div className="absolute bottom-20 left-4 w-[120px] h-[240px] bg-[#4a5240]/[0.02] rounded-r-full pointer-events-none"></div>

  <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">

    {/* Section Header */}
    <div className="text-center mb-14 lg:mb-16">
      <div className="flex items-center justify-center gap-4 mb-5">
        <div className="hidden sm:block w-16 h-[1px] bg-[#4a5240]/30"></div>
        <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.25em] text-[#4a5240] uppercase">Our Work Process</span>
        <div className="hidden sm:block w-16 h-[1px] bg-[#4a5240]/30"></div>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#161f18] tracking-tight leading-[1.1] mb-4">
        From Land to <span className="italic">Lasting Communities</span>
      </h2>
      <p className="text-gray-500 text-[13px] sm:text-sm max-w-lg mx-auto leading-relaxed">
        A transparent and structured process to turn vision into thriving communities.
      </p>
    </div>

    {/* Main Content Card */}
    <div className="bg-[#e8e5da] rounded-3xl overflow-hidden shadow-xl relative">
      <div className="flex flex-col lg:flex-row min-h-[480px] sm:min-h-[520px] lg:min-h-[560px]">

        {/* Left Sidebar - Process Steps */}
        <div className="w-full lg:w-[260px] xl:w-[280px] shrink-0 p-6 sm:p-8 lg:py-10 lg:px-6 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible" data-purpose="process-steps">
          {processSteps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveProcessStep(index)}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all w-full min-w-[200px] lg:min-w-0 cursor-pointer focus:outline-none group ${
                activeProcessStep === index
                  ? 'bg-[#4a5240] text-white shadow-lg'
                  : 'bg-white/60 text-[#1a1c19] hover:bg-white/90 border border-white/50'
              }`}
            >
              {/* Step Number */}
              <span className={`text-[10px] font-bold tracking-wider shrink-0 ${
                activeProcessStep === index ? 'text-white/50' : 'text-gray-400'
              }`}>0{index + 1}</span>

              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                activeProcessStep === index
                  ? 'bg-white/20'
                  : 'bg-[#4a5240]/10'
              }`}>
                <i className={`fa-solid ${step.icon} text-sm ${
                  activeProcessStep === index ? 'text-white' : 'text-[#4a5240]'
                }`}></i>
              </div>

              {/* Title */}
              <span className={`text-[12px] font-semibold text-left leading-tight flex-1 ${
                activeProcessStep === index ? 'text-white' : 'text-[#1a1c19]'
              }`}>{step.title}</span>

              {/* Arrow */}
              <i className={`fa-solid fa-chevron-right text-[9px] shrink-0 ${
                activeProcessStep === index ? 'text-white/60' : 'text-gray-400'
              }`}></i>
            </button>
          ))}

          {/* Bottom Left Decorative Text */}
          <div className="hidden lg:block mt-auto pt-6">
            <div className="text-[7px] font-bold tracking-[0.2em] text-[#4a5240]/40 uppercase leading-loose">
              People<br/>Places<br/>Progress<br/>Together
            </div>
          </div>
        </div>

        {/* Right Content Area - Image + Overlay */}
        <div className="flex-1 relative rounded-2xl lg:rounded-l-3xl overflow-hidden m-2 sm:m-3 lg:m-3 lg:ml-0">

          {/* Background Images (crossfade) */}
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                activeProcessStep === index ? 'opacity-100 z-[1]' : 'opacity-0 z-0 scale-[1.02]'
              }`}
            >
              <img alt={step.heading} className="w-full h-full object-cover" src={step.image}/>
            </div>
          ))}

          {/* Dark gradient for right-side text legibility */}
          <div className="absolute inset-0 z-[2] bg-gradient-to-l from-[#2b3628]/90 via-[#2b3628]/40 to-transparent pointer-events-none"></div>

          {/* Right Content Overlay */}
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`absolute inset-y-0 right-0 w-full sm:w-[55%] lg:w-[48%] z-[3] p-6 sm:p-8 lg:p-10 flex flex-col justify-center transition-all duration-700 ease-out ${
                activeProcessStep === index
                  ? 'translate-x-0 opacity-100 delay-300'
                  : 'translate-x-6 opacity-0'
              }`}
            >
              {/* Step Label */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[9px] font-bold tracking-[0.2em] text-white/60 uppercase">Step 0{index + 1}</span>
                <div className="w-8 h-[1px] bg-white/30"></div>
              </div>

              {/* Heading */}
              <h3 className="text-2xl sm:text-3xl font-serif text-white leading-[1.15] tracking-tight mb-4">
                {step.heading}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-white/70 leading-relaxed mb-6 max-w-[320px]">
                {step.description}
              </p>

              {/* Learn More Button */}
              <div>
                <a href="#" onClick={handleDummyClick} className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-2.5 rounded-lg text-[12px] font-medium hover:bg-white/10 transition-colors">
                  <span>Learn More</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </a>
              </div>
            </div>
          ))}

          {/* Bottom Bar */}
          <div className="absolute bottom-0 left-0 right-0 z-[4] flex items-center justify-between px-5 sm:px-8 py-4 bg-gradient-to-t from-black/40 to-transparent">
            {/* Step Counter + Progress */}
            <div className="flex items-center gap-3">
              <span className="text-white font-bold text-sm">0{activeProcessStep + 1}</span>
              <span className="text-white/40 text-sm font-light">/ 0{processSteps.length}</span>
              <div className="w-16 sm:w-24 h-[2px] bg-white/20 rounded-full ml-2 overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${((activeProcessStep + 1) / processSteps.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveProcessStep((prev) => (prev - 1 + processSteps.length) % processSteps.length)}
                className="w-9 h-9 rounded-full border border-white/20 text-white hover:bg-white/10 flex items-center justify-center text-[10px] focus:outline-none transition-colors"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button
                onClick={() => setActiveProcessStep((prev) => (prev + 1) % processSteps.length)}
                className="w-9 h-9 rounded-full bg-white text-[#3d4435] flex items-center justify-center text-[10px] hover:bg-gray-100 focus:outline-none transition-colors"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Bottom Right - Script Text */}
          <div className="absolute bottom-12 right-6 sm:right-10 z-[3] hidden sm:block">
            <div className="font-serif italic text-white/30 text-xl sm:text-2xl leading-tight select-none">
              A Better<br/>
              <span className="text-2xl sm:text-3xl">Tomorrow</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
{/*  END: WorkProcessSection  */}



{/*  BEGIN: TestimonialsSection  */}
<section className="max-w-7xl mx-auto px-6 sm:px-8 py-12" data-purpose="testimonials">

  {/* Testimonials Card */}
  <div className="rounded-3xl overflow-hidden shadow-xl relative flex flex-col lg:flex-row min-h-[340px] sm:min-h-[380px]">

    {/* Left Side - Dark Green Content */}
    <div className="relative z-10 bg-[#3d4435] text-white p-8 sm:p-10 lg:p-12 w-full lg:w-[42%] flex flex-col justify-between gap-6">

      {/* Eyebrow */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[9px] font-bold tracking-[0.2em] text-white/70 uppercase">Client Testimonials</span>
          <div className="w-10 h-[1px] bg-white/30"></div>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-serif text-white leading-[1.1] tracking-tight">
          Trusted by<br/>Happy Families
        </h2>
      </div>

      {/* Avatars + Stars */}
      <div className="flex items-center gap-4">
        <div className="flex -space-x-2">
          <div className="w-9 h-9 rounded-full bg-[#5a6350] border-2 border-[#3d4435] flex items-center justify-center text-white text-xs font-bold">A</div>
          <div className="w-9 h-9 rounded-full bg-[#6b7360] border-2 border-[#3d4435] flex items-center justify-center text-white text-xs font-bold">R</div>
          <div className="w-9 h-9 rounded-full bg-[#7d8570] border-2 border-[#3d4435] flex items-center justify-center text-white text-xs font-bold">K</div>
        </div>
        <div className="text-amber-400 text-sm flex space-x-0.5">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
      </div>

      {/* Navigation Arrows + Quote Text */}
      <div className="flex items-end justify-between">
        <div className="flex space-x-2">
          <button onClick={() => setTestOffset((p) => (p - 1 + testimonials.length) % testimonials.length)} className="w-9 h-9 rounded-full border border-white/20 text-white hover:bg-white/10 flex items-center justify-center text-[10px] focus:outline-none transition-colors">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button onClick={() => setTestOffset((p) => (p + 1) % testimonials.length)} className="w-9 h-9 rounded-full bg-white text-[#3d4435] flex items-center justify-center text-[10px] hover:bg-gray-100 focus:outline-none transition-colors">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="hidden sm:flex items-end gap-2">
          <span className="text-[#7d8570] text-4xl font-serif leading-none select-none">&ldquo;</span>
          <div className="text-[8px] font-bold tracking-[0.2em] text-white/40 uppercase leading-relaxed">
            Homes<br/>People Love
          </div>
        </div>
      </div>
    </div>

    {/* Center - Floating Testimonial Card (overlaps both sides on desktop) */}
    <div className="absolute z-20 top-1/2 left-[38%] -translate-y-1/2 hidden lg:block w-[260px]">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/60">
        {/* Author */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-[#4a5240] flex items-center justify-center text-white font-bold text-sm border-2 border-white shadow-md">
            {testimonials[testOffset].name.charAt(0)}
          </div>
          <div>
            <div className="text-[13px] font-semibold text-[#161f18]">{testimonials[testOffset].name}</div>
            <div className="text-[10px] text-gray-400">{testimonials[testOffset].role}</div>
          </div>
        </div>
        {/* Stars */}
        <div className="text-amber-400 text-[11px] flex space-x-0.5 mb-3">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        {/* Quote */}
        <div className="text-[#4a5240] text-2xl font-serif leading-none mb-2 select-none">&ldquo;</div>
        <p className="text-[11px] text-gray-600 leading-relaxed">
          {testimonials[testOffset].text}
        </p>
      </div>
    </div>

    {/* Mobile/Tablet Testimonial Card (shown inline) */}
    <div className="block lg:hidden bg-white p-6 border-t border-gray-100">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-[#4a5240] flex items-center justify-center text-white font-bold text-sm border-2 border-white shadow-md">
          {testimonials[testOffset].name.charAt(0)}
        </div>
        <div>
          <div className="text-[13px] font-semibold text-[#161f18]">{testimonials[testOffset].name}</div>
          <div className="text-[10px] text-gray-400">{testimonials[testOffset].role}</div>
        </div>
      </div>
      <div className="text-amber-400 text-[11px] flex space-x-0.5 mb-3">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <p className="text-[12px] text-gray-600 leading-relaxed">
        &ldquo;{testimonials[testOffset].text}&rdquo;
      </p>
    </div>

    {/* Right Side - Image */}
    <div className="hidden lg:block w-[58%] relative">
      <img
        src="/images/testimonial-building.jpg"
        alt="Roman Builders luxury project"
        className="w-full h-full object-cover"
      />
      {/* Subtle gradient overlay from left for blending */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3d4435]/20 via-transparent to-transparent pointer-events-none"></div>
    </div>
  </div>
</section>
{/*  END: TestimonialsSection  */}

{/*  BEGIN: CTASection  */}
<section className="max-w-7xl mx-auto px-6 sm:px-8 py-6 pb-12" data-purpose="cta-section" id="contact">

  {/* CTA Card */}
  <div className="rounded-3xl overflow-hidden shadow-xl relative flex flex-col lg:flex-row min-h-[280px] sm:min-h-[320px]">

    {/* Left Side - Olive Content */}
    <div className="relative z-10 bg-[#e8e5da] p-8 sm:p-10 lg:p-12 w-full lg:w-[38%] flex flex-col justify-center gap-6">

      {/* Eyebrow */}
      <div className="flex items-center gap-3">
        <span className="text-[9px] font-bold tracking-[0.2em] text-[#4a5240] uppercase">Get in Touch</span>
        <div className="w-10 h-[1px] bg-[#4a5240]/30"></div>
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl font-serif text-[#161f18] leading-[1.1] tracking-tight">
        Start Your<br/>Journey Today
      </h2>

      {/* CTA Button */}
      <div>
        <a href="#" onClick={(e) => { e.preventDefault(); const el = document.getElementById('contact-form-modal'); if(el) el.classList.toggle('hidden'); alert('This feature will be available soon!'); }} className="inline-flex items-center gap-3 bg-[#4a5240] text-white pl-7 pr-2 py-2.5 rounded-full text-[13px] font-medium hover:bg-[#3d4435] transition-all shadow-lg group/cta">
          <span>Send a Request</span>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover/cta:bg-white/30 transition-colors">
            <i className="fa-solid fa-arrow-right text-[10px] group-hover/cta:translate-x-0.5 transition-transform"></i>
          </div>
        </a>
      </div>
    </div>

    {/* Center/Right - Image */}
    <div className="w-full lg:w-[48%] relative min-h-[200px] lg:min-h-0">
      <img
        src="/images/cta-entrance.jpg"
        alt="A Better Tomorrow - Housing Society Entrance"
        className="w-full h-full object-cover"
      />
      {/* Subtle left gradient for blending */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#e8e5da]/30 via-transparent to-transparent pointer-events-none"></div>
    </div>

    {/* Far Right - Dark Green Strip with Vertical Text */}
    <div className="hidden lg:flex bg-[#3d4435] w-[14%] items-center justify-center p-6 relative">
      <div className="text-[8px] font-bold tracking-[0.25em] text-white/50 uppercase leading-loose text-center">
        People<br/>Places<br/>Progress<br/>Together
      </div>
    </div>
  </div>
</section>
{/*  END: CTASection  */}
{/*  BEGIN: MainFooter  */}
<footer className="bg-[#181a1b] pt-24 pb-12 mt-16" data-purpose="main-footer">
  <div className="max-w-7xl mx-auto px-6 sm:px-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 pb-20 items-start">
      
      {/* Newsletter Section */}
      <div>
        <h3 className="text-white text-3xl sm:text-4xl font-semibold mb-8 tracking-tight">NEWSLETTER</h3>
        {newsletterStatus ? (
          <div className="text-white text-sm font-medium bg-[#f97316]/20 px-6 py-4 rounded-full border border-[#f97316]/50 inline-block">
            Subscribed successfully!
          </div>
        ) : (
          <form className="flex w-full max-w-[420px] bg-white rounded-full p-[3px]" onSubmit={(e) => { e.preventDefault(); setNewsletterStatus(true); }}>
            <input 
              required 
              className="flex-1 bg-transparent text-[#1a1c19] text-[11px] font-semibold tracking-wide px-6 py-3 border-0 placeholder-gray-400 focus:outline-none focus:ring-0" 
              placeholder="ENTER YOUR EMAIL HERE" 
              type="email"
            />
            <button 
              className="bg-[#f97316] text-white text-[13px] font-semibold px-8 py-3 rounded-full hover:bg-[#ea580c] transition-colors whitespace-nowrap" 
              type="submit">
              Subscribe
            </button>
          </form>
        )}
      </div>
      
      {/* Follow Us Section */}
      <div className="flex flex-col md:items-end md:text-right w-full">
        <h3 className="text-white text-3xl sm:text-4xl font-semibold mb-8 tracking-tight w-full md:w-auto text-left md:text-right">FOLLOW US</h3>
        <div className="flex items-center gap-4 w-full md:w-auto justify-start md:justify-end">
          <a aria-label="Facebook" className="w-[46px] h-[46px] rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/90 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all text-sm" href="#" onClick={handleDummyClick}><i className="fa-brands fa-facebook-f"></i></a>
          <a aria-label="Instagram" className="w-[46px] h-[46px] rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/90 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all text-sm" href="#" onClick={handleDummyClick}><i className="fa-brands fa-instagram"></i></a>
          <a aria-label="YouTube" className="w-[46px] h-[46px] rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/90 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all text-sm" href="#" onClick={handleDummyClick}><i className="fa-brands fa-youtube"></i></a>
          <a aria-label="Twitter" className="w-[46px] h-[46px] rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/90 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all text-sm" href="#" onClick={handleDummyClick}><i className="fa-brands fa-twitter"></i></a>
        </div>
      </div>

    </div>
    
    {/* Bottom Copyright */}
    <div className="border-t border-white/10 pt-8 text-center md:text-left">
      <p className="text-[11px] text-gray-500 font-normal">
        Copyright © 2024 | All Rights Reserved. Empowering Your Real Estate Journey. Together, We Build Your Future!
      </p>
    </div>
  </div>
</footer>
{/*  END: MainFooter  */}

    </main>
  );
}
