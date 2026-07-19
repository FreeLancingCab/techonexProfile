const CompanyData = {
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
    { id: "comp-1", name: "Piston Air Compressor", category: "Air Compressor", shortDescription: "Heavy-duty industrial reciprocating piston compressor.", brand: "Technoex", price: "Request Quote", image: "assets/Prodcut1.png", specifications: ["Highly durable cast iron cylinders", "Automated pressure switch cutoff", "Suitable for small-to-medium workshops"], features: ["Low running speeds", "Inter-stage finned coolers", "Large oil reservoir capacity"] },
    { id: "comp-2", name: "Hitachi Oil Free Compressor", category: "Air Compressor", shortDescription: "Genuine Hitachi oil-free compressor for pure clean air.", brand: "Hitachi", price: "Request Quote", image: "assets/Prodcut2.png", specifications: ["100% oil-free compression cycle", "Corrosion resistant tank lining", "Ultra quiet acoustic enclosure options"], features: ["Patented tooth-rotor technology", "Continuous load rating", "Minimum power losses"] },
    { id: "comp-3", name: "Industrial Air Compressor", category: "Air Compressor", shortDescription: "Reliable medium-pressure compressor for plant installations.", brand: "Technoex", price: "Request Quote", image: "assets/Prodcut3.png", specifications: ["Designed for 24/7 continuous operation", "Dual belt-drive system", "Vibration isolator mounts"], features: ["High volume delivery", "Easy filter access", "Thermal overload protection"] },
    { id: "comp-4", name: "Reciprocating Air Compressor", category: "Air Compressor", shortDescription: "Multi-stage compression piston block for high pressures.", brand: "Technoex", price: "Request Quote", image: "assets/Prodcut4.png", specifications: ["Splash lubricated compressor pump", "Heavy duty intake air filters", "ASME coded air receiver tanks"], features: ["Excellent cooling fins", "Low noise valves", "Long maintenance loops"] },
    { id: "comp-5", name: "Oil Free Screw Compressor", category: "Air Compressor", shortDescription: "Flagship Hitachi/Technoex screw compressor.", brand: "Hitachi / Technoex", price: "Request Quote", image: "assets/Prodcut5.png", specifications: ["Class 0 quality dry compressed air", "Variable frequency speed regulation", "Touch panel control monitor"], features: ["No oil carryover guarantee", "Optimized rotor cooling jacket", "High air delivery per kW"] },
    { id: "comp-6", name: "Lubricated Piston / Screw Compressor", category: "Air Compressor", shortDescription: "Versatile lubricated screw compressor for general machinery.", brand: "Technoex", price: "Request Quote", image: "assets/prodcut6.png", specifications: ["Integrated oil separation filters", "Thermostatically controlled fan", "Compact floor design footprint"], features: ["High durability", "Low oil consumption rates", "Long bearing lifespans"] },
    { id: "comp-7", name: "Mini Oil Free Air Compressors", category: "Air Compressor", shortDescription: "Compact oil-free units for labs and medical devices.", brand: "Technoex", price: "Request Quote", image: "assets/Prodcut7.png", specifications: ["Ultra-portable construction", "PTFE piston ring design", "Maintenance free operation"], features: ["Low vibration", "Instant startup", "Direct drive assembly"] },
    { id: "comp-8", name: "Portable Oil-free Compressor", category: "Air Compressor", shortDescription: "Wheel-mounted oil-free compressor for site applications.", brand: "Technoex", price: "Request Quote", image: "assets/Prodcut8.png", specifications: ["Rugged handle and steel wheels", "Dual exit regulator taps", "Quiet induction motor drive"], features: ["Easy transport", "No oil leaks on job sites", "Heavy duty cord wrapper"] },
    { id: "comp-9", name: "Scroll Air Compressor", category: "Air Compressor", shortDescription: "Quiet orbiting scroll compressor for absolute continuous air.", brand: "Technoex", price: "Request Quote", image: "assets/Prodcut9.png", specifications: ["Frictionless orbiting scroll scroll wraps", "Low mechanical sound level (<50 dB)", "Compact cabinet design"], features: ["Very few moving parts", "100% duty cycle rating", "Clean, dry discharge air"] },
    { id: "comp-10", name: "H-Series Piston Air Compressor", category: "Air Compressor", shortDescription: "High-pressure piston compressor for industrial molding.", brand: "Technoex", price: "Request Quote", image: "assets/CompPro1.jpg", specifications: ["Reinforced crankshaft assemblies", "Water-cooled cylinder sleeves", "Automatic unloading startup"], features: ["Designed for high output pressure", "Heavy-gauge steel base", "Dual safety check valves"] },
    
    // 2. UPS Systems
    { id: "ups-1", name: "Hitachi Hi-Rel Online UPS", category: "UPS System", shortDescription: "Premium Hitachi double-conversion enterprise online UPS.", brand: "Hitachi Hi-Rel", price: "Request Quote", image: "assets/CompPro2.jpg", specifications: ["Double conversion online topology", "Input THDi < 3%", "Wide input voltage windows"], features: ["Hot-swappable battery cabinets", "Active power factor correction", "Intelligent SNMP monitoring card"] },
    { id: "ups-2", name: "Uniline Online UPS", category: "UPS System", shortDescription: "Reliable commercial online UPS from Uniline.", brand: "Uniline", price: "Request Quote", image: "assets/CompPro3.jpg", specifications: ["DSP control design", "High output power factor (0.9)", "Built-in static bypass switch"], features: ["Cold start capability", "Smart battery charger layout", "LCD dashboard monitor"] },
    { id: "ups-3", name: "UPS Repair and Service", category: "Services", shortDescription: "On-site repair, battery load testing, and AMC for industrial UPS.", brand: "Technoex Support", price: "Enquire Now", image: "assets/CompPro4.jpg", specifications: ["Qualified power engineers", "Genuine OEM spare parts", "24/7 breakdown call assistance"], features: ["Battery health reports", "Inverter calibration testing", "Temporary rental system support"] },
    
    // 3. Dryers & Filters
    { id: "dryer-1", name: "Trident Dryspell Heatless Dryer", category: "Air Dryer", shortDescription: "Standard Trident desiccant twin-tower dryer.", brand: "Trident", price: "Request Quote", image: "assets/CompPro5.jpg", specifications: ["Stable -40°C pressure dew point", "Activated alumina desiccant", "Coalescing pre-filter pre-fitted"], features: ["Microprocessor based timers", "Low purge air losses", "Heavy duty shuttle valves"] },
    { id: "dryer-2", name: "Trident Coldspell Air Dryer", category: "Air Dryer", shortDescription: "Refrigerant type air dryer for standard applications.", brand: "Trident", price: "Request Quote", image: "assets/CompPro6.jpg", specifications: ["Constant 3°C pressure dew point", "R134a eco-friendly refrigerant", "Stainless steel heat exchanger"], features: ["Low power compressor drive", "Automatic drain control timer", "Digital temperature display"] },
    { id: "dryer-3", name: "Refrigerated Air Dryer (Additional)", category: "Air Dryer", shortDescription: "High-temperature refrigeration air dryer.", brand: "Technoex", price: "Request Quote", image: "assets/CompPro7.png", specifications: ["Handles high inlet temperatures", "Integral water separators", "Anti-freezing thermostat regulator"], features: ["Compact size", "Easy piping connections", "Eco-safe refrigerant coils"] },
    { id: "dryer-4", name: "Line Filters & Drain Valves", category: "Accessories", shortDescription: "Coalescing line filters and timed auto drain valves.", brand: "Trident", price: "Request Quote", image: "assets/CompPro8.jpg", specifications: ["Filtration down to 0.01 micron", "Zero air-loss auto drain", "Heavy duty filter indicator gauges"], features: ["Aluminum diecast housing", "Quick release elements", "Solenoid controlled purge loops"] },
    
    // 4. Vacuum Systems
    { id: "vac-1", name: "Rotary Vane Vacuum Pump", category: "Vacuum Pump", shortDescription: "High-grade industrial oil-lubricated vacuum pump.", brand: "Technoex", price: "Request Quote", image: "assets/CompPro9.jpg", specifications: ["Ultimate vacuum down to 0.1 mbar", "Built-in anti-suckback valves", "Integral exhaust mist filter"], features: ["Direct drive motor setup", "Low operating temperatures", "High water vapor tolerance"] },
    { id: "vac-2", name: "Lubricated Piston Vacuum Pump", category: "Vacuum Pump", shortDescription: "Reciprocating vacuum pump for medical and packing.", brand: "Technoex", price: "Request Quote", image: "assets/CompPro10.jpg", specifications: ["Heavy duty piston rings", "Vibration dampening sub-base", "Low rotational speeds"], features: ["Very high durability", "Suitable for dusty conditions", "Easy valve service access"] },
    
    // 5. Stabilizers
    { id: "stab-1", name: "Servo Voltage Stabilizer (Uniline)", category: "Voltage Stabilizer", shortDescription: "Three-phase servo stabilizer for industrial machinery protection.", brand: "Uniline", price: "Request Quote", image: "assets/CompPro11.jpg", specifications: ["Balanced/Unbalanced input control", "98% Efficiency factor", "Voltage correction rate 35V/sec"], features: ["Microcontroller servo motor drive", "Over/Under voltage cutoff protection", "Heavy copper wound variacs"] },
    
    // 6. Piping & Modules
    { id: "pipe-1", name: "PPR Pipeline Systems", category: "Accessories", shortDescription: "Fusion welded PPR pipeline loops for air distribution.", brand: "Technoex", price: "Enquire Now", image: "assets/CompPro12.jpg", specifications: ["PN20 Pressure rated pipes", "Leak-free fusion welded jointing", "Zero corrosion scaling guarantee"], features: ["Low friction pressure drop", "Extremely fast assembly setup", "Chemical resistance"] },
    { id: "pipe-2", name: "SS Piping Modular (304 / 316)", category: "Accessories", shortDescription: "Press-fit stainless steel modular piping grids.", brand: "Technoex", price: "Enquire Now", image: "assets/Prodcut1.png", specifications: ["Grade 304 or 316 stainless steel", "Double O-ring secure press joints", "Rated up to 16 bar air pressure"], features: ["Superb aesthetic styling", "Extremely lightweight structure", "Zero contamination for food/labs"] },
    { id: "panel-1", name: "Gas Purification & Control Panels", category: "Accessories", shortDescription: "Custom control panels for Nitrogen, Air and Special Gases.", brand: "Technoex", price: "Request Quote", image: "assets/Prodcut2.png", specifications: ["Microprocessor gas sensors pre-fitted", "Pneumatic valve sequencing loops", "Wall or stand mounting cabinets"], features: ["Solenoid distribution matrix", "High visibility touch screens", "Audio-visual hazard alarms"] }
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
  }
};

window.CompanyData = CompanyData;
