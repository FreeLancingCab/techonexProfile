class PillNav {
  constructor(options) {
    this.logo = options.logo;
    this.logoAlt = options.logoAlt || 'Logo';
    this.items = options.items || [];
    this.activeHref = options.activeHref || '';
    this.className = options.className || '';
    this.ease = options.ease || 'power3.easeOut';
    this.baseColor = options.baseColor || '#fff';
    this.pillColor = options.pillColor || '#120F17';
    this.hoveredPillTextColor = options.hoveredPillTextColor || '#120F17';
    this.pillTextColor = options.pillTextColor || this.baseColor;
    this.onMobileMenuClick = options.onMobileMenuClick || null;
    this.initialLoadAnimation = options.initialLoadAnimation !== false;

    this.isMobileMenuOpen = false;
    this.circleRefs = [];
    this.tlRefs = [];
    this.activeTweenRefs = [];
    this.logoImgRef = null;
    this.logoTweenRef = null;
    this.hamburgerRef = null;
    this.mobileMenuRef = null;
    this.navItemsRef = null;
    this.logoRef = null;

    this.init();
  }

  init() {
    this.render();
    this.setupEventListeners();
    if (this.initialLoadAnimation) {
      this.runInitialAnimation();
    }
  }

  render() {
    const container = document.createElement('div');
    container.className = 'fixed top-4 z-[1000] left-1/2 -translate-x-1/2 w-auto';
    container.id = 'pill-nav-container';

    const cssVars = {
      '--base': this.baseColor,
      '--pill-bg': this.pillColor,
      '--hover-text': this.hoveredPillTextColor,
      '--pill-text': this.pillTextColor,
      '--nav-h': '42px',
      '--logo': '36px',
      '--pill-pad-x': '18px',
      '--pill-gap': '3px'
    };

    container.innerHTML = `
      <nav class="w-full md:w-max flex items-center justify-between md:justify-start box-border px-4 md:px-0 ${this.className}" aria-label="Primary" style="${Object.entries(cssVars).map(([k,v]) => `${k}:${v}`).join(';')}">
        <a href="${this.items[0]?.href || '#'}" aria-label="Home" class="pill-nav-logo rounded-full p-2 inline-flex items-center justify-center overflow-hidden" style="width:var(--nav-h);height:var(--nav-h);background:var(--base,#000)">
          <img src="${this.logo}" alt="${this.logoAlt}" class="pill-nav-logo-img w-full h-full object-cover block" />
        </a>

        <div class="pill-nav-items relative items-center rounded-full hidden md:flex ml-2" style="height:var(--nav-h);background:var(--base,#000)">
          <ul role="menubar" class="list-none flex items-stretch m-0 p-[3px] h-full" style="gap:var(--pill-gap)">
            ${this.items.map((item, i) => {
              const isActive = this.activeHref === item.href;
              return `
                <li role="none" class="flex h-full">
                  <a role="menuitem" href="${item.href}" class="pill-nav-item relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[16px] leading-[0] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer px-0" style="background:var(--pill-bg,#fff);color:var(--pill-text,var(--base,#000));padding-left:var(--pill-pad-x);padding-right:var(--pill-pad-x)" data-index="${i}">
                    <span class="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none" style="background:var(--base,#000);will-change:transform" aria-hidden="true"></span>
                    <span class="label-stack relative inline-block leading-[1] z-[2]">
                      <span class="pill-label relative z-[2] inline-block leading-[1]" style="will-change:transform">${item.label}</span>
                      <span class="pill-label-hover absolute left-0 top-0 z-[3] inline-block" style="color:var(--hover-text,#fff);will-change:transform,opacity" aria-hidden="true">${item.label}</span>
                    </span>
                    ${isActive ? `<span class="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rounded-full z-[4]" style="background:var(--base,#000)" aria-hidden="true"></span>` : ''}
                  </a>
                </li>
              `;
            }).join('')}
          </ul>
        </div>

        <button class="pill-nav-hamburger md:hidden rounded-full border-0 flex flex-col items-center justify-center gap-1 cursor-pointer p-0 relative" style="width:var(--nav-h);height:var(--nav-h);background:var(--base,#000)" aria-label="Toggle menu" aria-expanded="false">
          <span class="hamburger-line w-4 h-0.5 rounded origin-center" style="background:var(--pill-bg,#fff)"></span>
          <span class="hamburger-line w-4 h-0.5 rounded origin-center" style="background:var(--pill-bg,#fff)"></span>
        </button>
      </nav>

      <div class="pill-nav-mobile-menu md:hidden absolute top-[3em] left-4 right-4 rounded-[27px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-[998] origin-top" style="${Object.entries(cssVars).map(([k,v]) => `${k}:${v}`).join(';')};background:var(--base,#f0f0f0);visibility:hidden;opacity:0">
        <ul class="list-none m-0 p-[3px] flex flex-col gap-[3px]">
          ${this.items.map(item => `
            <li>
              <a href="${item.href}" class="pill-nav-mobile-item block py-3 px-4 text-[16px] font-medium rounded-[50px] transition-all duration-200" style="background:var(--pill-bg,#fff);color:var(--pill-text,#fff)">${item.label}</a>
            </li>
          `).join('')}
        </ul>
      </div>
    `;

    const root = document.getElementById('pill-nav-root');
    if (root) {
      root.appendChild(container);
    } else {
      document.body.prepend(container);
    }

    this.logoRef = container.querySelector('.pill-nav-logo');
    this.logoImgRef = container.querySelector('.pill-nav-logo-img');
    this.hamburgerRef = container.querySelector('.pill-nav-hamburger');
    this.mobileMenuRef = container.querySelector('.pill-nav-mobile-menu');
    this.navItemsRef = container.querySelector('.pill-nav-items');
    this.circleRefs = container.querySelectorAll('.hover-circle');
  }

  setupEventListeners() {
    const items = this.navItemsRef.querySelectorAll('.pill-nav-item');
    items.forEach((item, i) => {
      item.addEventListener('mouseenter', () => this.handleEnter(i));
      item.addEventListener('mouseleave', () => this.handleLeave(i));
    });

    this.logoRef.addEventListener('mouseenter', () => this.handleLogoEnter());

    this.hamburgerRef.addEventListener('click', () => this.toggleMobileMenu());

    const mobileItems = this.mobileMenuRef.querySelectorAll('.pill-nav-mobile-item');
    mobileItems.forEach(item => {
      item.addEventListener('mouseenter', (e) => {
        e.currentTarget.style.background = 'var(--base)';
        e.currentTarget.style.color = 'var(--hover-text,#fff)';
      });
      item.addEventListener('mouseleave', (e) => {
        e.currentTarget.style.background = 'var(--pill-bg,#fff)';
        e.currentTarget.style.color = 'var(--pill-text,#fff)';
      });
      item.addEventListener('click', () => {
        this.isMobileMenuOpen = false;
        this.updateMobileMenu();
      });
    });

    window.addEventListener('resize', () => this.layout());
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => this.layout()).catch(() => {});
    }

    this.layout();
  }

  layout() {
    this.circleRefs.forEach(circle => {
      if (!circle?.parentElement) return;

      const pill = circle.parentElement;
      const rect = pill.getBoundingClientRect();
      const { width: w, height: h } = rect;
      const R = ((w * w) / 4 + h * h) / (2 * h);
      const D = Math.ceil(2 * R) + 2;
      const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
      const originY = D - delta;

      circle.style.width = `${D}px`;
      circle.style.height = `${D}px`;
      circle.style.bottom = `-${delta}px`;

      gsap.set(circle, {
        xPercent: -50,
        scale: 0,
        transformOrigin: `50% ${originY}px`
      });

      const label = pill.querySelector('.pill-label');
      const white = pill.querySelector('.pill-label-hover');

      if (label) gsap.set(label, { y: 0 });
      if (white) gsap.set(white, { y: h + 12, opacity: 0 });

      const index = Array.from(this.circleRefs).indexOf(circle);
      if (index === -1) return;

      this.tlRefs[index]?.kill();
      const tl = gsap.timeline({ paused: true });

      tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease: this.ease, overwrite: 'auto' }, 0);

      if (label) {
        tl.to(label, { y: -(h + 8), duration: 2, ease: this.ease, overwrite: 'auto' }, 0);
      }

      if (white) {
        gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
        tl.to(white, { y: 0, opacity: 1, duration: 2, ease: this.ease, overwrite: 'auto' }, 0);
      }

      this.tlRefs[index] = tl;
    });
  }

  handleEnter(i) {
    const tl = this.tlRefs[i];
    if (!tl) return;
    this.activeTweenRefs[i]?.kill();
    this.activeTweenRefs[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease: this.ease,
      overwrite: 'auto'
    });
  }

  handleLeave(i) {
    const tl = this.tlRefs[i];
    if (!tl) return;
    this.activeTweenRefs[i]?.kill();
    this.activeTweenRefs[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease: this.ease,
      overwrite: 'auto'
    });
  }

  handleLogoEnter() {
    const img = this.logoImgRef;
    if (!img) return;
    this.logoTweenRef?.kill();
    gsap.set(img, { rotate: 0 });
    this.logoTweenRef = gsap.to(img, {
      rotate: 360,
      duration: 0.2,
      ease: this.ease,
      overwrite: 'auto'
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.updateMobileMenu();
    this.onMobileMenuClick?.();
  }

  updateMobileMenu() {
    const hamburger = this.hamburgerRef;
    const menu = this.mobileMenuRef;

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (this.isMobileMenuOpen) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease: this.ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease: this.ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease: this.ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease: this.ease });
      }
    }

    if (menu) {
      if (this.isMobileMenuOpen) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(menu, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease: this.ease, transformOrigin: 'top center' });
      } else {
        gsap.to(menu, { opacity: 0, y: 10, duration: 0.2, ease: this.ease, transformOrigin: 'top center', onComplete: () => gsap.set(menu, { visibility: 'hidden' }) });
      }
    }
  }

  runInitialAnimation() {
    if (this.logoRef) {
      gsap.set(this.logoRef, { scale: 0 });
      gsap.to(this.logoRef, { scale: 1, duration: 0.6, ease: this.ease });
    }
    if (this.navItemsRef) {
      gsap.set(this.navItemsRef, { width: 0, overflow: 'hidden' });
      gsap.to(this.navItemsRef, { width: 'auto', duration: 0.6, ease: this.ease });
    }
  }
}
