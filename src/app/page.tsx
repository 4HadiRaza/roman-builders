"use client";
import { useState } from 'react';

export default function Home() {
  const [contactStatus, setContactStatus] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState('Ongoing');
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  const [projectOffset, setProjectOffset] = useState(0);
  const [teamOffset, setTeamOffset] = useState(0);

  const initialProjects = [
    { title: "Prime View Co-Operative Housing Society Ltd", image: "/images/project1.jpg", price: "$3200", bed: 3, bath: 2, sqft: 1400 },
    { title: "Green City Abbottabad", image: "/images/project2.jpg", price: "$3800", bed: 4, bath: 2, sqft: 1200 },
    { title: "Roman Valley Society", image: "/images/project3.jpg", price: "$3600", bed: 3, bath: 2, sqft: 1100 },
    { title: "Hazara Residencia", image: "/images/project4.jpg", price: "$3000", bed: 3, bath: 2, sqft: 950 }
  ];
  const displayProjects = [...initialProjects, ...initialProjects].slice(projectOffset, projectOffset + 4);

  const teamMembers = [
    { name: "Ali Khan", role: "Chief Architect", exp: "10 years", lang: "English, Arabic", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80" },
    { name: "Fatima Zafar", role: "Head of Construction", exp: "12 years", lang: "English, Spanish", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" },
    { name: "Usman Tariq", role: "Sales Director", exp: "14 years", lang: "English, French", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80" }
  ];
  const displayTeam = [...teamMembers, ...teamMembers].slice(teamOffset, teamOffset + 3);



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


  return (
    <main>

{/*  BEGIN: HeroAndHeaderWrapper  */}
<div className="relative bg-[#3ba2b8] overflow-hidden flex flex-col justify-between">
{/*  Large Havnex Watermark behind hero elements  */}
<div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-full text-center text-[10rem] md:text-[18rem] font-black tracking-tight z-0 select-none bg-gradient-to-b from-white/30 to-transparent bg-clip-text text-transparent opacity-20 leading-none pointer-events-none">
      Roman
    </div>
{/*  BEGIN: MainHeader  */}
<div className="px-4 sm:px-8 pt-6">
  <header className="relative z-20 max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white bg-black/10 rounded-sm">
  {/*  Brand Logo  */}
  <a className="text-xl sm:text-2xl font-bold tracking-tight text-white flex flex-col justify-center leading-none" data-purpose="brand-logo" href="#" onClick={handleDummyClick}>
  <span>Roman Builders</span>
  <span className="text-[10px] sm:text-xs text-white/70 font-medium tracking-wide mt-1">& Developers</span>
  </a>
  {/*  Desktop Navigation Links  */}
  <nav className="hidden md:flex items-center space-x-12 text-[13px] font-medium text-white/90" data-purpose="primary-navigation">
  <a className="hover:text-white transition-colors" href="#about">About us</a>
  <a className="hover:text-white transition-colors" href="#properties">Properties</a>
  <a className="hover:text-white transition-colors" href="#process">Services</a>
  <a className="hover:text-white transition-colors" href="#news">Blog</a>
  </nav>
  {/*  Action Icons & Button  */}
  <div className="flex items-center space-x-6" data-purpose="header-actions">
  <button aria-label="Search" className="text-white/90 hover:text-white transition-colors text-sm" type="button">
  <i className="fa-solid fa-magnifying-glass"></i>
  </button>
  <a className="bg-[#1b343e] text-white px-6 py-2.5 rounded text-[13px] font-medium hover:bg-black transition-colors shadow-sm" href="#contact">
            Contact us
          </a>
  </div>
  </header>
</div>
{/*  END: MainHeader  */}
{/*  BEGIN: HeroSection  */}
<section className="relative z-10 w-full pt-20 md:pt-24 pb-16 md:pb-20" data-purpose="hero-content">
{/*  Hero House Visual (Absolute to bottom-right corner)  */}
{/*
  HOW TO ADJUST THE HOUSE IMAGE:
  1. Size: Change `w-[55vw]` (viewport width) or `max-w-[850px]` (maximum pixel width) below. 
     Increase these values to make it larger, decrease to make it smaller.
  2. Left/Right Position: Use `right-0` to pin it to the right edge. You can change the `translate-x-4` 
     on the <img> tag inside to nudge it exactly where you want (e.g., `translate-x-[-20px]` to move left).
  3. Up/Down Position: Change `bottom-[-4rem]` to move the container up or down relative to the section.
*/}
<div className="hidden lg:flex absolute bottom-0 right-0 w-[55vw] max-w-[850px] z-0 pointer-events-none justify-end items-end" data-purpose="hero-image-container">
<img alt="House with red roof and vibrant greenery" className="w-full h-auto object-contain object-bottom translate-x-[4%] translate-y-[6%]" src="/images/download (1).png"/>
</div>

<div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
{/*  Hero Text & CTA  */}
<div className="max-w-2xl space-y-6 pt-16 md:pt-28">
<h1 className="text-5xl lg:text-[4.5rem] font-bold text-white tracking-tight leading-[1.05]">
            Discover Where<br/>Life Begins
          </h1>
<p className="text-white/95 text-[15px] max-w-md leading-relaxed font-normal pt-2">
            Browse thousands of trusted listings and unlock the door to your perfect home — whether buying, renting, or investing.
          </p>
<div className="pt-4">
<a className="inline-flex items-center gap-2 bg-[#2d5f6b] text-white px-5 py-3 rounded text-[13px] font-medium hover:bg-[#1f4e56] transition-all shadow-md border border-[#3e7d8c]/50" href="#properties">
<span>Explore properties</span>
<i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
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
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3ba2b8]/10 text-[#3ba2b8] text-xs font-semibold mb-6">
        <i className="fa-solid fa-building"></i>
        <span>Our Expertise</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">What We Do at Roman Builders & Developers</h2>
      <p className="text-sm text-slate-600 leading-relaxed mb-8">
        We are Abbottabad&apos;s premier real estate and construction firm. We specialize in transforming raw landscapes into fully developed, legally approved, and thriving cooperative housing societies with unmatched transparency and build quality.
      </p>
      
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#3ba2b8]/10 flex items-center justify-center shrink-0">
            <i className="fa-solid fa-map-location-dot text-[#3ba2b8] text-lg"></i>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">Master Planning & Land Acquisition</h4>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">We identify prime locations and meticulously plan modern urban societies with sustainable infrastructure and community-focused layouts.</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#3ba2b8]/10 flex items-center justify-center shrink-0">
            <i className="fa-solid fa-file-contract text-[#3ba2b8] text-lg"></i>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">Legal Approvals & NOCs</h4>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Our expert legal team navigates complex regulatory frameworks to secure TMA, EPA, and other required approvals swiftly and transparently.</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#3ba2b8]/10 flex items-center justify-center shrink-0">
            <i className="fa-solid fa-helmet-safety text-[#3ba2b8] text-lg"></i>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">World-Class Construction</h4>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">From robust roads and reliable sewerage systems to premium residential villas, we build everything with uncompromising quality standards.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="relative mt-8 lg:mt-0">
      <div className="absolute inset-0 bg-[#3ba2b8] rounded-3xl translate-x-4 translate-y-4 opacity-20"></div>
      <img src="/WhatsApp%20Image%202026-09-04%20at%2012.10.28.jpeg" alt="Roman Builders Leadership" className="relative rounded-3xl object-cover object-[center_85%] w-full aspect-[4/5] md:aspect-[4/5] lg:aspect-[3/4] shadow-lg" />
      {/* Small floating stat badge */}
      <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
        <div className="w-10 h-10 rounded-full bg-[#1b343e] flex items-center justify-center text-white">
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
{/*  Filter Buttons & Explore All Link  */}
<div className="flex flex-wrap items-center justify-between gap-4 mb-8">
<div className="flex items-center space-x-2">
{['Ongoing', 'Completed', 'Upcoming'].map((tab) => (
  <button 
    key={tab}
    onClick={() => setActiveProjectTab(tab)}
    className={`px-5 py-2 rounded-lg text-xs transition-colors ${activeProjectTab === tab ? 'font-semibold bg-[#0F363E] text-white' : 'font-medium bg-slate-100 hover:bg-slate-200 text-slate-600'}`} 
    type="button">
    {tab}
  </button>
))}
</div>
<a className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#0F363E] text-white px-4 py-2 rounded-lg hover:bg-[#1D5966] transition-colors" href="#" onClick={handleDummyClick}>
<span>Explore all</span>
<i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
</a>
</div>
{/*  Cards Grid  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{displayProjects.map((proj, idx) => (
  <div key={idx} className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="h-44 bg-slate-200 overflow-hidden">
      <img alt={proj.title} className="w-full h-full object-cover" src={proj.image}/>
    </div>
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-sm text-slate-900">{proj.title}</h3>
        <a onClick={handleDummyClick} className="text-slate-400 hover:text-slate-700 text-xs" href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>
    </div>
  </div>
))}
</div>
{/*  Carousel arrows  */}
<div className="flex items-center justify-center space-x-3 mt-8">
<button onClick={() => setProjectOffset((p) => (p - 1 + 4) % 4)} className="w-8 h-8 rounded bg-[#0F363E]/80 hover:bg-[#0F363E] text-white flex items-center justify-center text-xs transition-colors cursor-pointer focus:outline-none">
<i className="fa-solid fa-arrow-left pointer-events-none"></i>
</button>
<button onClick={() => setProjectOffset((p) => (p + 1) % 4)} className="w-8 h-8 rounded bg-[#1D5966] hover:bg-[#0F363E] text-white flex items-center justify-center text-xs transition-colors cursor-pointer focus:outline-none">
<i className="fa-solid fa-arrow-right pointer-events-none"></i>
</button>
</div>
</section>
{/*  END: PopularPropertySection  */}
{/*  BEGIN: WorkProcessSection  */}
<section className="bg-[#0F363E] py-16 text-white" data-purpose="work-process" id="process">
<div className="max-w-7xl mx-auto px-6 sm:px-8">
<h2 className="text-2xl sm:text-3xl font-bold text-center tracking-tight mb-12">Our Work Process</h2>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
{/*  Process step icon sidebar  */}
<div className="lg:col-span-3 flex lg:flex-col justify-around lg:justify-start gap-4" data-purpose="process-steps">
{processSteps.map((step, index) => (
  <button 
    key={index} 
    onClick={() => setActiveProcessStep(index)}
    className={`flex flex-col items-center text-center p-3 rounded-xl border transition-colors w-full cursor-pointer focus:outline-none ${activeProcessStep === index ? 'bg-white/10 border-white/10' : 'hover:bg-white/5 border-transparent'}`}>
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm mb-2 transition-colors ${activeProcessStep === index ? 'bg-[#1D5966]' : 'bg-white/10'}`}>
      <i className={`fa-solid ${step.icon}`}></i>
    </div>
    <span className={`text-[11px] font-medium transition-colors ${activeProcessStep === index ? 'text-white' : 'text-white/70'}`}>{step.title}</span>
  </button>
))}
</div>
{/*  Featured process preview card  */}
<div className="lg:col-span-9 relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group transition-all duration-300">
<img alt={processSteps[activeProcessStep].heading} className="w-full h-80 sm:h-96 object-cover" src={processSteps[activeProcessStep].image}/>
<div className="absolute inset-y-0 right-0 w-full sm:w-1/2 bg-[#0F363E]/85 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-center text-white">
<h3 className="text-xl font-bold mb-3">{processSteps[activeProcessStep].heading}</h3>
<p className="text-xs text-white/80 leading-relaxed mb-6 font-light">
  {processSteps[activeProcessStep].description}
</p>
<div className="flex items-center justify-between text-xs pt-4 border-t border-white/20">
<span className="text-white/60 font-medium">0{activeProcessStep + 1} <span className="text-white ml-2">{processSteps[activeProcessStep].title}</span></span>
<button onClick={() => setActiveProcessStep((activeProcessStep + 1) % processSteps.length)} className="text-white hover:text-white/80 font-medium flex items-center gap-1 focus:outline-none">Next <i className="fa-solid fa-chevron-right text-[10px]"></i></button>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  END: WorkProcessSection  */}
{/*  BEGIN: NeighborhoodSection  */}
<section className="max-w-7xl mx-auto px-6 sm:px-8 py-20" data-purpose="neighborhood-catalog">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Our Core Expertise</h2>
<p className="text-xs text-slate-500 mt-2 max-w-xl">
          We specialize in transforming raw land into legally approved, fully developed co-operative housing societies with modern amenities.
        </p>
</div>
<a className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F363E] border border-slate-300 px-3.5 py-1.5 rounded hover:bg-slate-50" href="#" onClick={handleDummyClick}>
<span>View all</span>
<i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
</a>
</div>
{/*  Neighborhood Bento-styled Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
{/*  Column 1 (2 stacked cards)  */}
<div className="flex flex-col gap-5">
<div className="relative h-44 rounded-xl overflow-hidden group shadow-sm">
<img alt="Hillcrest, Mandian" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwPbrjnFWIkltmZ8Vh-MJIzkO3vZSISWm1563p7SJCeat16zFY6XLM98AnmfchAe0J-Tb0l85JzIlFpbLGfoj4OWTVZMudCBgN_W3pK6UhWAqPVPhw8Fk5FwAI7f2zah5l9HeJZq8Y66rIX78WJfsCk4gw5faG2yJq0MER3dThqdwG4DQA09jCw6h-0PZ-ImNrxyCfKMPWXauZMgWOyIaqcO4_uN6AWZvKSSz0CYourEjqjE1L9NPiOw"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
<div className="flex items-center justify-between w-full text-white text-xs font-medium">
<span>Hillcrest, Mandian</span>
<i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
</div>
</div>
</div>
<div className="relative h-44 rounded-xl overflow-hidden group shadow-sm">
<img alt="Rosegate, Nawan Shehr" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADEMd7nbTImbHttVeMXUETWSH5bsp-czjOMvLxRJiZv33QXycPyh8Wpujmq6kj12NqEKvEx1TlYYh-5-AF-scTTQFN6BAfqMhI8WPIFUaw46uCBrOsGhdHWaqxd8dOmYHYBXrm7GN2S2N_z1fbg2c-zdJcFC26PI_VZPSY3FBWpqrGUCI5lmJOuGj_TEpHIFERSEwoGWLPus0d0cL4IOP-5K_Y9zk3VAEsz5s-OYj4kcWFiobBHEMhsw"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
<div className="flex items-center justify-between w-full text-white text-xs font-medium">
<span>Rosegate, Nawan Shehr</span>
<i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
</div>
</div>
</div>
</div>
{/*  Column 2 (Tall skyscraper card)  */}
<div className="relative h-[23.25rem] rounded-xl overflow-hidden group shadow-sm">
<img alt="Silverleaf, Jhangi" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7T_91QZFbKKLxmg_rDOcX_GYxiDHVCVpAqUhGPA9jFR9XgonfsHYtk64mFw8Sxy9HASYjPzzBb3O4-EIjPl5AETmsJcp0B12PqXR1mJlOxiYJdX0ZMTPdnRFG8FpyaVXxKkRLAM-roJ7Ch-QcwlinECCp6w_iMvbaeE80DKzKKmlvwuimY54Wu-OCMrQeFJdw1EWtlPV_kFa9wMSy-yYytNmwD0rIKiGmYMy3_xl5EQFMxxn3JJ42hg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
<div className="flex items-center justify-between w-full text-white text-xs font-medium">
<span>Silverleaf, Jhangi</span>
<i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
</div>
</div>
</div>
{/*  Column 3 (2 stacked cards)  */}
<div className="flex flex-col gap-5">
<div className="relative h-44 rounded-xl overflow-hidden group shadow-sm">
<img alt="Oakmont, PMA Kakul" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfTRQ4Qab1BxJga1jTVRcWXR0J98AyAs66b7FZL8-6tieKdBvd4D1JrZIQ7Eo9oZiJ8rSk72BxuidcXHWDtDf_zgG2JVhbaf0w45IWJP1VajxwgdZHfEw1_FasHREpUcsH5hhXuyL_kPN5a36TUHeMe_GwxHh2sRc2KsH0FwKhv-11zY5bcncmWrgjXg0ovEvCQDFuxA0-4GNpdiOWjudyCvr3PTnwFtoox7xUlwfrhU4OBvdKWKkNDg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
<div className="flex items-center justify-between w-full text-white text-xs font-medium">
<span>Oakmont, PMA Kakul</span>
<i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
</div>
</div>
</div>
<div className="relative h-44 rounded-xl overflow-hidden group shadow-sm">
<img alt="Maplewood, Bilal Town" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLwop_JwvYH1UzlpBRGkwvLklf_ZanzDCxc699-Om1m-MedhJI8j34oax-gQ8aPsLNp8dD2ck_cdmGuLYBbyFFzRtS63HlA6ST1AHjN4_-trM7PjWsr0ZXGnbwrpynr5So-sQABUmzMes-_k4NG_w-5Cdp1qXD2MCGCnoUhcvkdSYxeVEQfUS811-4lnXpvFpJO26XnFX4CMz-XuKwVQDch0XUfoDxBuPKRrG9AxRPeniM37vQq3-IUg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
<div className="flex items-center justify-between w-full text-white text-xs font-medium">
<span>Maplewood, Bilal Town</span>
<i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  END: NeighborhoodSection  */}
{/*  BEGIN: TeamSection  */}
<section className="max-w-7xl mx-auto px-6 sm:px-8 py-16" data-purpose="team-members">
<div className="text-center max-w-xl mx-auto mb-8">
<h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Meet Our Team</h2>
<p className="text-xs text-slate-500 mt-2">
        Get to know the passionate professionals dedicated to guiding you home. Experienced, trusted, and always here for you.
      </p>
{/*  Search Filters  */}
<div className="mt-6 flex items-center justify-center gap-2">
<select className="bg-white border border-slate-200 rounded text-xs px-3 py-1.5 text-slate-600 focus:ring-1 focus:ring-[#0F363E]">
<option>Language</option>
<option>English</option>
<option>Spanish</option>
<option>French</option>
</select>
<select className="bg-white border border-slate-200 rounded text-xs px-3 py-1.5 text-slate-600 focus:ring-1 focus:ring-[#0F363E]">
<option>Specialization</option>
<option>Ongoing</option>
<option>Completed</option>
</select>
<button className="bg-[#0F363E] text-white text-xs px-4 py-1.5 rounded flex items-center gap-1.5 hover:bg-[#1D5966] transition-colors">
<i className="fa-solid fa-magnifying-glass text-[10px]"></i>
<span>Search</span>
</button>
</div>
</div>
{/*  Team Cards Slider / Grid  */}
<div className="relative flex items-center justify-center">
{/*  Left Arrow  */}
<button onClick={() => setTeamOffset((p) => (p - 1 + 3) % 3)} className="hidden md:flex absolute left-0 z-10 w-8 h-8 rounded border border-slate-300 text-slate-600 items-center justify-center hover:bg-slate-100 text-xs cursor-pointer focus:outline-none">
<i className="fa-solid fa-arrow-left pointer-events-none"></i>
</button>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl px-0 md:px-12">
{displayTeam.map((member, idx) => (
  <div key={idx} className="bg-[#1b343e] text-white rounded-2xl overflow-hidden shadow-xl border border-white/5 flex flex-col items-center pt-8 pb-6 px-4 text-center group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-white/15">
    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-slate-200 mb-5 shadow-inner ring-4 ring-[#3ba2b8]/20 group-hover:ring-[#3ba2b8]/50 transition-all duration-300">
      <img alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src={member.img}/>
    </div>
    <h3 className="font-bold text-base sm:text-lg">{member.name}</h3>
    <p className="text-[11px] sm:text-xs text-[#3ba2b8] mb-5 font-medium tracking-wider uppercase">{member.role}</p>
    <div className="text-[11px] sm:text-xs text-white/80 border-t border-white/10 pt-4 w-full space-y-2 font-light">
      <div className="flex justify-between px-2">
        <span className="text-white/50">Experience</span>
        <span className="font-medium text-white">{member.exp}</span>
      </div>
      <div className="flex justify-between px-2">
        <span className="text-white/50">Languages</span>
        <span className="font-medium text-white">{member.lang}</span>
      </div>
    </div>
  </div>
))}
</div>
{/*  Right Arrow  */}
<button onClick={() => setTeamOffset((p) => (p + 1) % 3)} className="hidden md:flex absolute right-0 z-10 w-8 h-8 rounded bg-[#1D5966] text-white items-center justify-center hover:bg-[#0F363E] text-xs cursor-pointer focus:outline-none">
<i className="fa-solid fa-arrow-right pointer-events-none"></i>
</button>
</div>
<div className="text-center mt-8">
<a className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#0F363E] text-white px-4 py-2 rounded hover:bg-[#1D5966]" href="#" onClick={handleDummyClick}>
<span>View all</span>
<i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
</a>
</div>
</section>
{/*  END: TeamSection  */}
{/*  BEGIN: NewsSection  */}
<section className="max-w-7xl mx-auto px-6 sm:px-8 py-16" data-purpose="news-and-insights" id="news">
<div className="mb-8">
<h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Development Insights</h2>
<p className="text-xs text-slate-500 mt-1">
        Get to know the passionate professionals dedicated to guiding you home. Experienced, trusted, and always here for you.
      </p>
</div>
{/*  Editorial Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
{/*  Main Large News Card  */}
<div className="lg:col-span-6 bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm flex flex-col justify-between">
<div className="h-64 sm:h-72 bg-slate-200">
<img alt="Rental Market News" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1H5OGAO06vKn3N8gQWFIwY2tZ84-tS-KYYex5T0QtYU-9OEJWQnXaZy00dK2n0kxdw1KdvzsVRraFnkyXNQ12BJDVYh4uK6OSbm7ODsSROAYOYfj_pp1YqSkwUVH77OFQPfUsolPHGqdLhv4hlny4gCCwvV99VSZP6iJikJwZ3uNfXx3x1b7WNdj72j4AF6my9de4_kCkXqWG7_Esrb422_gW4eN9v5QjhDOwMG_m45iXrabyGHEFZw"/>
</div>
<div className="p-5">
<span className="text-[10px] text-slate-400 font-medium">10 May 2025</span>
<div className="flex items-center justify-between mt-1">
<h3 className="text-sm font-semibold text-slate-900">Navigating TMA Approvals: A Guide for Developers</h3>
<a className="text-xs text-[#0F363E] font-medium flex items-center gap-1 whitespace-nowrap ml-4" href="#" onClick={handleDummyClick}>
<span>Read more</span>
<i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
</a>
</div>
</div>
</div>
{/*  Secondary Smaller Cards Grid  */}
<div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
{/*  Mini Card 1  */}
<div className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm h-44">
<img alt="Architecture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK9fzq7DPil8C4DIlRjdSgWuHgoKyGWjU4DL-_pOh6K1FDkc22xwYvEqE7oRmGWMc-4wbTpT5SLsh1YMrTwMWl5z8uoMAMjQMJ7Ir5-DPmHZosAKcjIhcjvMi-0n4f9uioaHcLBStQedn27ag1jY4IuBuTgODZwD8Bx4l1z-wxQ6LlRVVPIiixeVHr4vJFz-ZyOsCadAG-63fYQP9Q5c-hQhXTNx7cY81Q8j0O3dzR0IKnP4xKtbV8yg"/>
</div>
{/*  Mini Card 2  */}
<div className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm h-44">
<img alt="Estate" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYBtb93AwIZFI3mKsKTCLXnTPtcvXp9IRBy29ncR9m3aC6F--88LPQkemgWM3EtrnC0IoRX7OgVhUhGS3cjAYJD6mnqll1OSlorbGERI2Nl_sw-116cxw3eMubzWOxKYHr2vfraGKOLWgx3x3osk7y--efZYGpxDqG68nthZxZZqYJHw3zD8duFinNdriNJE4fQ-q30uZcX67a6fz1LPu8OprSsYcFdjlEYYCj8XRhORpp_h6_i0LQWg"/>
</div>
{/*  Mini Card 3 Spanning Full Width  */}
<div className="sm:col-span-2 bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm h-48">
<img alt="Suburban Villa" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKUOqwwKTXooM4vrFFLbDfojSRKbU5rzz2pL1Rk_FcF0J9GiRnjJh4IlsvJSaxL-Qj1bWJVPt5BKWuqNMGebiQzVkc86xb2jz9uM9foK28caKc6k2oftsE_KdXWiPAg5aqbCOresxix7pYr7W_9IkzRwRxkUDzJnSB5LTLmCie_rtzKe5aDfrl1RgLL70zC2aKTogbD7aAEiAiHLv4H5nOzf6b4NXUNSsKICTGUudtwsmrAf2u8GTiWQ"/>
</div>
</div>
</div>
<div className="text-center mt-8">
<a className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#0F363E] text-white px-4 py-2 rounded hover:bg-[#1D5966]" href="#" onClick={handleDummyClick}>
<span>Read all</span>
<i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
</a>
</div>
</section>
{/*  END: NewsSection  */}
{/*  BEGIN: TestimonialsSection  */}
<section className="max-w-7xl mx-auto px-6 sm:px-8 py-12" data-purpose="testimonials">
<div className="bg-[#0F363E] rounded-2xl overflow-hidden shadow-xl p-8 sm:p-12 text-white">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
{/*  Testimonial heading  */}
<div className="lg:col-span-4 space-y-4">
<h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug">
            What our clients say about us
          </h2>
<p className="text-xs text-white/70 font-light leading-relaxed">
            Hear from our happy clients about how we&apos;ve helped bring their vision to life.
          </p>
<a className="inline-flex items-center gap-1 text-xs font-medium border border-white/30 px-3.5 py-1.5 rounded hover:bg-white/10 transition-colors" href="#" onClick={handleDummyClick}>
<span>View all</span>
<i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
</a>
</div>
{/*  Featured Testimonial Card with Image Background  */}
<div className="lg:col-span-8 relative rounded-xl overflow-hidden p-6 sm:p-8 bg-cover bg-center border border-white/10" style={{'backgroundImage': 'linear-gradient(rgba(15, 54, 62, 0.85), rgba(15, 54, 62, 0.95)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfZeawvZgcC7kTWBUlCYhW4uWWzVDVMqvqiuzfsQsRKpBvP3zQs53hp6wbljI4uYekiGqFz6RttqTcC722nWzlTOZswtJQy1QSgiAJfELw69PRo4vx8gLA6dcF4jCUGS8aij90wFBdkLLsYfgK4ruyUPO4xYx4xmVYgHDOGp0iI6v4DO8FCy_QV2CJXOALDjBMJe6m-UsG9JXE7mrMsFMW9aWyk2Eh19QSd6CMKBfkpl6hU0rWTg6Nhw")'}}>
<div className="relative z-10 space-y-4">
{/*  Author Avatar & Details  */}
<div className="flex items-center space-x-3">
<img alt="Ali Khan avatar" className="w-11 h-11 rounded-full object-cover border-2 border-white/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Jxt415I89k_GD6yhYLY0GZfGjPhhfk91bGqVR6FOnmpwFEqoQNDKpKk57SBar36xeh-KdJS9P8eaPh9klliwNPXkaAB5P2OCl1_A6mtjw3Yh8_4c8zEmJqFk0GDTe87RnBhgqd5zq0yLIMXc2yO5xd9FMH6E41BARpmVxMnE_s3HX7ei3yzj1-k0UibdFqgezlTUIr1BM69g21yaz71I9AdBzpCdbU1k1f9PZALBHsX2vEoWVsdLLA"/>
<div>
<div className="text-xs font-semibold text-white">Ali Khan</div>
<div className="text-[10px] text-white/60">Investor</div>
</div>
</div>
{/*  Quote Text  */}
<blockquote className="text-xs text-white/90 leading-relaxed font-light">
              &quot;Roman Builders Real Estate truly lives up to its name. They helped me find the perfect family home in a great neighborhood. The entire process was stress-free and smooth — from site visits to final paperwork.&quot;
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
<button className="w-7 h-7 rounded border border-white/20 text-white hover:bg-white/10 flex items-center justify-center text-[10px]">
<i className="fa-solid fa-arrow-left"></i>
</button>
<button className="w-7 h-7 rounded bg-[#1D5966] text-white flex items-center justify-center text-[10px]">
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
<div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-[#1D5966]">
{/*  Contact Form  */}
<div className="lg:col-span-6 p-8 sm:p-10 text-white">
<h2 className="text-xl sm:text-2xl font-bold mb-6">Still haven&apos;t found what you&apos;re looking for?</h2>
{contactStatus ? (
  <div className="bg-green-500/20 border border-green-500/50 text-white p-4 rounded-lg text-sm font-medium text-center">
    Thank you for your inquiry. Our team will contact you shortly!
  </div>
) : (
  <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setContactStatus(true); }}>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
  <input required className="w-full bg-white text-slate-800 text-xs px-3.5 py-2.5 rounded border-0 placeholder-slate-400 focus:ring-2 focus:ring-[#0F363E]" placeholder="First name" type="text"/>
  <input required className="w-full bg-white text-slate-800 text-xs px-3.5 py-2.5 rounded border-0 placeholder-slate-400 focus:ring-2 focus:ring-[#0F363E]" placeholder="Last name" type="text"/>
  </div>
  <input required className="w-full bg-white text-slate-800 text-xs px-3.5 py-2.5 rounded border-0 placeholder-slate-400 focus:ring-2 focus:ring-[#0F363E]" placeholder="Inquiry Type (e.g., NOC Consultation)" type="text"/>
  <textarea className="w-full bg-white text-slate-800 text-xs px-3.5 py-2.5 rounded border-0 placeholder-slate-400 focus:ring-2 focus:ring-[#0F363E]" placeholder="Project Details / Notes" rows={3}></textarea>
  <button className="w-full bg-[#0F363E] text-white text-xs font-semibold py-2.5 rounded hover:bg-black/40 transition-colors mt-2" type="submit">
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
<button className="w-6 h-6 rounded bg-black/40 hover:bg-black/60 text-white flex items-center justify-center text-[10px]">
<i className="fa-solid fa-arrow-left"></i>
</button>
<button className="w-6 h-6 rounded bg-black/40 hover:bg-black/60 text-white flex items-center justify-center text-[10px]">
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
<div className="bg-[#0F363E] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
<h3 className="text-white font-semibold text-base sm:text-lg">Subscribe Newsletters</h3>
{newsletterStatus ? (
  <div className="text-white text-sm font-medium bg-green-500/20 px-4 py-2 rounded border border-green-500/50">
    Subscribed successfully!
  </div>
) : (
<form className="flex w-full sm:w-auto max-w-md gap-2" onSubmit={(e) => { e.preventDefault(); setNewsletterStatus(true); }}>
<input required className="w-full sm:w-64 bg-white text-slate-800 text-xs px-4 py-2 rounded border-0 placeholder-slate-400 focus:ring-1 focus:ring-[#1D5966]" placeholder="Enter your email" type="email"/>
<button className="bg-[#1D5966] text-white text-xs font-medium px-4 py-2 rounded hover:bg-[#256e7e] transition-colors whitespace-nowrap" type="submit">
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
<a aria-label="Facebook" className="hover:text-[#0F363E] transition-colors text-sm" href="#" onClick={handleDummyClick}><i className="fa-brands fa-facebook-f"></i></a>
<a aria-label="Twitter" className="hover:text-[#0F363E] transition-colors text-sm" href="#" onClick={handleDummyClick}><i className="fa-brands fa-twitter"></i></a>
<a aria-label="Vimeo" className="hover:text-[#0F363E] transition-colors text-sm" href="#" onClick={handleDummyClick}><i className="fa-brands fa-vimeo-v"></i></a>
<a aria-label="YouTube" className="hover:text-[#0F363E] transition-colors text-sm" href="#" onClick={handleDummyClick}><i className="fa-brands fa-youtube"></i></a>
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
