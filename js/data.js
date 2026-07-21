const CompanyData = {
  web3formsKey: "ff19b5f5-1053-4490-9e98-7c1e602ef46d", // Get free key from https://web3forms.com
  leadEmail: "technoex.sales@gmail.com",
  profile: {
    name: "Technoex Trading Corporation Pvt. Ltd.",
    shortName: "Technoex Trading",
    established: "2009",
    location: "Faridabad, Haryana",
    turnover: "₹5-25 Cr",
    employees: "26-50",
    brands: ["Hitachi", "Technoex", "Trident", "Uniline", "Hitachi Hi-Rel"]
  },
  
  // Showcase products for the Hero Scroll Pedestal Stage
  showcase: [
    {
      id: "v-series-pump",
      name: "V Series Vacuum Pump",
      brand: "Technoex",
      category: "Vacuum Pump",
      tagline: "Powerful Industrial Vacuum Extraction",
      description: "Heavy-duty horizontal vacuum tank with motor and twin cylinder block, designed for packaging and suction grids.",
      specifications: [
        "Dual cylinder suction block",
        "High volumetric efficiency",
        "ASME coded vacuum receiver",
        "Direct belt safety cage"
      ],
      image: "assets/v_series_vacuum_pump.png"
    },
    {
      id: "piston-compressor",
      name: "Piston Air Compressor",
      brand: "Technoex",
      category: "Air Compressor",
      tagline: "Heavy-Duty Reciprocating Compressor",
      description: "Designed for small-to-medium paint booths and automotive garages, featuring low maintenance and high pressure resilience.",
      specifications: [
        "Tested & Certified assembly",
        "Double piston head unit",
        "Quiet belt-drive operation",
        "Automatic pressure switch control"
      ],
      image: "assets/piston_air_compressor.png"
    },
    {
      id: "m-series-compressor",
      name: "M Series Air Compressor",
      brand: "Technoex",
      category: "Air Compressor",
      tagline: "High Efficiency Screw Compression",
      description: "Designed in Japan and assembled in India. Horizontal tank-mounted screw compressor with a pre-wired electrical control cabinet.",
      specifications: [
        "Built-in electric control panel",
        "Japanese technology integration",
        "Continuous 24/7 duty cycle",
        "Quiet rotary screw block"
      ],
      image: "assets/m_series_air_compressor.png"
    },
    {
      id: "coldspell-dryer",
      name: "Trident Coldspell Air Dryer",
      brand: "Trident",
      category: "Air Dryer",
      tagline: "Refrigerated Moisture Purge System",
      description: "Cabinet-style refrigeration air dryer engineered to condense and purge moisture from industrial compressed air.",
      specifications: [
        "Constant 3°C dew point",
        "Tested OK quality badge",
        "R134a eco-friendly refrigerant",
        "Intelligent timed auto drain"
      ],
      image: "assets/trident_coldspell_air_dryer.png"
    }
  ],

  timeline: [
    {
      year: "2009",
      title: "The Foundation",
      description: "Technoex Trading Corporation began its journey in Faridabad, Haryana, as a dedicated distributor of industrial air solutions and auxiliary equipment.",
      tag: "Establishment",
      icon: "rocket"
    },
    {
      year: "2014",
      title: "Trident & Filtration Tie-up",
      description: "Became the official partner for Trident Dryspell Dryers, expanding our capabilities into desiccant air treatment and filtration networks.",
      tag: "Partnership",
      icon: "cpu"
    },
    {
      year: "2018",
      title: "Hitachi Hi-Rel Power Alliance",
      description: "Partnered with Hitachi Hi-Rel & Uniline to supply online UPS and Servo Voltage Stabilizers, providing comprehensive power + air portfolios.",
      tag: "Expansion",
      icon: "globe"
    },
    {
      year: "2022",
      title: "Turnover & Scale Milestone",
      description: "Surpassed ₹15 Crore in annual turnover. Expanded our core operations team to 40+ engineering personnel managing 500+ corporate clients.",
      tag: "Scaling",
      icon: "leaf"
    },
    {
      year: "2026",
      title: "Next-Gen Service Infrastructure",
      description: "Integrated online client tracking, predictive machine maintenance consultancy, and modern piping modules for immediate field support.",
      tag: "Innovation",
      icon: "sparkles"
    }
  ],

  products: [
    // 1. Air Compressors
    { id: "comp-1", name: "Piston Air Compressor", category: "Air Compressor", shortDescription: "Heavy-duty industrial reciprocating piston compressor.", brand: "Technoex", price: "Request Quote", image: "assets/Piston Air Compressor.png", specifications: ["Highly durable cast iron cylinders", "Automated pressure switch cutoff", "Suitable for small-to-medium workshops"], features: ["Low running speeds", "Inter-stage finned coolers", "Large oil reservoir capacity"] },
    { id: "comp-2", name: "Hitachi Oil Free Compressor", category: "Air Compressor", shortDescription: "Genuine Hitachi oil-free compressor for pure clean air.", brand: "Hitachi", price: "Request Quote", image: "assets/Hitachi Oil Free Compressor.jpeg", specifications: ["100% oil-free compression cycle", "Corrosion resistant tank lining", "Ultra quiet acoustic enclosure options"], features: ["Patented tooth-rotor technology", "Continuous load rating", "Minimum power losses"] },
    { id: "comp-3", name: "Industrial Air Compressor", category: "Air Compressor", shortDescription: "Reliable medium-pressure compressor for plant installations.", brand: "Technoex", price: "Request Quote", image: "assets/Prodcut3.png", specifications: ["Designed for 24/7 continuous operation", "Dual belt-drive system", "Vibration isolator mounts"], features: ["High volume delivery", "Easy filter access", "Thermal overload protection"] },
    { id: "comp-4", name: "Reciprocating Air Compressor", category: "Air Compressor", shortDescription: "Multi-stage compression piston block for high pressures.", brand: "Technoex", price: "Request Quote", image: "assets/Prodcut4.png", specifications: ["Splash lubricated compressor pump", "Heavy duty intake air filters", "ASME coded air receiver tanks"], features: ["Excellent cooling fins", "Low noise valves", "Long maintenance loops"] },
    { id: "comp-5", name: "Oil Free Screw Compressor", category: "Air Compressor", shortDescription: "Flagship Hitachi/Technoex screw compressor.", brand: "Hitachi / Technoex", price: "Request Quote", image: "assets/Oil Free Compressor.png", specifications: ["Class 0 quality dry compressed air", "Variable frequency speed regulation", "Touch panel control monitor"], features: ["No oil carryover guarantee", "Optimized rotor cooling jacket", "High air delivery per kW"] },
    { id: "comp-6", name: "Lubricated Piston / Screw Compressor", category: "Air Compressor", shortDescription: "Versatile lubricated screw compressor for general machinery.", brand: "Technoex", price: "Request Quote", image: "assets/prodcut6.png", specifications: ["Integrated oil separation filters", "Thermostatically controlled fan", "Compact floor design footprint"], features: ["High durability", "Low oil consumption rates", "Long bearing lifespans"] },
    { id: "comp-7", name: "Mini Oil Free Air Compressors", category: "Air Compressor", shortDescription: "Compact oil-free units for labs and medical devices.", brand: "Technoex", price: "Request Quote", image: "assets/Dental air compressor.png", specifications: ["Ultra-portable construction", "PTFE piston ring design", "Maintenance free operation"], features: ["Low vibration", "Instant startup", "Direct drive assembly"] },
    { id: "comp-8", name: "Portable Oil-free Compressor", category: "Air Compressor", shortDescription: "Wheel-mounted oil-free compressor for site applications.", brand: "Technoex", price: "Request Quote", image: "assets/Portable Oil-free Compressor.jpeg", specifications: ["Rugged handle and steel wheels", "Dual exit regulator taps", "Quiet induction motor drive"], features: ["Easy transport", "No oil leaks on job sites", "Heavy duty cord wrapper"] },
    { id: "comp-9", name: "Scroll Air Compressor", category: "Air Compressor", shortDescription: "Quiet orbiting scroll compressor for absolute continuous air.", brand: "Technoex", price: "Request Quote", image: "assets/Oil Free Scroll Air Compressor.png", specifications: ["Frictionless orbiting scroll scroll wraps", "Low mechanical sound level (<50 dB)", "Compact cabinet design"], features: ["Very few moving parts", "100% duty cycle rating", "Clean, dry discharge air"] },
    { id: "comp-10", name: "H-Series Piston Air Compressor", category: "Air Compressor", shortDescription: "High-pressure piston compressor for industrial molding.", brand: "Technoex", price: "Request Quote", image: "assets/CompPro1.jpg", specifications: ["Reinforced crankshaft assemblies", "Water-cooled cylinder sleeves", "Automatic unloading startup"], features: ["Designed for high output pressure", "Heavy-gauge steel base", "Dual safety check valves"] },
    
    // 2. UPS Systems
    { id: "ups-1", name: "Hitachi Hi-Rel Online UPS", category: "UPS System", shortDescription: "Premium Hitachi double-conversion enterprise online UPS.", brand: "Hitachi Hi-Rel", price: "Request Quote", image: "assets/Hitachi Hi-Rel Online UPS.png", specifications: ["Double conversion online topology", "Input THDi < 3%", "Wide input voltage windows"], features: ["Hot-swappable battery cabinets", "Active power factor correction", "Intelligent SNMP monitoring card"] },
    { id: "ups-2", name: "Uniline Online UPS", category: "UPS System", shortDescription: "Reliable commercial online UPS from Uniline.", brand: "Uniline", price: "Request Quote", image: "assets/Uniline Online UPS.jpeg", specifications: ["DSP control design", "High output power factor (0.9)", "Built-in static bypass switch"], features: ["Cold start capability", "Smart battery charger layout", "LCD dashboard monitor"] },
    { id: "ups-3", name: "UPS Repair and Service", category: "Services", shortDescription: "On-site repair, battery load testing, and AMC for industrial UPS.", brand: "Technoex Support", price: "Enquire Now", image: "assets/UPS Repair and Service.png", specifications: ["Qualified power engineers", "Genuine OEM spare parts", "24/7 breakdown call assistance"], features: ["Battery health reports", "Inverter calibration testing", "Temporary rental system support"] },
    
    // 3. Dryers & Filters
    { id: "dryer-1", name: "Trident Dryspell Heatless Dryer", category: "Air Dryer", shortDescription: "Standard Trident desiccant twin-tower dryer.", brand: "Trident", price: "Request Quote", image: "assets/Trident Dryspell Heatless Dryer.png", specifications: ["Stable -40°C pressure dew point", "Activated alumina desiccant", "Coalescing pre-filter pre-fitted"], features: ["Microprocessor based timers", "Low purge air losses", "Heavy duty shuttle valves"] },
    { id: "dryer-2", name: "Trident Coldspell Air Dryer", category: "Air Dryer", shortDescription: "Refrigerant type air dryer for standard applications.", brand: "Trident", price: "Request Quote", image: "assets/Coldspell Air Dryer.png", specifications: ["Constant 3°C pressure dew point", "R134a eco-friendly refrigerant", "Stainless steel heat exchanger"], features: ["Low power compressor drive", "Automatic drain control timer", "Digital temperature display"] },
    { id: "dryer-3", name: "Refrigerated Air Dryer (Additional)", category: "Air Dryer", shortDescription: "High-temperature refrigeration air dryer.", brand: "Technoex", price: "Request Quote", image: "assets/Refrigerated Air Dryer (Additional).png", specifications: ["Handles high inlet temperatures", "Integral water separators", "Anti-freezing thermostat regulator"], features: ["Compact size", "Easy piping connections", "Eco-safe refrigerant coils"] },
    { id: "dryer-4", name: "Line Filters & Drain Valves", category: "Accessories", shortDescription: "Coalescing line filters and timed auto drain valves.", brand: "Trident", price: "Request Quote", image: "assets/Line Filters & Drain Valves.png", specifications: ["Filtration down to 0.01 micron", "Zero air-loss auto drain", "Heavy duty filter indicator gauges"], features: ["Aluminum diecast housing", "Quick release elements", "Solenoid controlled purge loops"] },
    
    // 4. Vacuum Systems
    { id: "vac-1", name: "Rotary Vane Vacuum Pump", category: "Vacuum Pump", shortDescription: "High-grade industrial oil-lubricated vacuum pump.", brand: "Technoex", price: "Request Quote", image: "assets/Rotary Vane Vacuum Pump.png", specifications: ["Ultimate vacuum down to 0.1 mbar", "Built-in anti-suckback valves", "Integral exhaust mist filter"], features: ["Direct drive motor setup", "Low operating temperatures", "High water vapor tolerance"] },
    { id: "vac-2", name: "Lubricated Piston Vacuum Pump", category: "Vacuum Pump", shortDescription: "Reciprocating vacuum pump for medical and packing.", brand: "Technoex", price: "Request Quote", image: "assets/Lubricated Piston Vacuum Pump.png", specifications: ["Heavy duty piston rings", "Vibration dampening sub-base", "Low rotational speeds"], features: ["Very high durability", "Suitable for dusty conditions", "Easy valve service access"] },
    
    // 5. Stabilizers
    { id: "stab-1", name: "Servo Voltage Stabilizer (Uniline)", category: "Voltage Stabilizer", shortDescription: "Three-phase servo stabilizer for industrial machinery protection.", brand: "Uniline", price: "Request Quote", image: "assets/Servo Voltage Stabilizer (Uniline).jpeg", specifications: ["Balanced/Unbalanced input control", "98% Efficiency factor", "Voltage correction rate 35V/sec"], features: ["Microcontroller servo motor drive", "Over/Under voltage cutoff protection", "Heavy copper wound variacs"] },
    
    // 6. Piping & Modules
    { id: "pipe-1", name: "PPR Pipeline Systems", category: "Accessories", shortDescription: "Fusion welded PPR pipeline loops for air distribution.", brand: "Technoex", price: "Enquire Now", image: "assets/PPR Pipeline Systems.jpeg", specifications: ["PN20 Pressure rated pipes", "Leak-free fusion welded jointing", "Zero corrosion scaling guarantee"], features: ["Low friction pressure drop", "Extremely fast assembly setup", "Chemical resistance"] },
    { id: "pipe-2", name: "SS Piping Modular (304 / 316)", category: "Accessories", shortDescription: "Press-fit stainless steel modular piping grids.", brand: "Technoex", price: "Enquire Now", image: "assets/SS Piping Modular (304  316).png", specifications: ["Grade 304 or 316 stainless steel", "Double O-ring secure press joints", "Rated up to 16 bar air pressure"], features: ["Superb aesthetic styling", "Extremely lightweight structure", "Zero contamination for food/labs"] },
    { id: "panel-1", name: "Gas Purification & Control Panels", category: "Accessories", shortDescription: "Custom control panels for Nitrogen, Air and Special Gases.", brand: "Technoex", price: "Request Quote", image: "assets/Gas Purification & Control Panels.png", specifications: ["Microprocessor gas sensors pre-fitted", "Pneumatic valve sequencing loops", "Wall or stand mounting cabinets"], features: ["Solenoid distribution matrix", "High visibility touch screens", "Audio-visual hazard alarms"] }
  ],

  services: [
    { title: "Installation & Commissioning", description: "Complete turnkey deployment including PPR/SS piping layout, compressor positioning, electrical hookups, and startup flow optimization." },
    { title: "Preventive Maintenance & AMC", description: "Structured Annual Maintenance Contracts with monthly engineering checkups, sensor calibrations, filter replacements, and log analysis." },
    { title: "Repairs & Troubleshooting", description: "Emergency breakdown repair services for screw compressors, desiccant air dryers, online UPS systems, and vacuum chambers." },
    { title: "Spare Parts Support", description: "Stocking genuine air filter elements, separator cartridges, desiccant charges, solenoid rebuild kits, and backup UPS batteries." },
    { title: "Technical Consultation", description: "Engineering air flow audit scans, pipeline drop analyses, power sizing calculators, and system efficiency recommendations." }
  ],

  catalog: {
    filename: "technoex_product_catalog_2026.pdf",
    version: "2026.1",
    fileSize: "6.2 MB",
    pageCount: 48,
    releaseDate: "February 2026"
  },

  catalogs: [
    {
      id: "compressor-catalog",
      title: "Technoex B Series Piston Air Compressor Catalogue",
      subtitle: "Piston, Screw & Oil-Free Compressors",
      description: "Complete specifications for <strong class='text-[#0077C8]'>Technoex B Series Piston Air Compressors</strong> including models, pressure ratings, motor power, and performance curves.",
      filename: "b_series_piston_air_compressor_catalogue.pdf",
      version: "2026.1",
      fileSize: "4.8 MB",
      pageCount: 1,
      releaseDate: "March 2026",
      file: "https://drive.google.com/uc?export=download&id=1GgCGiJNHGAEzit3uY66ugCBvo_r-1awR",
      downloadUrl: "https://drive.google.com/file/d/1GgCGiJNHGAEzit3uY66ugCBvo_r-1awR/view",
      gradient: "from-[#003B73] via-[#001a3a] to-slate-900",
      accent: "#0077C8",
      icon: "compressor"
    },
    {
      id: "dryer-catalog",
      title: "Technoex Screw Compressor Catalog",
      subtitle: "Desiccant, Refrigerated & Filtration",
      description: "Comprehensive technical data for <strong class='text-[#0077C8]'>Technoex Screw Compressor</strong> series including volumetric efficiency, adiabatic horsepower, pressure band configurations, and integrated dryer performance metrics.",
      filename: "screw_compressor_catalog.pdf",
      version: "2026.1",
      fileSize: "3.5 MB",
      pageCount: 4,
      releaseDate: "May 2026",
      file: "https://drive.google.com/uc?export=download&id=1P50hm6rvkfEWEtZEcWYNfApdDLJujDKb",
      downloadUrl: "https://drive.google.com/file/d/1P50hm6rvkfEWEtZEcWYNfApdDLJujDKb/view?usp=drive_link",
      gradient: "from-[#004D40] via-[#00251a] to-slate-900",
      accent: "#00897B",
      icon: "dryer"
    },
    {
      id: "ups-catalog",
      title: "Technoex M-Series Catalogue",
      subtitle: "Online UPS & Servo Stabilizers",
      description: "Full technical specifications for <strong class='text-[#0077C8]'>Technoex M-Series Screw Compressors</strong> including rotor profiles, free air delivery ratings, working pressure ranges, motor configurations, and integrated control panel wiring diagrams.",
      filename: "m_series_catalogue.pdf",
      version: "2026.1",
      fileSize: "79 MB",
      pageCount: 4,
      releaseDate: "July 2026",
      file: "https://drive.google.com/uc?export=download&id=1xIDWxgRk7MZ23TwkRuGlG1aPCK5o4ICe",
      downloadUrl: "https://drive.google.com/file/d/1xIDWxgRk7MZ23TwkRuGlG1aPCK5o4ICe/view?usp=drive_link",
      gradient: "from-[#4A148C] via-[#1a0533] to-slate-900",
      accent: "#7C4DFF",
      icon: "ups"
    },
    {
      id: "vacuum-catalog",
      title: "Technoex Dry Spell Plus Catalogue",
      subtitle: "Rotary Vane & Piston Vacuum Systems",
      description: "Detailed operational data for <strong class='text-[#0077C8]'>Technoex Dry Spell Plus</strong> desiccant air dryers including regeneration cycle times, pressure dew point charts, adsorbent capacity ratings, and purge gas consumption tables.",
      filename: "dry_spell_plus_technoex_catalogue.pdf",
      version: "2026.1",
      fileSize: "3.9 MB",
      pageCount: 2,
      releaseDate: "March 2026",
      file: "https://drive.google.com/uc?export=download&id=1L1UxhlQ7xh_RLniTvvX4RlEMzMzSd-IW",
      downloadUrl: "https://drive.google.com/file/d/1L1UxhlQ7xh_RLniTvvX4RlEMzMzSd-IW/view?usp=drive_link",
      gradient: "from-[#BF360C] via-[#331004] to-slate-900",
      accent: "#FF5722",
      icon: "vacuum"
    },
    {
      id: "piping-catalog",
      title: "Technoex Line Filters Catalogue",
      subtitle: "PPR, SS Piping & Control Panels",
      description: "Complete engineering layouts for <strong class='text-[#0077C8]'>Technoex Line Filters</strong> including PPR pipe sizing charts, SS modular fitting specs, gas control panel schematics, and burst pressure tolerances.",
      filename: "technoex_line_filters_catalogue.pdf",
      version: "2026.1",
      fileSize: "3.2 MB",
      pageCount: 2,
      releaseDate: "July 2026",
      file: "https://drive.google.com/uc?export=download&id=1LfKHBRg-UweRV6ZK2_AVKBA2e38YtBY6",
      downloadUrl: "https://drive.google.com/file/d/1LfKHBRg-UweRV6ZK2_AVKBA2e38YtBY6/view?usp=drive_link",
      gradient: "from-[#E65100] via-[#401700] to-slate-900",
      accent: "#FF9800",
      icon: "accessories"
    },
    {
      id: "coldspell-technoex-catalog",
      title: "Technoex Coldspell Catalogue",
      subtitle: "Refrigerated Air Drying Systems",
      description: "Condenser performance data for <strong class='text-[#0077C8]'>Technoex Coldspell</strong> refrigerated dryers including cooling capacity ratings, ambient temperature envelopes, refrigerant type specifications, and condensate removal efficiency charts.",
      filename: "coldspell_technoex_catalogue.pdf",
      version: "2026.1",
      fileSize: "3.2 MB",
      pageCount: 3,
      releaseDate: "April 2026",
      file: "https://drive.google.com/uc?export=download&id=15At5UqwKFRvJhoIdLEqrbkecXkizOY8B",
      downloadUrl: "https://drive.google.com/file/d/15At5UqwKFRvJhoIdLEqrbkecXkizOY8B/view?usp=drive_link",
      gradient: "from-[#006064] via-[#002f31] to-slate-900",
      accent: "#00ACC1",
      icon: "dryer"
    },
    {
      id: "cs-alpha1-catalog",
      title: "Trident CS-Alpha1 Catalogue",
      subtitle: "Coldspell Alpha Series Compressed Air Dryers",
      description: "Thermal engineering data for <strong class='text-[#0077C8]'>Trident CS-Alpha1</strong> dryers including heat exchanger efficiency, pressure drop profiles, energy consumption benchmarks, and integrated filtration stage specifications.",
      filename: "cs_alpha1_trident.pdf",
      version: "2026.1",
      fileSize: "2.9 MB",
      pageCount: 3,
      releaseDate: "May 2026",
      file: "https://drive.google.com/uc?export=download&id=1ks_eP0Ot5pvFOKyOl0_xsvKu4-Ylr682",
      downloadUrl: "https://drive.google.com/file/d/1ks_eP0Ot5pvFOKyOl0_xsvKu4-Ylr682/view?usp=drive_link",
      gradient: "from-[#00695C] via-[#00251a] to-slate-900",
      accent: "#009688",
      icon: "dryer"
    },
    {
      id: "dryspellplus-15-catalog",
      title: "Trident Dryspell Plus 15 Catalogue",
      subtitle: "High-Capacity Desiccant Drying Systems",
      description: "Adsorption cycle data for <strong class='text-[#0077C8]'>Trident Dryspell Plus 15</strong> desiccant dryers including twin-tower regeneration timing, molecular sieve bed capacity, pressure dew point stability, and purge air consumption metrics.",
      filename: "dryspellplus_15_trident.pdf",
      version: "2026.1",
      fileSize: "3.6 MB",
      pageCount: 4,
      releaseDate: "March 2026",
      file: "https://drive.google.com/uc?export=download&id=1KEKL0bVk2aHsXbQdVgOCLKnOCvnntxTj",
      downloadUrl: "https://drive.google.com/file/d/1KEKL0bVk2aHsXbQdVgOCLKnOCvnntxTj/view?usp=drive_link",
      gradient: "from-[#004D40] via-[#001a15] to-slate-900",
      accent: "#26A69A",
      icon: "dryer"
    },
    {
      id: "hb-series-catalog",
      title: "Technoex H and B Series Catalogue",
      subtitle: "Piston & Reciprocating Compressor Range",
      description: "Reciprocating compressor specifications for <strong class='text-[#0077C8]'>Technoex H and B Series</strong> including cylinder bore dimensions, stroke length data, valve timing diagrams, and interstage pressure measurements.",
      filename: "h_and_b_series_catalogue_technoex.pdf",
      version: "2026.1",
      fileSize: "4.1 MB",
      pageCount: 5,
      releaseDate: "February 2026",
      file: "https://drive.google.com/uc?export=download&id=1Dn6bEQ158MsnedeaxCvdoxBfZetKmID6",
      downloadUrl: "https://drive.google.com/file/d/1Dn6bEQ158MsnedeaxCvdoxBfZetKmID6/view?usp=drive_link",
      gradient: "from-[#003B73] via-[#001a3a] to-slate-900",
      accent: "#0077C8",
      icon: "compressor"
    },
    {
      id: "h-series-catalog",
      title: "Technoex H Series Catalogue",
      subtitle: "Heavy-Duty Horizontal Piston Compressors",
      description: "High-pressure performance data for <strong class='text-[#0077C8]'>Technoex H Series</strong> horizontal piston compressors including crankshaft load analysis, bearing life calculations, vibration tolerance limits, and continuous duty cycle ratings.",
      filename: "h_series_catalogue.pdf",
      version: "2026.1",
      fileSize: "3.8 MB",
      pageCount: 4,
      releaseDate: "January 2026",
      file: "https://drive.google.com/uc?export=download&id=179CEp4Cmvjq4rHnuzY9TS1TKMEgvkTnX",
      downloadUrl: "https://drive.google.com/file/d/179CEp4Cmvjq4rHnuzY9TS1TKMEgvkTnX/view?usp=drive_link",
      gradient: "from-[#1A237E] via-[#070b33] to-slate-900",
      accent: "#304FFE",
      icon: "compressor"
    },
    {
      id: "scroll-compressor-technoex-catalog",
      title: "Technoex Scroll Compressor Catalogue",
      subtitle: "Oil-Free Scroll Compression Technology",
      description: "Scroll element specifications for <strong class='text-[#0077C8]'>Technoex Scroll Compressors</strong> including orbiting scroll geometry, tip seal wear data, fixed-orbiting clearance tolerances, and isentropic efficiency measurements.",
      filename: "scroll_compressor_technoex_catalogue.pdf",
      version: "2026.1",
      fileSize: "3.4 MB",
      pageCount: 4,
      releaseDate: "May 2026",
      file: "https://drive.google.com/uc?export=download&id=1NyEH1yMgDGGMECG0URHg2fi0x1tryGUY",
      downloadUrl: "https://drive.google.com/file/d/1NyEH1yMgDGGMECG0URHg2fi0x1tryGUY/view?usp=drive_link",
      gradient: "from-[#311B92] via-[#0d0638] to-slate-900",
      accent: "#651FFF",
      icon: "compressor"
    },
    {
      id: "servo-stabiliser-catalog",
      title: "Technoex Servo Stabiliser Catalogue",
      subtitle: "Precision Voltage Regulation Systems",
      description: "Voltage correction specifications for <strong class='text-[#0077C8]'>Technoex Servo Stabilisers</strong> including input range tolerances, output regulation accuracy, correction speed ratings, and buck-boost transformer winding data.",
      filename: "servo_stabiliser_catalogue.pdf",
      version: "2026.1",
      fileSize: "2.6 MB",
      pageCount: 3,
      releaseDate: "April 2026",
      file: "https://drive.google.com/uc?export=download&id=12gQ772aMiaeug7chpxE6Zxb3QU9qFbRV",
      downloadUrl: "https://drive.google.com/file/d/12gQ772aMiaeug7chpxE6Zxb3QU9qFbRV/view?usp=drive_link",
      gradient: "from-[#E65100] via-[#4a1c00] to-slate-900",
      accent: "#FF6D00",
      icon: "stabilizer"
    },
    {
      id: "tbas-catalog",
      title: "Technoex TBAS Catalogue",
      subtitle: "Total Backup Air Solutions",
      description: "Turnkey system configurations for <strong class='text-[#0077C8]'>Technoex TBAS</strong> including compressed air system layout schematics, pipe sizing calculations, receiver tank placement, and energy audit methodology for complete air solutions.",
      filename: "tbas_technoex_catalogue.pdf",
      version: "2026.1",
      fileSize: "5.3 MB",
      pageCount: 6,
      releaseDate: "June 2026",
      file: "https://drive.google.com/uc?export=download&id=1O0K6Nd3tYMafVvsYyMKTSAIvmwu_Ht95",
      downloadUrl: "https://drive.google.com/file/d/1O0K6Nd3tYMafVvsYyMKTSAIvmwu_Ht95/view?usp=drive_link",
      gradient: "from-[#0D47A1] via-[#041a3d] to-slate-900",
      accent: "#2979FF",
      icon: "services"
    },
    {
      id: "technoex-profile-catalog",
      title: "Technoex Profile Catalogue",
      subtitle: "Company Overview & Capabilities",
      description: "Corporate profile document for <strong class='text-[#0077C8]'>Technoex Trading Corporation</strong> including operational milestones, authorized brand partnerships, facility infrastructure, and industrial sector specializations.",
      filename: "technoex_profile_catalogue.pdf",
      version: "2026.1",
      fileSize: "6.8 MB",
      pageCount: 12,
      releaseDate: "January 2026",
      file: "https://drive.google.com/uc?export=download&id=1FJX2nEmNcKttreKMSk6jXd0hbrU9Bvhz",
      downloadUrl: "https://drive.google.com/file/d/1FJX2nEmNcKttreKMSk6jXd0hbrU9Bvhz/view?usp=drive_link",
      gradient: "from-[#263238] via-[#0c1114] to-slate-900",
      accent: "#546E7A",
      icon: "globe"
    },
    {
      id: "uniline-catalog",
      title: "Technoex Uniline Catalogue",
      subtitle: "Online UPS & Power Conditioning Systems",
      description: "Power protection specifications for <strong class='text-[#0077C8]'>Technoex Uniline</strong> systems including double-conversion efficiency data, battery backup runtime tables, output waveform quality metrics, and parallel N+1 redundancy configurations.",
      filename: "uniline_catalogue.pdf",
      version: "2026.1",
      fileSize: "7.4 MB",
      pageCount: 8,
      releaseDate: "March 2026",
      file: "https://drive.google.com/uc?export=download&id=1tmk0k48R2L3lFcijrsKJwBJx0WCXgGB5",
      downloadUrl: "https://drive.google.com/file/d/1tmk0k48R2L3lFcijrsKJwBJx0WCXgGB5/view?usp=drive_link",
      gradient: "from-[#880E4F] via-[#2d0319] to-slate-900",
      accent: "#E91E63",
      icon: "ups"
    }
  ]
};

window.CompanyData = CompanyData;
