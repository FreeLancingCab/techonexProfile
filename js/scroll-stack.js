class ScrollStack {
  constructor(options) {
    this.items = options.items || [];
    this.itemDistance = options.itemDistance || 120;
    this.itemScale = options.itemScale || 0.04;
    this.itemStackDistance = options.itemStackDistance || 40;
    this.stackPosition = options.stackPosition || '25%';
    this.scaleEndPosition = options.scaleEndPosition || '5%';
    this.baseScale = options.baseScale || 0.82;
    this.rotationAmount = options.rotationAmount || 2;
    this.blurAmount = options.blurAmount || 3;
    this.className = options.className || '';
    this.containerRef = null;
    this.cardsRef = [];
    this.scrollHandler = null;
    this.ticking = false;

    this.init();
  }

  init() {
    this.render();
    this.setupCards();
    this.setupScrollListener();
  }

  render() {
    const container = document.createElement('div');
    container.className = `scroll-stack-container relative w-full ${this.className}`;
    container.style.cssText = 'overscroll-behavior:contain;';

    const inner = document.createElement('div');
    inner.className = 'scroll-stack-inner';
    inner.style.cssText = 'padding-top:15vh; padding-bottom:60vh; min-height:100vh;';

    this.items.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'scroll-stack-card';
      card.style.cssText = `
        position: relative;
        width: 100%;
        max-width: 900px;
        margin: 0 auto ${index < this.items.length - 1 ? this.itemDistance : 0}px;
        min-height: 340px;
        border-radius: 24px;
        overflow: hidden;
        transform-origin: top center;
        will-change: transform, filter;
        backface-visibility: hidden;
        transform-style: preserve-3d;
      `;

      card.innerHTML = `
        <div class="card-bg absolute inset-0" style="
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #334155 100%);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        "></div>
        
        <div class="card-shine absolute inset-0 opacity-0" style="
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
          transition: opacity 0.6s ease;
        "></div>
        
        <div class="card-content relative z-10 p-8 md:p-12 h-full flex flex-col justify-center">
          <div class="flex items-start gap-6">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0077C8] to-[#0077C8] flex items-center justify-center shadow-lg shadow-[#0077C8]/30 transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
                <span class="text-2xl font-bold text-white">${index + 1}</span>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-3">
                <span class="px-3 py-1 text-[10px] font-bold tracking-widest text-[#80d4ff] bg-[#0077C8]/20 border border-[#0077C8]/30 rounded-full uppercase">${item.tag}</span>
                <span class="w-1 h-1 rounded-full bg-[#00AEEF]"></span>
                <span class="text-xs text-slate-400">Chapter ${index + 1}</span>
              </div>
              <span class="block text-5xl md:text-6xl font-extrabold font-display text-white mb-3 tracking-tight" style="text-shadow: 0 0 40px rgba(99, 102, 241, 0.3);">${item.year}</span>
              <h3 class="text-xl md:text-2xl font-bold text-white mb-4">${item.title}</h3>
              <p class="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl">${item.description}</p>
              
              <div class="mt-6 flex items-center gap-2 text-[#66ccee] text-sm font-medium opacity-0 transform translate-y-2 transition-all duration-500" style="transition-delay: 0.2s;">
                <span>Learn more</span>
                <svg class="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0077C8] via-[#00AEEF] to-[#0077C8] transform scale-x-0 transition-transform duration-700 origin-left"></div>
      `;

      // Hover effects
      card.addEventListener('mouseenter', () => {
        const bg = card.querySelector('.card-bg');
        const shine = card.querySelector('.card-shine');
        const learnMore = card.querySelector('.mt-6');
        if (bg) bg.style.background = 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 100%)';
        if (shine) shine.style.opacity = '1';
        if (learnMore) {
          learnMore.style.opacity = '1';
          learnMore.style.transform = 'translateY(0)';
        }
      });

      card.addEventListener('mouseleave', () => {
        const bg = card.querySelector('.card-bg');
        const shine = card.querySelector('.card-shine');
        const learnMore = card.querySelector('.mt-6');
        if (bg) bg.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #334155 100%)';
        if (shine) shine.style.opacity = '0';
        if (learnMore) {
          learnMore.style.opacity = '0';
          learnMore.style.transform = 'translateY(8px)';
        }
      });

      inner.appendChild(card);
    });

    // End spacer
    const endSpacer = document.createElement('div');
    endSpacer.className = 'scroll-stack-end w-full h-px';
    inner.appendChild(endSpacer);

    container.appendChild(inner);
    this.containerRef = container;

    const root = document.getElementById('scroll-stack-root');
    if (root) {
      root.appendChild(container);
    }
  }

  setupCards() {
    this.cardsRef = Array.from(this.containerRef.querySelectorAll('.scroll-stack-card'));
    this.cardsRef.forEach((card, i) => {
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.webkitTransform = 'translateZ(0)';
    });
  }

  easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  calculateProgress(scrollTop, start, end) {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    const progress = (scrollTop - start) / (end - start);
    return this.easeOutExpo(Math.min(1, Math.max(0, progress)));
  }

  parsePercentage(value, containerHeight) {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }

  updateCardTransforms() {
    if (!this.cardsRef.length) return;

    const scrollTop = window.scrollY;
    const containerHeight = window.innerHeight;
    const stackPositionPx = this.parsePercentage(this.stackPosition, containerHeight);
    const scaleEndPositionPx = this.parsePercentage(this.scaleEndPosition, containerHeight);

    const endElement = document.querySelector('.scroll-stack-end');
    const endElementTop = endElement ? endElement.getBoundingClientRect().top + window.scrollY : 0;

    // Find which card is on top
    let topCardIndex = 0;
    this.cardsRef.forEach((card, i) => {
      const cardRect = card.getBoundingClientRect();
      const cardTop = cardRect.top + window.scrollY;
      const triggerStart = cardTop - stackPositionPx - this.itemStackDistance * i;
      if (scrollTop >= triggerStart) {
        topCardIndex = i;
      }
    });

    this.cardsRef.forEach((card, i) => {
      if (!card) return;

      const cardRect = card.getBoundingClientRect();
      const cardTop = cardRect.top + window.scrollY;
      const triggerStart = cardTop - stackPositionPx - this.itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - this.itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = this.calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = this.baseScale + i * this.itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      
      // Smooth rotation with easing
      const rotationProgress = this.calculateProgress(scrollTop, triggerStart, triggerEnd);
      const rotation = this.rotationAmount ? i * this.rotationAmount * rotationProgress * (i === topCardIndex ? 1 : 0.5) : 0;

      // Smooth blur for stacked cards
      let blur = 0;
      if (this.blurAmount && i < topCardIndex) {
        const depthInStack = topCardIndex - i;
        blur = Math.min(depthInStack * this.blurAmount, this.blurAmount * 3);
      }

      // Smooth translateY with momentum
      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + this.itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + this.itemStackDistance * i;
      }

      // Add subtle parallax effect
      const parallaxOffset = isPinned ? (scrollTop - pinStart) * 0.05 : 0;
      translateY += parallaxOffset;

      const transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
      const filter = blur > 0 ? `blur(${blur}px)` : '';

      card.style.transform = transform;
      card.style.filter = filter;

      // Update card shine based on position
      const shine = card.querySelector('.card-shine');
      if (shine && i === topCardIndex) {
        shine.style.opacity = '0.5';
      } else if (shine) {
        shine.style.opacity = '0';
      }
    });
  }

  setupScrollListener() {
    const handleScroll = () => {
      if (!this.ticking) {
        requestAnimationFrame(() => {
          this.updateCardTransforms();
          this.ticking = false;
        });
        this.ticking = true;
      }
    };

    this.scrollHandler = handleScroll;
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial update with delay for smooth load
    setTimeout(() => this.updateCardTransforms(), 150);
    setTimeout(() => this.updateCardTransforms(), 500);
  }

  destroy() {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
      window.removeEventListener('resize', this.scrollHandler);
    }
  }
}
