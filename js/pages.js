const PageTemplates = {
  // Home Page containing the Hero Scroll Stage, Timeline, and Future blueprint
  home: () => {
    // Generate Timeline HTML
    const timelineHTML = CompanyData.timeline.map((item, index) => {
      const iconSVG = PageTemplates.helpers.getIcon(item.icon);
      return `
        <div class="relative flex flex-col md:flex-row items-center justify-between md:odd:flex-row-reverse group my-12 md:my-0 md:h-64">
          <!-- Connector Dot -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-slate-50 bg-[#0077C8] flex items-center justify-center text-white z-10 shadow-lg shadow-[#0077C8]/20 group-hover:scale-110 group-hover:bg-[#0077C8] transition-all duration-300">
            ${iconSVG}
          </div>
          
          <!-- Content Card -->
          <div class="w-full md:w-5/12 p-6 rounded-2xl glass border border-slate-200/80 shadow-md opacity-0 transform translate-y-8 transition-all duration-700 ease-out timeline-card group-hover:border-[#0077C8]/30">
            <span class="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#0077C8] bg-[#0077C8]/10 rounded-full mb-3">${item.tag}</span>
            <span class="block text-3xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-[#003B73] to-[#0077C8] mb-1">${item.year}</span>
            <h3 class="text-xl font-bold text-slate-800 mb-2">${item.title}</h3>
            <p class="text-slate-600 text-sm leading-relaxed">${item.description}</p>
          </div>
          
          <!-- Spacer -->
          <div class="hidden md:block w-5/12"></div>
        </div>
      `;
    }).join("");

    return `
      <!-- Shuffle Hero Section -->
      <section class="w-full min-h-screen flex items-center relative overflow-hidden pt-24 pb-16">
        
        <!-- Gradient overlays - subtle, let dots show through -->
        <div class="absolute top-20 right-10 w-72 h-72 bg-[#0077C8]/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-10 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>

        <div class="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10">
          
          <!-- Left Content -->
          <div class="space-y-6">
            <span class="inline-block px-4 py-1.5 text-[10px] font-bold tracking-widest text-[#0077C8] bg-[#0077C8]/10 border border-[#0077C8]/20 rounded-full uppercase">
              Corporate Showroom
            </span>
            <h1 class="text-4xl md:text-6xl font-extrabold font-display text-slate-900 leading-tight">
              Technoex Trading Corporation
            </h1>
            <p class="text-base md:text-lg text-slate-600 leading-relaxed max-w-lg">
              Authorized distributor for Hitachi, Trident & Uniline. Industrial compressors, dryers, and UPS systems since 2009.
            </p>
            <div class="flex flex-wrap gap-4">
              <a href="#products" class="px-6 py-3 rounded-xl bg-gradient-to-r from-[#003B73] to-[#0077C8] text-white font-semibold text-sm shadow-lg shadow-[#0077C8]/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5 transition-all duration-200">
                Explore Products
              </a>
              <a href="#catalog" class="px-6 py-3 rounded-xl bg-white text-slate-700 font-semibold text-sm border border-slate-200 hover:border-cyan-300 hover:text-[#0077C8] transition-all duration-200">
                Download Catalog
              </a>
            </div>
          </div>

          <!-- Right Side - Shuffle Grid -->
          <div id="shuffle-grid" class="grid h-[420px] gap-1.5 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50" style="grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(4, 1fr);"></div>

        </div>
      </section>

      <!-- Company Profile Details Section -->
      <section class="pt-6 pb-2 px-6 bg-white/50 backdrop-blur-sm border-y border-slate-200/60 relative z-10">
        <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 relative z-10">
          <a class="card1" href="#">
            <h3 class="text-lg font-bold text-slate-800 mb-1">${CompanyData.profile.location}</h3>
            <p class="small">HQ Location</p>
            <div class="go-corner">
              <div class="go-arrow">→</div>
            </div>
          </a>
          <a class="card1" href="#">
            <h3 class="text-lg font-bold text-slate-800 mb-1">${CompanyData.profile.established}</h3>
            <p class="small">Operations Since</p>
            <div class="go-corner">
              <div class="go-arrow">→</div>
            </div>
          </a>
          <a class="card1" href="#">
            <h3 class="text-lg font-bold text-slate-800 mb-1">${CompanyData.profile.employees} Employees</h3>
            <p class="small">Team Size</p>
            <div class="go-corner">
              <div class="go-arrow">→</div>
            </div>
          </a>
          <a class="card1" href="#">
            <h3 class="text-lg font-bold text-slate-800 mb-1">${CompanyData.profile.turnover}</h3>
            <p class="small">Annual Turnover</p>
            <div class="go-corner">
              <div class="go-arrow">→</div>
            </div>
          </a>
        </div>
      </section>

      <!-- Masonry Gallery Section -->
      <section class="py-24 px-6 relative z-10 bg-gradient-to-b from-slate-50/80 to-white/50 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto relative z-10">
          <div class="text-center mb-12">
            <span class="inline-block px-4 py-1.5 text-[10px] font-bold tracking-widest text-[#0077C8] bg-[#0077C8]/10 border border-[#0077C8]/20 rounded-full uppercase mb-4">Our Products</span>
            <h2 class="text-3xl md:text-4xl font-bold font-display text-slate-950 mb-3">Product Showcase</h2>
            <p class="text-slate-500 max-w-2xl mx-auto text-sm">
              Explore our range of industrial compressors, dryers, and UPS systems.
            </p>
          </div>
          <div id="masonry-root" class="w-full"></div>
        </div>
      </section>

      <!-- Timeline Section (Transparent background) -->
      <section class="py-24 px-6 relative z-10 bg-transparent border-b border-slate-200/60">
        <div class="max-w-6xl mx-auto relative z-10">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold font-display text-slate-950 mb-3">Our History</h2>
            <p class="text-slate-500 max-w-2xl mx-auto text-sm">
              Supporting Indian manufacturing with specialized compressors, dryers, and backup systems since 2009.
            </p>
          </div>
          
          <div class="relative min-h-[500px]">
            <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-indigo-500/10 via-[#0077C8] to-violet-500/10 h-full rounded-full"></div>
            <div class="flex flex-col gap-12 md:gap-24">
              ${timelineHTML}
            </div>
          </div>
        </div>
      </section>

      <!-- Future Blueprint (Semi-transparent Glass) -->
      <section class="py-24 px-6 relative z-10 bg-gradient-to-b from-slate-100 to-white">
        <div class="max-w-6xl mx-auto relative z-10 mb-12">
          <div class="text-center">
            <span class="inline-block px-4 py-1.5 text-[10px] font-bold tracking-widest text-[#0077C8] bg-[#0077C8]/10 border border-[#0077C8]/20 rounded-full uppercase mb-4">Trusted Partners</span>
            <h2 class="text-3xl md:text-4xl font-bold font-display text-slate-950 mb-3">Our Brand Partners</h2>
            <p class="text-slate-500 max-w-2xl mx-auto text-sm">
              Authorized distributor for leading industrial automation brands.
            </p>
          </div>
          <div id="logo-loop-root"></div>
        </div>
      </section>
    `;
  },

  // Product Range Page
  products: () => {
    return `
      <section class="py-16 px-6 max-w-7xl mx-auto relative z-10 min-h-[80vh] animate-fade-in-up">
        <div class="relative z-10">
          <div class="text-center mb-12 mt-6">
            <h1 class="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-3">Product Inventory</h1>
            <p class="text-slate-500 max-w-2xl mx-auto text-sm">
              Explore our complete portfolio. Authorized partner for: <strong class="text-[#0077C8]">Hitachi, Trident, Uniline, Hitachi Hi-Rel</strong>.
            </p>
          </div>

          <!-- Search & Filter Controls -->
          <div class="glass p-4 rounded-2xl mb-12 flex flex-col lg:flex-row justify-between items-center gap-4 shadow-sm">
            <!-- Search input -->
            <div class="relative w-full lg:max-w-xs">
              <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </span>
              <input 
                type="text" 
                id="product-search" 
                placeholder="Search air compressors, dryers..." 
                class="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0077C8] transition-colors text-sm"
              />
            </div>

            <!-- Category filter buttons -->
            <div class="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
              <button class="filter-btn active px-3.5 py-1.5 rounded-lg font-medium text-xs border border-slate-200 transition-all duration-200" data-category="all">All</button>
              <button class="filter-btn px-3.5 py-1.5 rounded-lg font-medium text-xs text-slate-500 border border-transparent hover:text-slate-800 hover:border-slate-200 transition-all duration-200" data-category="compressor">Compressors</button>
              <button class="filter-btn px-3.5 py-1.5 rounded-lg font-medium text-xs text-slate-500 border border-transparent hover:text-slate-800 hover:border-slate-200 transition-all duration-200" data-category="dryer">Dryers</button>
              <button class="filter-btn px-3.5 py-1.5 rounded-lg font-medium text-xs text-slate-500 border border-transparent hover:text-slate-800 hover:border-slate-200 transition-all duration-200" data-category="ups">UPS Systems</button>
              <button class="filter-btn px-3.5 py-1.5 rounded-lg font-medium text-xs text-slate-500 border border-transparent hover:text-slate-800 hover:border-slate-200 transition-all duration-200" data-category="vacuum">Vacuum Pumps</button>
              <button class="filter-btn px-3.5 py-1.5 rounded-lg font-medium text-xs text-slate-500 border border-transparent hover:text-slate-800 hover:border-slate-200 transition-all duration-200" data-category="stabilizer">Stabilizers</button>
              <button class="filter-btn px-3.5 py-1.5 rounded-lg font-medium text-xs text-slate-500 border border-transparent hover:text-slate-800 hover:border-slate-200 transition-all duration-200" data-category="accessories">Accessories</button>
              <button class="filter-btn px-3.5 py-1.5 rounded-lg font-medium text-xs text-slate-500 border border-transparent hover:text-slate-800 hover:border-slate-200 transition-all duration-200" data-category="services">Services</button>
            </div>
          </div>

          <!-- Product Grid -->
          <div id="product-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Dynamically populated -->
          </div>
        </div>
      </section>

      <!-- Detailed product modal overlay -->
      <div id="product-modal" class="fixed inset-0 bg-slate-950/65 backdrop-blur-sm flex items-center justify-center z-50 p-4 pt-20 opacity-0 pointer-events-none transition-all duration-300">
        <div class="relative bg-white border border-slate-200 w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl scale-95 transition-all duration-300 max-h-[90vh] flex flex-col modal-content">
          <button id="modal-close" class="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div id="modal-content-body" class="overflow-y-auto p-6 md:p-8 flex flex-col md:flex-row gap-6 text-slate-800">
            <!-- Modal details dynamic render -->
          </div>
        </div>
      </div>
    `;
  },

  // Terms & Conditions Page
  terms: () => {
    const terms = [
      {
        id: "legal-scope",
        title: "1. Trading & Distribution Licensing",
        content: "All logistics, warehousing, distributions, and pricing details offered by Technoex Trading Corporation Pvt. Ltd. are regulated by local laws in Faridabad, Haryana. We operate as authorized partners for Hitachi, Trident, and Uniline. Product modifications or third-party service voids the respective manufacturer warranties."
      },
      {
        id: "technical-warranties",
        title: "2. Equipment Warranties & Spares",
        content: "Warranties on Screw Compressors, Online UPS systems, and Desiccant Air Dryers are subject to respective OEM parameters (e.g. Hitachi Hi-Rel standard warranty layouts). Support is valid only when using authentic parts and filters supplied by Technoex and configured by certified technicians."
      },
      {
        id: "service-slas",
        title: "3. Annual Maintenance Agreements (AMCs)",
        content: "Our Service contracts outline response times, scheduling limits, and pricing grids. Preventive maintenance checkups are scheduled in advance, and emergency troubleshooting requests are prioritized within 24 hours of notification in the Haryana/NCR industrial zones."
      },
      {
        id: "limitation-liability",
        title: "4. Industrial Operational Liabilities",
        content: "Technoex Trading Corporation shall not be held liable for mechanical plant shutdowns, factory delays, raw materials spoilage, or commercial profit drops that occur due to component wear or compressor cycle limits."
      }
    ];

    const termsHTML = terms.map(term => `
      <div class="border border-slate-200 rounded-xl overflow-hidden glass-light transition-colors hover:border-slate-300 mb-4">
        <button 
          class="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none select-none text-slate-800 hover:text-[#0077C8] font-semibold text-base transition-colors group"
          onclick="PageTemplates.handlers.toggleAccordion('${term.id}')"
        >
          <span>${term.title}</span>
          <svg id="icon-${term.id}" class="w-4 h-4 text-slate-400 group-hover:text-[#0077C8] transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div id="content-${term.id}" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out bg-slate-100/10">
          <p class="px-5 pb-5 pt-1.5 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
            ${term.content}
          </p>
        </div>
      </div>
    `).join("");

    return `
      <section class="py-16 px-6 max-w-3xl mx-auto relative z-10 min-h-[80vh] animate-fade-in-up">
        <div class="relative z-10">
          <div class="text-center mb-12 mt-6">
            <h1 class="text-4xl md:text-5xl font-bold font-display text-slate-950 mb-3">Terms & Policies</h1>
            <p class="text-slate-500 max-w-xl mx-auto text-sm">
              Read through our primary distributor agreements, AMC structures, warranties, and service level guidelines.
            </p>
          </div>
          <div>
            ${termsHTML}
          </div>
        </div>
      </section>
    `;
  },

  // Catalog Download Page
  catalog: () => {
    return `
      <section class="py-16 px-6 max-w-5xl mx-auto relative z-10 min-h-[80vh] flex flex-col justify-center animate-fade-in-up">
        <div class="relative z-10">
          <div class="text-center mb-12 mt-6">
            <h1 class="text-4xl md:text-5xl font-bold font-display text-slate-950 mb-3">Technical Catalog</h1>
            <p class="text-slate-500 max-w-xl mx-auto text-sm">
              Download our complete engineering catalog including sizing charts, layouts, electrical parameters, and specifications.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/70 rounded-2xl border border-slate-200/80 p-6 md:p-8 glass shadow-md">
            
            <!-- Book Cover Catalog -->
            <div class="md:col-span-5 flex justify-center py-4">
              <div class="relative w-52 h-64 bg-gradient-to-br from-[#003B73] via-[#001a3a] to-slate-900 rounded-xl shadow-lg border border-[#0077C8]/20 p-5 flex flex-col justify-between overflow-hidden group select-none">
                <div class="absolute -right-10 -top-10 w-24 h-24 rounded-full bg-white/10 blur-lg"></div>
                <div class="relative z-10">
                  <div class="flex justify-between items-start mb-4">
                    <span class="text-[9px] font-bold tracking-widest text-[#b0e0ff] uppercase">Product Specifications</span>
                    <span class="text-[9px] bg-[#0077C8]/30 text-[#b0e0ff] font-semibold px-2 py-0.5 rounded-full">PDF v${CompanyData.catalog.version}</span>
                  </div>
                  <h3 class="text-lg font-black font-display leading-tight text-white mb-1">TECHNOEX</h3>
                  <p class="text-[9px] text-slate-300 leading-normal">Air Compressors, Dryers, Vacuum Pumps, and UPS Systems.</p>
                </div>

                <div class="relative z-10 flex justify-between items-center border-t border-[#002a52] pt-4">
                  <div>
                    <span class="block text-[8px] text-[#b0e0ff] uppercase">Released</span>
                    <span class="text-xs font-semibold text-slate-200">${CompanyData.catalog.releaseDate}</span>
                  </div>
                  <div class="w-8 h-8 rounded-lg bg-[#0077C8] flex items-center justify-center text-white hover:bg-[#0077C8] transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Download forms details -->
            <div class="md:col-span-7 flex flex-col justify-center">
              <h2 class="text-xl md:text-2xl font-bold text-slate-900 mb-2">Technical Product Guide</h2>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Features detail charts for the <strong class="text-[#0077C8]">Piston Air Compressor</strong>, flow tables for the <strong class="text-[#0077C8]">Trident Dryspell</strong>, electrical load criteria for the <strong class="text-[#0077C8]">Online UPS Cabinet</strong>, and accessories sizing metrics.
              </p>

              <div class="grid grid-cols-3 gap-3 mb-6">
                <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center shadow-inner">
                  <span class="block text-[9px] text-slate-400 uppercase font-semibold">Format</span>
                  <span class="text-xs font-semibold text-slate-700">PDF Document</span>
                </div>
                <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center shadow-inner">
                  <span class="block text-[9px] text-slate-400 uppercase font-semibold">Size</span>
                  <span class="text-xs font-semibold text-slate-700">${CompanyData.catalog.fileSize}</span>
                </div>
                <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center shadow-inner">
                  <span class="block text-[9px] text-slate-400 uppercase font-semibold">Pages</span>
                  <span class="text-xs font-semibold text-slate-700">${CompanyData.catalog.pageCount} Pages</span>
                </div>
              </div>

              <div id="download-panel">
                <form id="download-form" class="space-y-4">
                  <div class="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      id="client-email" 
                      required 
                      placeholder="Enter your email to download" 
                      class="flex-1 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0077C8] transition-colors text-sm shadow-sm"
                    />
                    <button 
                      type="submit" 
                      class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#003B73] to-[#0077C8] text-white font-semibold text-sm hover:shadow-lg hover:shadow-indigo-600/25 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group whitespace-nowrap"
                    >
                      <span>Request PDF</span>
                      <svg class="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                      </svg>
                    </button>
                  </div>
                  <p class="text-[10px] text-slate-400">Upon request, you will receive immediate download authorization. We secure email credentials.</p>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    `;
  },

  // Contact Page
  contact: () => {
    return `
      <section class="py-16 px-6 max-w-6xl mx-auto relative z-10 min-h-[80vh] animate-fade-in-up">
        <div class="relative z-10">
          <div class="text-center mb-12 mt-6">
            <span class="inline-block px-4 py-1.5 text-[10px] font-bold tracking-widest text-[#0077C8] bg-[#0077C8]/10 border border-[#0077C8]/20 rounded-full uppercase mb-4">Get In Touch</span>
            <h1 class="text-4xl md:text-5xl font-bold font-display text-slate-950 mb-3">Contact Us</h1>
            <p class="text-slate-500 max-w-xl mx-auto text-sm">
              Ready to discuss your industrial needs? Reach out to our team for quotes, technical support, or partnership enquiries.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <!-- Contact Form -->
            <div class="glass p-8 rounded-2xl border border-slate-200/80 shadow-md">
              <h2 class="text-xl font-bold text-slate-900 mb-6">Send us a message</h2>
              <form id="contact-form" class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-slate-600 mb-1.5">First Name</label>
                    <input type="text" required placeholder="John" class="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0077C8] transition-colors text-sm" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-600 mb-1.5">Last Name</label>
                    <input type="text" required placeholder="Doe" class="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0077C8] transition-colors text-sm" />
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-600 mb-1.5">Email</label>
                  <input type="email" required placeholder="john@company.com" class="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0077C8] transition-colors text-sm" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-600 mb-1.5">Phone</label>
                  <input type="tel" placeholder="+91 98765 43210" class="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0077C8] transition-colors text-sm" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-600 mb-1.5">Subject</label>
                  <select class="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 focus:outline-none focus:border-[#0077C8] transition-colors text-sm">
                    <option>Request Quote</option>
                    <option>Technical Support</option>
                    <option>Partnership Enquiry</option>
                    <option>Service Request</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-600 mb-1.5">Message</label>
                  <textarea rows="4" required placeholder="Tell us about your requirements..." class="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0077C8] transition-colors text-sm resize-none"></textarea>
                </div>
                <button type="submit" class="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#003B73] to-[#0077C8] text-white font-semibold text-sm shadow-lg shadow-[#0077C8]/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5 transition-all duration-200">
                  Send Message
                </button>
              </form>
            </div>

            <!-- Profile Card -->
            <div class="flex flex-col items-center pt-8">
              <div class="card">
                <button class="mail">
                  <svg class="lucide lucide-mail" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <rect rx="2" y="4" x="2" height="16" width="20"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </button>
                <div class="profile-pic">
                  <img src="assets/Nishtha.png" alt="Profile" />
                </div>
                <div class="bottom">
                  <div class="content">
                    <span class="name">Technoex Trading</span>
                    <span class="about-me">Authorized distributor of industrial automation hardware since 2009.</span>
                  </div>
                  <div class="bottom-bottom">
                    <div class="social-links-container">
                      <svg viewBox="0 0 16 15.999" height="15.999" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path transform="translate(6 598)" d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z" data-name="Subtraction 4" id="Subtraction_4"></path>
                      </svg>
                      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                      </svg>
                      <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                      </svg>
                    </div>
                    <button class="button">Contact Me</button>
                  </div>
                </div>
              </div>

              <!-- Map Section -->
              <div class="mt-8 w-full max-w-sm rounded-2xl overflow-hidden border border-slate-200/80 shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5!2d77.0!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04b0b0b0b0b0%3A0x0!2sNew+Delhi!5e0!3m2!1sen!2sin!4v1234567890" 
                  width="100%" 
                  height="200" 
                  style="border:0;" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Technoex Trading Location">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  helpers: {
    getIcon: (iconName) => {
      const icons = {
        rocket: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
        cpu: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>`,
        globe: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2.945M11.02 18a8.003 8.003 0 01-8.385-6H15a1 1 0 001-1V7a1 1 0 00-1-1h-1.02a8.003 8.003 0 018.386 6H15a1 1 0 00-1 1v3a1 1 0 001 1h2.02M12 2a10 10 0 100 20 10 10 0 000-20z"></path></svg>`,
        leaf: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>`,
        sparkles: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>`,
        compressor: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M2.25 12c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M2.25 12l-3 3m3-3l3-3"></path></svg>`,
        dryer: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v18M3 12h18M12 9a3 3 0 100-6 3 3 0 000 6zm0 12a3 3 0 100-6 3 3 0 000 6z"></path></svg>`,
        ups: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V5.25a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3m-13.5 0v3a3 3 0 003 3h13.5a3 3 0 003-3v-3M9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0h.008v.008h-.008V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg>`,
        vacuum: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 5.25v13.5m-7.5-13.5v13.5M3 9h18M3 15h18"></path></svg>`,
        stabilizer: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg>`,
        services: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.42 15.17L17.25 21A2.67 2.67 0 0021 17.25l-5.83-5.83m-3.75 3.75a3.75 3.75 0 11-5.3-5.3m5.3 5.3l-5.3-5.3m5.3 5.3l-5.83 5.83L2.25 17.25A2.67 2.67 0 006 21l5.83-5.83m0 0a3.75 3.75 0 10-5.3-5.3"></path></svg>`,
        accessories: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.829c.424.35.534.954.26 1.43l-1.297 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.991l-1.004-.829a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.645-.869l.214-1.28z"></path><circle cx="12" cy="12" r="3"></circle></svg>`
      };
      return icons[iconName] || icons.accessories;
    }
  },

  handlers: {
    toggleAccordion: (id) => {
      const content = document.getElementById(`content-${id}`);
      const icon = document.getElementById(`icon-${id}`);
      if (!content || !icon) return;

      const isCollapsed = content.style.maxHeight === "0px" || !content.style.maxHeight;

      document.querySelectorAll('[id^="content-"]').forEach(el => el.style.maxHeight = "0px");
      document.querySelectorAll('[id^="icon-"]').forEach(el => el.style.transform = "rotate(0deg)");

      if (isCollapsed) {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
        icon.classList.add("text-[#0077C8]");
      } else {
        content.style.maxHeight = "0px";
        icon.style.transform = "rotate(0deg)";
        icon.classList.remove("text-[#0077C8]");
      }
    },

    // Populate products list dynamically
    renderProducts: (searchQuery = "", categoryFilter = "all") => {
      const grid = document.getElementById("product-grid");
      if (!grid) return;

      const filtered = CompanyData.products.filter(prod => {
        let matchesCategory = false;
        const prodCat = prod.category.toLowerCase();
        
        if (categoryFilter === "all") {
          matchesCategory = true;
        } else if (categoryFilter === "compressor") {
          matchesCategory = prodCat.includes("compressor");
        } else if (categoryFilter === "dryer") {
          matchesCategory = prodCat.includes("dryer");
        } else if (categoryFilter === "ups") {
          matchesCategory = prodCat.includes("ups");
        } else if (categoryFilter === "vacuum") {
          matchesCategory = prodCat.includes("vacuum");
        } else if (categoryFilter === "stabilizer") {
          matchesCategory = prodCat.includes("stabilizer");
        } else if (categoryFilter === "accessories") {
          matchesCategory = prodCat.includes("accessories");
        } else if (categoryFilter === "services") {
          matchesCategory = prodCat.includes("services");
        }

        const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             prod.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             prod.brand.toLowerCase().includes(searchQuery.toLowerCase());
                             
        return matchesCategory && matchesSearch;
      });

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full py-16 text-center">
            <svg class="w-12 h-12 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p class="text-slate-400 font-medium text-sm">No products match your search details.</p>
          </div>
        `;
        return;
      }

      grid.innerHTML = filtered.map(prod => {
        const productImage = prod.image || 'assets/CompPro1.jpg';

        return `
          <div class="glass p-5 rounded-2xl flex flex-col justify-between hover:border-[#0077C8]/35 hover:shadow-md transition-all duration-300 group cursor-pointer" onclick="PageTemplates.handlers.openProductModal('${prod.id}')">
            <div>
              <div class="w-full h-48 rounded-xl overflow-hidden mb-4 bg-white border border-slate-100 flex items-center justify-center p-2">
                <img src="${productImage}" alt="${prod.name}" class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-bold tracking-wider px-2.5 py-0.5 bg-[#0077C8]/10 border border-[#0077C8]/20 rounded-full text-[#0077C8]">${prod.brand}</span>
                <span class="text-[10px] font-semibold text-slate-400">${prod.category}</span>
              </div>
              <h3 class="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-[#0077C8] transition-colors">${prod.name}</h3>
              <p class="text-slate-500 text-xs leading-relaxed">${prod.shortDescription}</p>
            </div>
            
            <div class="pt-3 border-t border-slate-100 mt-auto">
              <span class="text-xs font-bold text-[#0077C8]">${prod.price}</span>
            </div>
          </div>
        `;
      }).join("");
    },

    openProductModal: (prodId) => {
      const prod = CompanyData.products.find(p => p.id === prodId);
      if (!prod) return;

      const modal = document.getElementById("product-modal");
      const body = document.getElementById("modal-content-body");
      if (!modal || !body) return;

      const productImage = prod.image || 'assets/CompPro1.jpg';
      
      const specList = prod.specifications.map(spec => `
        <li class="flex items-start gap-2 text-slate-600 text-xs">
          <svg class="w-3.5 h-3.5 text-[#0077C8] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>${spec}</span>
        </li>
      `).join("");

      const featureList = prod.features.map(feat => `
        <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
          <span class="text-[9px] font-bold text-[#0077C8] block mb-0.5">Parameters</span>
          <span class="text-xs text-slate-500">${feat}</span>
        </div>
      `).join("");

      body.innerHTML = `
        <div class="md:w-1/2 flex flex-col text-slate-800 p-6">
          <div>
            <div class="w-full h-64 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 p-4">
              <img src="${productImage}" alt="${prod.name}" class="max-w-full max-h-full object-contain" />
            </div>
            <span class="inline-block px-2.5 py-0.5 text-[9px] font-bold tracking-wider text-[#0077C8] bg-[#0077C8]/10 rounded-full mb-2 uppercase">${prod.brand}</span>
            <h2 class="text-xl font-bold text-slate-900 leading-tight mb-2">${prod.name}</h2>
            <p class="text-slate-500 text-xs leading-relaxed">${prod.shortDescription}</p>
          </div>
          <div class="mt-auto pt-6">
            <span class="block text-[9px] text-slate-400 uppercase font-semibold mb-1">Pricing Status</span>
            <span class="text-lg font-bold text-[#0077C8] mb-4 block">${prod.price}</span>
            <a href="mailto:support@technoex.com" class="request-quote-btn">
              Request Quote
            </a>
          </div>
        </div>

        <div class="md:w-1/2 flex flex-col gap-4 p-6">
          <div>
            <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">
              Technical Specifications
            </h3>
            <ul class="space-y-2.5 bg-slate-50 p-5 rounded-xl border border-slate-200">
              ${specList}
            </ul>
          </div>
          
          <div>
            <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">
              Operating Layout
            </h3>
            <div class="grid grid-cols-1 gap-2.5">
              ${featureList}
            </div>
          </div>

          <div class="mt-auto pt-5">
            <a href="mailto:support@technoex.com" class="enquiry-btn">
              Enquiry Now
            </a>
          </div>
        </div>
      `;

      modal.classList.remove("opacity-0", "pointer-events-none");
      setTimeout(() => {
        modal.querySelector(".relative").classList.remove("scale-95");
      }, 50);

      document.body.classList.add("scroll-lock");
    },

    closeProductModal: () => {
      const modal = document.getElementById("product-modal");
      if (!modal) return;

      modal.querySelector(".relative").classList.add("scale-95");
      modal.classList.add("opacity-0", "pointer-events-none");
      
      document.body.classList.remove("scroll-lock");
    },

    setupCatalogDownload: () => {
      const form = document.getElementById("download-form");
      const panel = document.getElementById("download-panel");
      if (!form || !panel) return;

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("client-email").value;
        if (!email) return;

        panel.innerHTML = `
          <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 animate-fade-in-up">
            <div class="flex justify-between items-center mb-2">
              <span class="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-[#0077C8] animate-spin" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Assembling specifications sheets...
              </span>
              <span id="download-percent" class="text-xs font-bold text-[#0077C8]">0%</span>
            </div>
            
            <div class="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden p-[1px] mb-3">
              <div id="download-progress-bar" class="h-full bg-gradient-to-r from-[#003B73] via-indigo-500 to-[#0077C8] rounded-full transition-all duration-100 ease-out" style="width: 0%"></div>
            </div>
            <p class="text-[10px] text-slate-400">Securing file package for: <span class="text-slate-600 font-semibold">${email}</span></p>
          </div>
        `;

        const progressBar = document.getElementById("download-progress-bar");
        const percentText = document.getElementById("download-percent");
        
        let progress = 0;
        const interval = setInterval(() => {
          progress += Math.floor(Math.random() * 8) + 6;
          if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            setTimeout(() => {
              panel.innerHTML = `
                <div class="bg-indigo-50/50 p-5 rounded-xl border border-indigo-200 text-center animate-fade-in-up">
                  <div class="w-9 h-9 rounded-full bg-[#0077C8]/10 border border-indigo-200 flex items-center justify-center mx-auto mb-3 text-[#0077C8]">
                    <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 class="text-base font-bold text-slate-900 mb-0.5">Authorization Granted!</h3>
                  <p class="text-slate-500 text-xs mb-3">The file <strong>${CompanyData.catalog.filename}</strong> has downloaded.</p>
                  <button 
                    onclick="PageTemplates.handlers.resetCatalogDownload()" 
                    class="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs transition-colors"
                  >
                    Request Again
                  </button>
                </div>
              `;

              const dummyAnchor = document.createElement("a");
              dummyAnchor.href = "assets/catalog.pdf";
              dummyAnchor.download = CompanyData.catalog.filename;
              document.body.appendChild(dummyAnchor);
              dummyAnchor.click();
              document.body.removeChild(dummyAnchor);
            }, 400);
          }

          if (progressBar) progressBar.style.width = `${progress}%`;
          if (percentText) percentText.innerText = `${progress}%`;
        }, 80);
      });
    },

    resetCatalogDownload: () => {
      const panel = document.getElementById("download-panel");
      if (panel) {
        panel.outerHTML = `
          <div id="download-panel">
            <form id="download-form" class="space-y-4">
              <div class="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  id="client-email" 
                  required 
                  placeholder="Enter your email to download" 
                  class="flex-1 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0077C8] transition-colors text-sm shadow-sm"
                />
                <button 
                  type="submit" 
                  class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#003B73] to-[#0077C8] text-white font-semibold text-sm hover:shadow-lg hover:shadow-indigo-600/25 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group whitespace-nowrap"
                >
                  <span>Request PDF</span>
                  <svg class="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </button>
              </div>
              <p class="text-[10px] text-slate-400">Upon request, you will receive immediate download authorization. We secure email credentials.</p>
            </form>
          </div>
        `;
        PageTemplates.handlers.setupCatalogDownload();
      }
    }
  }
};

window.PageTemplates = PageTemplates;
window.PageTemplates.handlers.toggleAccordion = PageTemplates.handlers.toggleAccordion;
window.PageTemplates.handlers.openProductModal = PageTemplates.handlers.openProductModal;
window.PageTemplates.handlers.closeProductModal = PageTemplates.handlers.closeProductModal;
window.PageTemplates.handlers.resetCatalogDownload = PageTemplates.handlers.resetCatalogDownload;
