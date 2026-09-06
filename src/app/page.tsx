"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [contactStatus, setContactStatus] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState(false);

  const [activeProcessStep, setActiveProcessStep] = useState(0);

  const [projectOffset, setProjectOffset] = useState(0);

  const [testOffset, setTestOffset] = useState(0);

  const testimonials = [
    { name: "Ali Khan", role: "Investor", text: "Roman Builders Real Estate truly lives up to its name. They helped me find the perfect plot in a great society. The entire process was stress-free and smooth — from site visits to final paperwork." },
    { name: "Aisha Rehman", role: "Homeowner", text: "Exceptional service and dedication! They walked us through every step of building our dream home in Hazara." }
  ];

  const initialProjects = [
    { title: "Prime View Co-Operative Housing Society Ltd", image: "/images/project1.jpg", price: "$3200", bed: 3, bath: 2, sqft: 1400 },
    { title: "Green City Abbottabad", image: "/images/project2.jpg", price: "$3800", bed: 4, bath: 2, sqft: 1200 },
    { title: "Roman Valley Society", image: "/images/project3.jpg", price: "$3600", bed: 3, bath: 2, sqft: 1100 },
    { title: "Hazara Residencia", image: "/images/project4.jpg", price: "$3000", bed: 3, bath: 2, sqft: 950 }
  ];
  const displayProjects = [...initialProjects, ...initialProjects].slice(projectOffset, projectOffset + 4);





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
<div className="px-4 sm:px-8 pt-6 sm:pt-8">
  <header className="relative z-20 max-w-7xl mx-auto px-6 py-3 flex items-center justify-between bg-white/40 backdrop-blur-md rounded-full shadow-sm border border-white/50">
  {/*  Brand Logo  */}
  <a className="text-xl sm:text-2xl font-bold tracking-tight text-[#1a1c19] flex flex-col justify-center leading-none" data-purpose="brand-logo" href="#" onClick={handleDummyClick}>
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
<section className="relative z-10 w-full pt-20 md:pt-24 pb-16 md:pb-20 min-h-[600px] md:min-h-[700px] flex items-center" data-purpose="hero-content">
{/*  Hero House Visual (Absolute to bottom-right corner) - Commented out since we are using a full background image */}
{/*
<div className="hidden lg:flex absolute bottom-0 right-0 w-[55vw] max-w-[850px] z-0 pointer-events-none justify-end items-end [mask-image:linear-gradient(to_right,transparent,black_20%)]" data-purpose="hero-image-container">
<img alt="House with red roof and vibrant greenery" className="w-full h-auto object-contain object-bottom translate-x-[4%] translate-y-[6%]" src="/images/download (1).png"/>
</div>
*/}

<div className="w-full max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
{/*  Hero Text & CTA  */}
<div className="max-w-2xl space-y-6 pt-16 md:pt-28">
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
<section className="max-w-6xl mx-auto px-6 mt-16 relative z-20" data-purpose="video-presentation" id="about">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-[16/8] sm:aspect-[21/9] bg-slate-900 group">
<video 
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
  src="/search_about_Prime_View_City_–.mp4" 
  autoPlay 
  loop 
  muted 
  playsInline
/>
{/*  Shaded dark overlay  */}
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-10 text-white pointer-events-none">
{/*  Video Bottom Captions  */}
<div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">Who are Roman Builders?</h2>
<p className="text-xs text-white/80 max-w-sm sm:text-right font-light leading-relaxed">
            Roman Builders & Developers is a premier real estate and construction firm in Abbottabad offering transparent society administration, architecture, interior design, and robust construction services.
          </p>
</div>
</div>
</div>
</section>
{/*  END: VideoSection  */}

