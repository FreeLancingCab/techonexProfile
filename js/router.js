const AppRouter = {
  routes: {
    home: {
      render: PageTemplates.home,
      init: () => {
        // Initialize ShuffleHero
        const shuffleGrid = document.getElementById('shuffle-grid');
        if (shuffleGrid && typeof ShuffleHero !== 'undefined') {
          new ShuffleHero(shuffleGrid, {
            images: [
              { id: 1, src: "assets/CompPro1.jpg" },
              { id: 2, src: "assets/CompPro2.jpg" },
              { id: 3, src: "assets/CompPro3.jpg" },
              { id: 4, src: "assets/CompPro4.jpg" },
              { id: 5, src: "assets/CompPro5.jpg" },
              { id: 6, src: "assets/CompPro6.jpg" },
              { id: 7, src: "assets/CompPro7.png" },
              { id: 8, src: "assets/CompPro8.jpg" },
              { id: 9, src: "assets/CompPro9.jpg" },
              { id: 10, src: "assets/CompPro10.jpg" },
              { id: 11, src: "assets/CompPro11.jpg" },
              { id: 12, src: "assets/CompPro12.jpg" },
              { id: 13, src: "assets/CompPro1.jpg" },
              { id: 14, src: "assets/CompPro2.jpg" },
              { id: 15, src: "assets/CompPro3.jpg" },
              { id: 16, src: "assets/CompPro4.jpg" }
            ],
            interval: 3000,
            cols: 4,
            rows: 4
          });
        }

        // Initialize Masonry Gallery
        const masonryRoot = document.getElementById('masonry-root');
        if (masonryRoot && typeof Masonry !== 'undefined') {
          new Masonry({
            items: [
              { id: "1", img: "assets/CompPro1.jpg", height: 400 },
              { id: "2", img: "assets/CompPro2.jpg", height: 350 },
              { id: "3", img: "assets/CompPro3.jpg", height: 450 },
              { id: "4", img: "assets/CompPro4.jpg", height: 300 },
              { id: "5", img: "assets/CompPro5.jpg", height: 500 },
              { id: "6", img: "assets/CompPro6.jpg", height: 380 },
              { id: "7", img: "assets/CompPro7.png", height: 420 },
              { id: "8", img: "assets/CompPro8.jpg", height: 360 },
              { id: "9", img: "assets/CompPro9.jpg", height: 440 },
              { id: "10", img: "assets/CompPro10.jpg", height: 320 },
              { id: "11", img: "assets/CompPro11.jpg", height: 480 },
              { id: "12", img: "assets/CompPro12.jpg", height: 340 }
            ],
            ease: "power3.out",
            duration: 0.6,
            stagger: 0.05,
            animateFrom: "bottom",
            scaleOnHover: true,
            hoverScale: 0.95,
            blurToFocus: true,
            colorShiftOnHover: false
          });
        }

        // Initialize LogoLoop for Brand Partners
        const logoLoopRoot = document.getElementById('logo-loop-root');
        if (logoLoopRoot && typeof LogoLoop !== 'undefined') {
          new LogoLoop({
            logos: [
              { src: "assets/Logo 1.png", alt: "Partner 1" },
              { src: "assets/Logo2.png", alt: "Partner 2" },
              { src: "assets/Logo3.png", alt: "Partner 3" },
              { src: "assets/Logo4.png", alt: "Partner 4" },
              { src: "assets/Logo5.png", alt: "Partner 5" },
              { src: "assets/Logo6.jpeg", alt: "Partner 6" },
              { src: "assets/Logo7.jpeg", alt: "Partner 7" },
              { src: "assets/Logo8.png", alt: "Partner 8" },
              { src: "assets/Logo9.png", alt: "Partner 9" },
              { src: "assets/Logo10.png", alt: "Partner 10" },
              { src: "assets/Logo11.png", alt: "Partner 11" },
              { src: "assets/logo12.png", alt: "Partner 12" }
            ],
            speed: 150,
            logoHeight: 60,
            gap: 80,
            fadeOut: true,
            fadeOutColor: "#ffffff",
            scaleOnHover: true,
            ariaLabel: "Brand partners"
          });
        }

        // Timeline Fade-In Observer
        const cards = document.querySelectorAll(".timeline-card");
        if ("IntersectionObserver" in window) {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "translate-y-8");
                entry.target.classList.add("opacity-100", "translate-y-0");
                observer.unobserve(entry.target);
              }
            });
          }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
          cards.forEach(card => observer.observe(card));
        } else {
          cards.forEach(card => card.classList.remove("opacity-0", "translate-y-8"));
        }

        // Store reference to tear down if route changes
        AppRouter.routes.home.cleanup = () => {
          // Cleanup if needed
        };
      }
    },
    products: {
      render: PageTemplates.products,
      init: () => {
        PageTemplates.handlers.renderProducts("", "all");

        const searchInput = document.getElementById("product-search");
        const filterButtons = document.querySelectorAll(".filter-btn");

        let activeCategory = "all";
        let lastQuery = "";

        if (searchInput) {
          searchInput.addEventListener("input", (e) => {
            lastQuery = e.target.value;
            PageTemplates.handlers.renderProducts(lastQuery, activeCategory);
          });
        }

        filterButtons.forEach(btn => {
          btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => {
              b.classList.remove("active", "bg-[#0077C8]", "text-white");
              b.classList.add("text-slate-400", "hover:text-white");
            });
            btn.classList.add("active", "bg-[#0077C8]", "text-white");
            btn.classList.remove("text-slate-400", "hover:text-white");

            activeCategory = btn.getAttribute("data-category");
            PageTemplates.handlers.renderProducts(lastQuery, activeCategory);
          });
        });

        const modalClose = document.getElementById("modal-close");
        const modal = document.getElementById("product-modal");
        
        if (modalClose) {
          modalClose.addEventListener("click", PageTemplates.handlers.closeProductModal);
        }
        if (modal) {
          modal.addEventListener("click", (e) => {
            if (e.target === modal) {
              PageTemplates.handlers.closeProductModal();
            }
          });
        }
      }
    },
    terms: {
      render: PageTemplates.terms,
      init: () => {}
    },
    catalog: {
      render: PageTemplates.catalog,
      init: () => {
        PageTemplates.handlers.setupCatalogDownload();
      }
    },
    contact: {
      render: PageTemplates.contact,
      init: () => {
        const form = document.getElementById("contact-form");
        if (form) {
          form.addEventListener("submit", (e) => {
            e.preventDefault();
            const btn = form.querySelector("button[type='submit']");
            btn.textContent = "Message Sent!";
            btn.classList.add("bg-green-500");
            btn.classList.remove("bg-gradient-to-r", "from-[#003B73]", "to-[#0077C8]");
            setTimeout(() => {
              btn.textContent = "Send Message";
              btn.classList.remove("bg-green-500");
              btn.classList.add("bg-gradient-to-r", "from-[#003B73]", "to-[#0077C8]");
              form.reset();
            }, 2000);
          });
        }
      }
    }
  },

  handleRouting: () => {
    // Run cleanup on old route if present
    const prevHash = window.location.hash.replace("#", "") || "home";
    const prevRoute = AppRouter.routes[prevHash];
    if (prevRoute && typeof prevRoute.cleanup === "function") {
      prevRoute.cleanup();
      prevRoute.cleanup = null;
    }

    const hash = window.location.hash.replace("#", "") || "home";
    const route = AppRouter.routes[hash] || AppRouter.routes.home;
    const viewContainer = document.getElementById("app");
    
    if (viewContainer) {
      viewContainer.style.opacity = "0";
      
      setTimeout(() => {
        viewContainer.innerHTML = route.render();
        route.init();
        viewContainer.style.opacity = "1";
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 150);
    }

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      const linkHash = link.getAttribute("href").replace("#", "") || "home";
      if (linkHash === hash) {
        link.classList.add("active", "text-[#66ccee]");
        link.classList.remove("text-slate-300");
      } else {
        link.classList.remove("active", "text-[#66ccee]");
        link.classList.add("text-slate-300");
      }
    });

    const mobileMenu = document.getElementById("mobile-menu");
    const mobileBackdrop = document.getElementById("mobile-backdrop");
    if (mobileMenu && !mobileMenu.classList.contains("translate-x-full")) {
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("translate-x-full");
      if (mobileBackdrop) {
        mobileBackdrop.classList.remove("opacity-100", "pointer-events-auto");
        mobileBackdrop.classList.add("opacity-0", "pointer-events-none");
      }
      document.body.classList.remove("scroll-lock");
    }
  },

  init: () => {
    window.addEventListener("hashchange", AppRouter.handleRouting);
    window.addEventListener("DOMContentLoaded", AppRouter.handleRouting);
  }
};

window.AppRouter = AppRouter;
AppRouter.init();
