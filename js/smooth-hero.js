class SmoothScrollHero {
  constructor(options) {
    this.images = options.images || [];
    this.backgroundImage = options.backgroundImage || '';
    this.sectionHeight = options.sectionHeight || 1500;
    this.containerRef = null;
    this.centerRef = null;
    this.scrollHandler = null;

    this.init();
  }

  init() {
    this.render();
    this.setupScrollEffects();
  }

  render() {
    const section = document.createElement('div');
    section.className = 'relative w-full';
    section.style.height = `calc(${this.sectionHeight}px + 100vh)`;

    // Center image with clip-path
    const center = document.createElement('div');
    center.className = 'sticky top-0 h-screen w-full';
    center.style.backgroundImage = `url(${this.backgroundImage})`;
    center.style.backgroundPosition = 'center';
    center.style.backgroundRepeat = 'no-repeat';
    center.style.backgroundSize = '170%';
    center.style.clipPath = 'polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%)';
    center.style.transition = 'clip-path 0.1s ease-out, background-size 0.1s ease-out';
    this.centerRef = center;

    // Parallax images container
    const parallaxContainer = document.createElement('div');
    parallaxContainer.className = 'mx-auto max-w-5xl px-4 pt-[200px] relative z-10';

    this.images.forEach((img, index) => {
      const wrapper = document.createElement('div');
      wrapper.className = `mb-8 ${img.className || ''}`;
      
      const image = document.createElement('img');
      image.src = img.src;
      image.alt = img.alt || '';
      image.className = 'w-full rounded-lg shadow-2xl';
      image.dataset.start = img.start || 0;
      image.dataset.end = img.end || 0;
      
      wrapper.appendChild(image);
      parallaxContainer.appendChild(wrapper);
    });

    // Fade gradient at bottom
    const gradient = document.createElement('div');
    gradient.className = 'absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-slate-50 pointer-events-none';

    section.appendChild(center);
    section.appendChild(parallaxContainer);
    section.appendChild(gradient);

    this.containerRef = section;

    const root = document.getElementById('smooth-hero-root');
    if (root) {
      root.appendChild(section);
    }
  }

  setupScrollEffects() {
    const handleScroll = () => {
      if (!this.centerRef) return;

      const scrollY = window.scrollY;
      const maxScroll = this.sectionHeight;

      // Clip path animation
      const progress = Math.min(scrollY / maxScroll, 1);
      const clip1 = 25 - (progress * 25);
      const clip2 = 75 + (progress * 25);
      this.centerRef.style.clipPath = `polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

      // Background size animation
      const bgSize = 170 - (progress * 70);
      this.centerRef.style.backgroundSize = `${bgSize}%`;

      // Opacity fade out
      const opacity = scrollY > this.sectionHeight ? 1 - ((scrollY - this.sectionHeight) / 500) : 1;
      this.centerRef.style.opacity = Math.max(0, Math.min(1, opacity));

      // Parallax images
      const images = this.containerRef.querySelectorAll('img[data-start]');
      images.forEach(img => {
        const start = parseFloat(img.dataset.start);
        const end = parseFloat(img.dataset.end);
        const rect = img.getBoundingClientRect();
        const imageProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const y = start + (end - start) * imageProgress;
        const scale = 1 - Math.max(0, (imageProgress - 0.75) * 0.6);
        const imgOpacity = 1 - Math.max(0, (imageProgress - 0.75) * 4);
        img.style.transform = `translateY(${y}px) scale(${Math.max(0.85, scale)})`;
        img.style.opacity = Math.max(0, Math.min(1, imgOpacity));
      });
    };

    this.scrollHandler = handleScroll;
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial call
    setTimeout(handleScroll, 100);
  }

  destroy() {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
      window.removeEventListener('resize', this.scrollHandler);
    }
  }
}