{/*  BEGIN: AboutSection  */}
<section className="max-w-7xl mx-auto px-6 sm:px-8 pt-24 pb-12" data-purpose="about-us">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4a5240]/10 text-[#4a5240] text-xs font-semibold mb-6">
        <i className="fa-solid fa-building"></i>
        <span>Our Expertise</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">What We Do at Roman Builders & Developers</h2>
      <p className="text-sm text-slate-600 leading-relaxed mb-8">
        We are Abbottabad&apos;s premier real estate and construction firm. We specialize in transforming raw landscapes into fully developed, legally approved, and thriving cooperative housing societies with unmatched transparency and build quality.
      </p>
      
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#4a5240]/10 flex items-center justify-center shrink-0">
            <i className="fa-solid fa-map-location-dot text-[#4a5240] text-lg"></i>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">Master Planning & Land Acquisition</h4>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">We identify prime locations and meticulously plan modern urban societies with sustainable infrastructure and community-focused layouts.</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#4a5240]/10 flex items-center justify-center shrink-0">
            <i className="fa-solid fa-file-contract text-[#4a5240] text-lg"></i>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">Legal Approvals & NOCs</h4>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Our expert legal team navigates complex regulatory frameworks to secure TMA, EPA, and other required approvals swiftly and transparently.</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#4a5240]/10 flex items-center justify-center shrink-0">
            <i className="fa-solid fa-helmet-safety text-[#4a5240] text-lg"></i>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">World-Class Construction</h4>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">From robust roads and reliable sewerage systems to premium residential villas, we build everything with uncompromising quality standards.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="relative mt-8 lg:mt-0">
      <div className="absolute inset-0 bg-[#4a5240] rounded-3xl translate-x-4 translate-y-4 opacity-20"></div>
      <img src="/29537c47-17e4-4cfd-aa65-3c72f7176cc1.jfif" alt="Roman Builders Leadership" className="relative rounded-3xl object-cover object-[center_85%] w-full aspect-[4/5] md:aspect-[4/5] lg:aspect-[3/4] shadow-lg" />
      {/* Small floating stat badge */}
      <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
        <div className="w-10 h-10 rounded-full bg-[#4a5240] flex items-center justify-center text-white">
          <i className="fa-solid fa-check"></i>
        </div>
        <div>
          <div className="text-lg font-bold text-slate-900">100%</div>
          <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Approved Projects</div>
        </div>
      </div>
    </div>
  </div>
</section>
{/*  END: AboutSection  */}

{/*  BEGIN: PopularPropertySection  */}
<section className="max-w-7xl mx-auto px-6 sm:px-8 py-20" data-purpose="popular-properties" id="properties">
{/*  Header with controls  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
<div>
<h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Popular Projects</h2>
</div>
<p className="text-xs text-slate-500 max-w-md leading-relaxed">
        Discover the top-choice housing societies our clients love. These premium projects combine prime locations, modern urban planning, and unmatched lifestyle — perfect for your next move.
      </p>
</div>

{/*  Cards Slider  */}
<div className="overflow-hidden -mx-3 px-3 py-4">
  <div 
    className="flex transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(-${projectOffset * (100 / 8)}%)` }}
  >
    {[...initialProjects, ...initialProjects].map((proj, idx) => (
      <div key={idx} className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-3">
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
          <div className="h-44 bg-slate-200 overflow-hidden shrink-0">
            <img alt={proj.title} className="w-full h-full object-cover" src={proj.image}/>
          </div>
          <div className="p-4 space-y-3 grow flex flex-col justify-center">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm text-slate-900 line-clamp-1 pr-2">{proj.title}</h3>
              <a onClick={handleDummyClick} className="text-slate-400 hover:text-slate-700 text-xs shrink-0" href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
{/*  Carousel arrows  */}
<div className="flex items-center justify-center space-x-3 mt-8">
<button onClick={() => setProjectOffset((p) => (p - 1 + 4) % 4)} className="w-8 h-8 rounded-full bg-[#4a5240]/80 hover:bg-[#4a5240] text-white flex items-center justify-center text-xs transition-colors cursor-pointer focus:outline-none shadow-sm">
<i className="fa-solid fa-arrow-left pointer-events-none"></i>
</button>
<button onClick={() => setProjectOffset((p) => (p + 1) % 4)} className="w-8 h-8 rounded-full bg-[#3d4435] hover:bg-[#4a5240] text-white flex items-center justify-center text-xs transition-colors cursor-pointer focus:outline-none shadow-sm">
<i className="fa-solid fa-arrow-right pointer-events-none"></i>
</button>
</div>
</section>
{/*  END: PopularPropertySection  */}

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
<section className="bg-[#f8f7f4] py-24" data-purpose="work-process" id="process">
<div className="max-w-7xl mx-auto px-6 sm:px-8">
<h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1a1c19] tracking-tight mb-16">Our Work Process</h2>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
{/*  Process step icon sidebar  */}
<div className="lg:col-span-3 flex lg:flex-col justify-around lg:justify-start gap-6" data-purpose="process-steps">
{processSteps.map((step, index) => (
  <button 
    key={index} 
    onClick={() => setActiveProcessStep(index)}
    className={`flex flex-col items-center text-center p-5 rounded-2xl border transition-colors w-full cursor-pointer focus:outline-none shadow-sm ${activeProcessStep === index ? 'bg-[#4a5240] text-white border-[#4a5240]' : 'bg-white text-[#1a1c19] hover:bg-gray-50 border-gray-100'}`}>
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-lg mb-3 transition-colors ${activeProcessStep === index ? 'bg-white/20' : 'bg-gray-100 text-[#4a5240]'}`}>
      <i className={`fa-solid ${step.icon}`}></i>
    </div>
    <span className={`text-xs font-semibold transition-colors ${activeProcessStep === index ? 'text-white' : 'text-[#1a1c19]/70'}`}>{step.title}</span>
  </button>
))}
</div>
{/*  Featured process preview card  */}
<div className="lg:col-span-9 relative rounded-3xl overflow-hidden shadow-md border border-gray-100 group bg-white h-[400px] sm:h-[500px] lg:h-[600px]">
{processSteps.map((step, index) => (
  <div key={index} className={`absolute inset-0 transition-all duration-1000 ease-in-out ${activeProcessStep === index ? 'opacity-100 z-10' : 'opacity-0 z-0 scale-[1.02]'}`}>
    <img alt={step.heading} className="w-full h-full object-cover" src={step.image}/>
    <div className={`absolute inset-y-0 right-0 w-full sm:w-1/2 bg-white/95 backdrop-blur-md p-8 sm:p-12 flex flex-col justify-center text-[#1a1c19] transition-all duration-700 ease-out ${activeProcessStep === index ? 'translate-x-0 opacity-100 delay-300' : 'translate-x-8 opacity-0'}`}>
      <h3 className="text-2xl font-bold mb-4">{step.heading}</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-8 font-light">
        {step.description}
      </p>
      <div className="flex items-center justify-between text-sm pt-6 border-t border-gray-100">
        <span className="text-gray-500 font-medium">0{index + 1} <span className="text-[#1a1c19] ml-2">{step.title}</span></span>
        <button onClick={() => setActiveProcessStep((index + 1) % processSteps.length)} className="text-[#4a5240] hover:text-[#1a1c19] font-medium flex items-center gap-1.5 focus:outline-none transition-colors">Next <i className="fa-solid fa-chevron-right text-xs"></i></button>
      </div>
    </div>
  </div>
))}
</div>
</div>
</div>
</section>
{/*  END: WorkProcessSection  */}



{/*  BEGIN: TestimonialsSection  */}
<section className="max-w-7xl mx-auto px-6 sm:px-8 py-12" data-purpose="testimonials">
<div className="bg-[#4a5240] rounded-3xl overflow-hidden shadow-xl p-8 sm:p-12 text-white">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
{/*  Testimonial heading  */}
<div className="lg:col-span-4 space-y-4">
<h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug">
            What our clients say about us
          </h2>
<p className="text-xs text-white/70 font-light leading-relaxed">
            Hear from our happy clients about how we&apos;ve helped bring their vision to life.
          </p>
<a className="inline-flex items-center gap-1 text-xs font-medium border border-white/30 px-4 py-2 rounded-full hover:bg-white/10 transition-colors" href="#" onClick={handleDummyClick}>
<span>View all</span>
<i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
</a>
</div>
{/*  Featured Testimonial Card with Image Background  */}
<div className="lg:col-span-8 relative rounded-2xl overflow-hidden p-6 sm:p-8 bg-cover bg-center border border-white/10" style={{'backgroundImage': 'linear-gradient(rgba(74, 82, 64, 0.85), rgba(74, 82, 64, 0.95)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfZeawvZgcC7kTWBUlCYhW4uWWzVDVMqvqiuzfsQsRKpBvP3zQs53hp6wbljI4uYekiGqFz6RttqTcC722nWzlTOZswtJQy1QSgiAJfELw69PRo4vx8gLA6dcF4jCUGS8aij90wFBdkLLsYfgK4ruyUPO4xYx4xmVYgHDOGp0iI6v4DO8FCy_QV2CJXOALDjBMJe6m-UsG9JXE7mrMsFMW9aWyk2Eh19QSd6CMKBfkpl6hU0rWTg6Nhw")'}}>
<div className="relative z-10 space-y-4">
{/*  Author Avatar & Details  */}
<div className="flex items-center space-x-3">
<div className="w-11 h-11 rounded-full object-cover border-2 border-white/30 bg-white/20 flex items-center justify-center text-white font-bold text-lg">
  {testimonials[testOffset].name.charAt(0)}
</div>
<div>
<div className="text-xs font-semibold text-white">{testimonials[testOffset].name}</div>
<div className="text-[10px] text-white/60">{testimonials[testOffset].role}</div>
</div>
</div>
{/*  Quote Text  */}
<blockquote className="text-xs text-white/90 leading-relaxed font-light min-h-[60px]">
  &quot;{testimonials[testOffset].text}&quot;
</blockquote>
{/*  Rating Stars and Carousel Navigation  */}
<div className="flex items-center justify-between pt-2">
<div className="text-amber-400 text-xs flex space-x-1">
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
</div>
<div className="flex space-x-2">
<button onClick={() => setTestOffset((p) => (p - 1 + testimonials.length) % testimonials.length)} className="w-8 h-8 rounded-full border border-white/20 text-white hover:bg-white/10 flex items-center justify-center text-[10px] focus:outline-none transition-colors">
<i className="fa-solid fa-arrow-left"></i>
</button>
<button onClick={() => setTestOffset((p) => (p + 1) % testimonials.length)} className="w-8 h-8 rounded-full bg-white text-[#4a5240] flex items-center justify-center text-[10px] hover:bg-gray-100 focus:outline-none transition-colors">
<i className="fa-solid fa-arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  END: TestimonialsSection  */}
{/*  BEGIN: LeadFormSection  */}
<section className="max-w-7xl mx-auto px-6 sm:px-8 py-16" data-purpose="lead-capture" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-lg border-0 bg-[#4a5240]">
{/*  Contact Form  */}
<div className="lg:col-span-6 p-8 sm:p-10 text-white">
<h2 className="text-xl sm:text-2xl font-bold mb-6">Still haven&apos;t found what you&apos;re looking for?</h2>
{contactStatus ? (
  <div className="bg-green-500/20 border border-green-500/50 text-white p-4 rounded-xl text-sm font-medium text-center">
    Thank you for your inquiry. Our team will contact you shortly!
  </div>
) : (
  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setContactStatus(true); }}>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <input required className="w-full bg-white text-[#1a1c19] text-xs px-4 py-3 rounded-xl border-0 placeholder-gray-400 focus:ring-2 focus:ring-white/50 outline-none" placeholder="First name" type="text"/>
  <input required className="w-full bg-white text-[#1a1c19] text-xs px-4 py-3 rounded-xl border-0 placeholder-gray-400 focus:ring-2 focus:ring-white/50 outline-none" placeholder="Last name" type="text"/>
  </div>
  <input required className="w-full bg-white text-[#1a1c19] text-xs px-4 py-3 rounded-xl border-0 placeholder-gray-400 focus:ring-2 focus:ring-white/50 outline-none" placeholder="Inquiry Type (e.g., NOC Consultation)" type="text"/>
  <textarea className="w-full bg-white text-[#1a1c19] text-xs px-4 py-3 rounded-xl border-0 placeholder-gray-400 focus:ring-2 focus:ring-white/50 outline-none" placeholder="Project Details / Notes" rows={3}></textarea>
  <button className="w-full bg-[#1a1c19] text-white text-xs font-semibold py-3 rounded-xl hover:bg-black transition-colors mt-2 shadow-sm" type="submit">
              Submit Request
            </button>
  </form>
)}
</div>
{/*  Architectural Showcase Beside Form  */}
<div className="lg:col-span-6 relative bg-slate-800 min-h-[280px]">
<img alt="Abbottabad Townhouse" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1q1YGqF0_SynstJYEnAAxdLr3eTiyO_H0ssThwUUvLRb08PVqRZ-_nZgazhiCVk5NrvVC1AzmiUn22uGM_-rbwqB4lKjaf-yHSI0gpY6_8xZHm82fseuHfWgiQGgJXI68Q-EaHKZOBcRyuxIeZvEafPswLNv_m00WKCKR9eCjV399wZu_r7LyURXlpYIku4HnZ1tbVJDdUb90kpqjpSFq1WVay5DrxldJbb1CkfswCnm7Dq_EJzmdsQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-between p-6 text-white text-xs">
<span className="font-medium">Abbottabad Townhouse</span>
<div className="flex space-x-2">
<button className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center text-[10px]">
<i className="fa-solid fa-arrow-left"></i>
</button>
<button className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center text-[10px]">
<i className="fa-solid fa-arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>
{/*  END: LeadFormSection  */}
{/*  BEGIN: NewsletterSection  */}
<section className="max-w-7xl mx-auto px-6 sm:px-8 pb-16" data-purpose="newsletter">
<div className="bg-[#4a5240] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
<h3 className="text-white font-semibold text-base sm:text-lg">Subscribe Newsletters</h3>
{newsletterStatus ? (
  <div className="text-white text-sm font-medium bg-green-500/20 px-4 py-2 rounded-full border border-green-500/50">
    Subscribed successfully!
  </div>
) : (
<form className="flex w-full sm:w-auto max-w-md gap-2" onSubmit={(e) => { e.preventDefault(); setNewsletterStatus(true); }}>
<input required className="w-full sm:w-64 bg-white text-[#1a1c19] text-xs px-5 py-2.5 rounded-full border-0 placeholder-gray-400 focus:ring-2 focus:ring-white/50 outline-none" placeholder="Enter your email" type="email"/>
<button className="bg-[#1a1c19] text-white text-xs font-medium px-6 py-2.5 rounded-full hover:bg-black transition-colors whitespace-nowrap shadow-sm" type="submit">
          Subscribe Now
        </button>
</form>
)}
</div>
</section>
{/*  END: NewsletterSection  */}
{/*  BEGIN: MainFooter  */}
<footer className="bg-white border-t border-slate-200 pt-12 pb-8 text-xs text-slate-500" data-purpose="main-footer">
<div className="max-w-7xl mx-auto px-6 sm:px-8">
{/*  Footer Navigation and Social Links  */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
<div className="flex items-center space-x-8 text-slate-600 font-medium text-xs">
<a className="hover:text-slate-900 transition-colors" href="#about">About us</a>
<a className="hover:text-slate-900 transition-colors" href="#properties">Discover</a>
<a className="hover:text-slate-900 transition-colors" href="#neighborhood">Explore</a>
<a className="hover:text-slate-900 transition-colors" href="#news">Books</a>
</div>
<div className="flex items-center space-x-4 text-slate-400">
<a aria-label="Facebook" className="hover:text-[#4a5240] transition-colors text-sm" href="#" onClick={handleDummyClick}><i className="fa-brands fa-facebook-f"></i></a>
<a aria-label="Twitter" className="hover:text-[#4a5240] transition-colors text-sm" href="#" onClick={handleDummyClick}><i className="fa-brands fa-twitter"></i></a>
<a aria-label="Vimeo" className="hover:text-[#4a5240] transition-colors text-sm" href="#" onClick={handleDummyClick}><i className="fa-brands fa-vimeo-v"></i></a>
<a aria-label="YouTube" className="hover:text-[#4a5240] transition-colors text-sm" href="#" onClick={handleDummyClick}><i className="fa-brands fa-youtube"></i></a>
</div>
</div>
{/*  Footer Bottom with Logo & Copyright  */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] text-slate-400">
<div>
          Copyright 2025. All right reserved
        </div>
<div className="font-bold text-slate-800 text-sm tracking-tight">
          Roman Builders
        </div>
<div className="flex space-x-4">
<a className="hover:underline" href="#" onClick={handleDummyClick}>Terms of Service</a>
<a className="hover:underline" href="#" onClick={handleDummyClick}>Privacy Policy</a>
</div>
</div>
</div>
</footer>
{/*  END: MainFooter  */}

    </main>
  );
}
