class LogoLoop {
  constructor(options) {
    this.logos = options.logos || [];
    this.speed = options.speed || 120;
    this.logoHeight = options.logoHeight || 48;
    this.gap = options.gap || 40;
    this.fadeOut = options.fadeOut || false;
    this.fadeOutColor = options.fadeOutColor || '#ffffff';
    this.scaleOnHover = options.scaleOnHover || false;
    this.ariaLabel = options.ariaLabel || 'Partner logos';
    this.className = options.className || '';

    this.containerRef = null;
    this.trackRef = null;
    this.offset = 0;
    this.rafId = null;
    this.lastTimestamp = null;

    this.init();
  }

  init() {
    this.render();
    this.startAnimation();
  }

  render() {
    const container = document.createElement('div');
    container.className = `relative overflow-hidden ${this.className}`;
    container.setAttribute('role', 'region');
    container.setAttribute('aria-label', this.ariaLabel);
    container.style.width = '100%';
    container.style.height = `${this.logoHeight + 20}px`;

    // Fade out edges
    if (this.fadeOut) {
      const fadeLeft = document.createElement('div');
      fadeLeft.className = 'pointer-events-none absolute inset-y-0 left-0 z-10 w-[clamp(24px,8%,120px)]';
      fadeLeft.style.background = `linear-gradient(to_right, ${this.fadeOutColor} 0%, rgba(0,0,0,0) 100%)`;
      container.appendChild(fadeLeft);

      const fadeRight = document.createElement('div');
      fadeRight.className = 'pointer-events-none absolute inset-y-0 right-0 z-10 w-[clamp(24px,8%,120px)]';
      fadeRight.style.background = `linear-gradient(to_left, ${this.fadeOutColor} 0%, rgba(0,0,0,0) 100%)`;
      container.appendChild(fadeRight);
    }

    // Track
    const track = document.createElement('div');
    track.className = 'flex items-center absolute will-change-transform';
    track.style.whiteSpace = 'nowrap';
    this.trackRef = track;

    // Add logos
    this.logos.forEach((item, i) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'flex-none flex items-center';
      wrapper.style.marginRight = `${this.gap}px`;

      const link = document.createElement('a');
      link.className = 'inline-flex items-center no-underline transition-opacity duration-200 hover:opacity-80';
      if (item.href) {
        link.href = item.href;
        link.target = '_blank';
        link.rel = 'noreferrer noopener';
      }

      const img = document.createElement('img');
      img.className = 'w-auto block object-contain pointer-events-none';
      img.style.height = `${this.logoHeight}px`;
      img.src = item.src;
      img.alt = item.alt || '';
      img.loading = 'lazy';
      img.draggable = false;

      if (this.scaleOnHover) {
        img.style.transition = 'transform 0.3s ease';
        wrapper.addEventListener('mouseenter', () => { img.style.transform = 'scale(1.1)'; });
        wrapper.addEventListener('mouseleave', () => { img.style.transform = 'scale(1)'; });
      }

      link.appendChild(img);
      wrapper.appendChild(link);
      track.appendChild(wrapper);
    });

    container.appendChild(track);
    this.containerRef = container;

    const root = document.getElementById('logo-loop-root');
    if (root) {
      root.appendChild(container);
    }

    // Get total width of track
    this.trackWidth = track.scrollWidth;
  }

  startAnimation() {
    const animate = (timestamp) => {
      if (this.lastTimestamp === null) {
        this.lastTimestamp = timestamp;
      }

      const deltaTime = Math.max(0, timestamp - this.lastTimestamp) / 1000;
      this.lastTimestamp = timestamp;

      // Move from right to left
      this.offset += this.speed * deltaTime;

      // Reset when all logos have scrolled past
      if (this.offset > this.trackWidth) {
        this.offset = -this.containerRef.offsetWidth;
      }

      if (this.trackRef) {
        this.trackRef.style.transform = `translate3d(${-this.offset}px, 0, 0)`;
      }

      this.rafId = requestAnimationFrame(animate);
    };

    // Start from right side of screen
    this.offset = -this.containerRef.offsetWidth;
    this.rafId = requestAnimationFrame(animate);
  }

  destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }
}
