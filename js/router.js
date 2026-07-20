const AppRouter = {
  routes: {
    home: {
      render: PageTemplates.home,
      init: () => {
        // Hero Entrance Animation (staggered reveal)
        const heroTl = gsap.timeline({ delay: 0.1 });
        heroTl
          .to('.hero-badge', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
          .fromTo('.hero-title', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
          .fromTo('.hero-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
          .fromTo('.hero-buttons', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
          .fromTo('.hero-grid', { opacity: 0, scale: 0.95, x: 30 }, { opacity: 1, scale: 1, x: 0, duration: 0.7, ease: 'power2.out' }, '-=0.5');

        // Scroll Reveal Animations using ScrollTrigger
        gsap.utils.toArray('.scroll-reveal').forEach(el => {
          gsap.fromTo(el,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 85%', once: true }
            }
          );
        });

        // Profile cards stagger reveal
        const profileCards = document.querySelectorAll('.scroll-reveal-stagger .card1');
        if (profileCards.length) {
          gsap.fromTo(profileCards,
            { opacity: 0, y: 30, scale: 0.95 },
            {
              opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out',
              scrollTrigger: { trigger: profileCards[0]?.parentElement, start: 'top 85%', once: true }
            }
          );
        }

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

        // Timeline Cards - GSAP ScrollTrigger
        const cards = document.querySelectorAll(".timeline-card");
        if (cards.length) {
          cards.forEach((card, i) => {
            gsap.fromTo(card,
              { opacity: 0, y: 50, scale: 0.97 },
              {
                opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power2.out',
                scrollTrigger: { trigger: card, start: 'top 85%', once: true }
              }
            );
          });
        }

        // Store reference to tear down if route changes
        AppRouter.routes.home.cleanup = () => {
          heroTl.kill();
          ScrollTrigger.getAll().forEach(st => st.kill());
        };
      }
    },
    products: {
      render: PageTemplates.products,
      init: () => {
        // Animate page header
        gsap.fromTo('#app section > div:first-child > div',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.1 }
        );

        PageTemplates.handlers.renderProducts("", "all");

        // Animate product cards after render
        setTimeout(() => {
          const productCards = document.querySelectorAll('#product-grid > div');
          if (productCards.length) {
            gsap.fromTo(productCards,
              { opacity: 0, y: 30, scale: 0.97 },
              { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.06, ease: 'power2.out' }
            );
          }
        }, 50);

        const searchInput = document.getElementById("product-search");
        const filterButtons = document.querySelectorAll(".filter-btn");

        let activeCategory = "all";
        let lastQuery = "";

        if (searchInput) {
          searchInput.addEventListener("input", (e) => {
            lastQuery = e.target.value;
            PageTemplates.handlers.renderProducts(lastQuery, activeCategory);
            // Animate filtered results
            setTimeout(() => {
              const cards = document.querySelectorAll('#product-grid > div');
              gsap.fromTo(cards,
                { opacity: 0, y: 15, scale: 0.98 },
                { opacity: 1, y: 0, scale: 1, duration: 0.3, stagger: 0.04, ease: 'power2.out' }
              );
            }, 30);
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
            // Animate filtered results
            setTimeout(() => {
              const cards = document.querySelectorAll('#product-grid > div');
              gsap.fromTo(cards,
                { opacity: 0, y: 15, scale: 0.98 },
                { opacity: 1, y: 0, scale: 1, duration: 0.3, stagger: 0.04, ease: 'power2.out' }
              );
            }, 30);
          });
        });
      }
    },
    terms: {
      render: PageTemplates.terms,
      init: () => {
        // Animate terms page entrance
        gsap.fromTo('#app section > div:first-child > div',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.1 }
        );
        // Stagger animate accordion items
        gsap.fromTo('#app .border.border-slate-200.rounded-xl',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out', delay: 0.3 }
        );
      }
    },
    catalog: {
      render: PageTemplates.catalog,
      init: () => {
        // Animate catalog page header
        gsap.fromTo('#app section > div:first-child > div:first-child',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.1 }
        );
        // Stagger animate the 5 catalog cards
        gsap.fromTo('.catalog-card',
          { opacity: 0, y: 40, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.12, ease: 'power2.out', delay: 0.25 }
        );
        PageTemplates.handlers.setupCatalogDownload();
      }
    },
    contact: {
      render: PageTemplates.contact,
      init: () => {
        // Animate contact page entrance
        gsap.fromTo('#app section > div:first-child > div',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.1 }
        );
        // Stagger animate the two columns
        gsap.fromTo('#app .grid > div',
          { opacity: 0, y: 30, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.15, ease: 'power2.out', delay: 0.25 }
        );

        const form = document.getElementById("contact-form");
        if (form) {
          form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const btn = form.querySelector("button[type='submit']");
            const originalText = btn.textContent;
            btn.textContent = "Sending...";
            btn.disabled = true;

            try {
              const formData = new FormData(form);
              await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
              });
              btn.textContent = "Message Sent!";
              btn.classList.add("bg-green-500");
              btn.classList.remove("bg-gradient-to-r", "from-[#003B73]", "to-[#0077C8]");
              form.reset();
            } catch (err) {
              btn.textContent = "Error - Try Again";
              btn.classList.add("bg-red-500");
            }

            setTimeout(() => {
              btn.textContent = originalText;
              btn.classList.remove("bg-green-500", "bg-red-500");
              btn.classList.add("bg-gradient-to-r", "from-[#003B73]", "to-[#0077C8]");
              btn.disabled = false;
            }, 3000);
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
      // Kill any ongoing GSAP animations on the container
      gsap.killTweensOf(viewContainer);

      // Smooth GSAP page transition: fade out + slight slide up
      gsap.to(viewContainer, {
        opacity: 0,
        y: -8,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          // Scroll to top instantly (before rendering new content)
          window.scrollTo({ top: 0, behavior: 'instant' });

          // Kill all ScrollTriggers from previous page
          ScrollTrigger.getAll().forEach(st => st.kill());

          // Render new page
          viewContainer.innerHTML = route.render();
          route.init();

          // Reset position for entrance animation
          gsap.set(viewContainer, { opacity: 0, y: 12 });

          // Smooth entrance: fade in + slide down
          gsap.to(viewContainer, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => {
              // Refresh ScrollTrigger after new content is rendered
              ScrollTrigger.refresh();
            }
          });
        }
      });
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
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Product modal event listeners (modal is in index.html, outside #app)
    document.getElementById("modal-close")?.addEventListener("click", PageTemplates.handlers.closeProductModal);
    document.getElementById("product-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "product-modal") {
        PageTemplates.handlers.closeProductModal();
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        PageTemplates.handlers.closeProductModal();
      }
    });

    window.addEventListener("hashchange", AppRouter.handleRouting);
    window.addEventListener("DOMContentLoaded", AppRouter.handleRouting);
  }
};

window.AppRouter = AppRouter;
AppRouter.init();
