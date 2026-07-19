class Masonry {
  constructor(options) {
    this.items = options.items || [];
    this.ease = options.ease || 'power3.out';
    this.duration = options.duration || 0.6;
    this.stagger = options.stagger || 0.05;
    this.animateFrom = options.animateFrom || 'bottom';
    this.scaleOnHover = options.scaleOnHover !== false;
    this.hoverScale = options.hoverScale || 0.95;
    this.blurToFocus = options.blurToFocus !== false;
    this.colorShiftOnHover = options.colorShiftOnHover || false;

    this.containerRef = null;
    this.columns = 1;
    this.grid = [];
    this.hasMounted = false;
    this.imagesReady = false;

    this.init();
  }

  init() {
    this.render();
    this.setupMediaQuery();
    this.preloadImages();
    this.setupResizeObserver();
  }

  getColumns() {
    const w = window.innerWidth;
    if (w >= 1500) return 5;
    if (w >= 1000) return 4;
    if (w >= 600) return 3;
    if (w >= 400) return 2;
    return 1;
  }

  render() {
    const container = document.createElement('div');
    container.className = 'masonry-container relative w-full';
    container.style.minHeight = '400px';
    container.id = 'masonry-grid';

    this.containerRef = container;

    const root = document.getElementById('masonry-root');
    if (root) {
      root.appendChild(container);
    }
  }

  preloadImages() {
    const promises = this.items.map(item => {
      return new Promise(resolve => {
        const img = new Image();
        img.src = item.img;
        img.onload = img.onerror = () => resolve();
      });
    });

    Promise.all(promises).then(() => {
      this.imagesReady = true;
      this.calculateGrid();
      this.animateItems();
    });
  }

  setupMediaQuery() {
    const handler = () => {
      const newColumns = this.getColumns();
      if (newColumns !== this.columns) {
        this.columns = newColumns;
        this.calculateGrid();
        this.animateItems();
      }
    };

    window.addEventListener('resize', handler);
    this.columns = this.getColumns();
  }

  setupResizeObserver() {
    if (!this.containerRef) return;

    const ro = new ResizeObserver(() => {
      this.calculateGrid();
      this.animateItems();
    });

    ro.observe(this.containerRef);
  }

  calculateGrid() {
    if (!this.containerRef || !this.imagesReady) return;

    const width = this.containerRef.offsetWidth;
    if (!width) return;

    const colHeights = new Array(this.columns).fill(0);
    const gap = 16;
    const totalGaps = (this.columns - 1) * gap;
    const columnWidth = (width - totalGaps) / this.columns;

    this.grid = this.items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      const height = child.height / 2;
      const y = colHeights[col];

      colHeights[col] += height + gap;
      return { ...child, x, y, w: columnWidth, h: height };
    });

    const maxHeight = Math.max(...colHeights);
    this.containerRef.style.height = `${maxHeight}px`;
  }

  getInitialPosition(item) {
    const containerRect = this.containerRef?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = this.animateFrom;
    if (this.animateFrom === 'random') {
      const dirs = ['top', 'bottom', 'left', 'right'];
      direction = dirs[Math.floor(Math.random() * dirs.length)];
    }

    switch (direction) {
      case 'top':
        return { x: item.x, y: -200 };
      case 'bottom':
        return { x: item.x, y: window.innerHeight + 200 };
      case 'left':
        return { x: -200, y: item.y };
      case 'right':
        return { x: window.innerWidth + 200, y: item.y };
      case 'center':
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  }

  animateItems() {
    if (!this.containerRef || !this.imagesReady) return;

    this.containerRef.innerHTML = '';

    this.grid.forEach((item, index) => {
      const el = document.createElement('div');
      el.className = 'absolute box-content cursor-pointer';
      el.dataset.key = item.id;
      el.style.willChange = 'transform, width, height, opacity';

      const inner = document.createElement('div');
      inner.className = 'relative w-full h-full bg-cover bg-center rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)]';
      inner.style.backgroundImage = `url(${item.img})`;

      if (this.colorShiftOnHover) {
        const overlay = document.createElement('div');
        overlay.className = 'color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none';
        inner.appendChild(overlay);
      }

      el.appendChild(inner);

      el.addEventListener('mouseenter', (e) => this.handleMouseEnter(item.id, e.currentTarget));
      el.addEventListener('mouseleave', (e) => this.handleMouseLeave(item.id, e.currentTarget));
      if (item.url) {
        el.addEventListener('click', () => window.open(item.url, '_blank', 'noopener'));
      }

      this.containerRef.appendChild(el);

      if (!this.hasMounted) {
        const start = this.getInitialPosition(item);
        gsap.fromTo(el, {
          opacity: 0,
          x: start.x,
          y: start.y,
          width: item.w,
          height: item.h,
          ...(this.blurToFocus && { filter: 'blur(10px)' })
        }, {
          opacity: 1,
          x: item.x,
          y: item.y,
          width: item.w,
          height: item.h,
          ...(this.blurToFocus && { filter: 'blur(0px)' }),
          duration: 0.8,
          ease: 'power3.out',
          delay: index * this.stagger
        });
      } else {
        gsap.set(el, {
          x: item.x,
          y: item.y,
          width: item.w,
          height: item.h,
          opacity: 1
        });
      }
    });

    this.hasMounted = true;
  }

  handleMouseEnter(id, element) {
    if (this.scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: this.hoverScale,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    if (this.colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay');
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
    }
  }

  handleMouseLeave(id, element) {
    if (this.scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    if (this.colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay');
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  }
}
