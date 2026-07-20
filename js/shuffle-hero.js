class ShuffleHero {
  constructor(container, options = {}) {
    this.container = typeof container === 'string' ? document.querySelector(container) : container;
    if (!this.container) return;

    this.images = options.images || [];
    this.interval = options.interval || 3000;
    this.cols = options.cols || 4;
    this.rows = options.rows || 4;
    this.timeoutId = null;
    this.cells = [];
    this.isAnimating = false;

    this.init();
  }

  init() {
    this.populateGrid();
    this.startShuffle();
  }

  populateGrid() {
    this.container.innerHTML = '';
    this.cells = [];

    const totalCells = this.cols * this.rows;
    const shuffledImages = this.shuffle([...this.images]);

    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement('div');
      cell.className = 'relative overflow-hidden will-change-transform';

      if (shuffledImages[i]) {
        const img = document.createElement('img');
        img.src = shuffledImages[i].src;
        img.alt = '';
        img.className = 'absolute inset-0 w-full h-full object-cover';
        img.loading = 'lazy';
        cell.appendChild(img);
      }

      this.container.appendChild(cell);
      this.cells.push(cell);
    }
  }

  shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  startShuffle() {
    this.timeoutId = setInterval(() => {
      if (!this.isAnimating) {
        this.shuffleGrid();
      }
    }, this.interval);
  }

  shuffleGrid() {
    if (this.isAnimating) return;
    this.isAnimating = true;

    const shuffledImages = this.shuffle([...this.images]);
    const staggerDelay = 0.04;

    // Create a GSAP timeline for coordinated shuffle
    const tl = gsap.timeline({
      onComplete: () => { this.isAnimating = false; }
    });

    this.cells.forEach((cell, i) => {
      const img = cell.querySelector('img');
      
      // Phase 1: Fade out + slight scale down
      tl.to(cell, {
        opacity: 0,
        scale: 0.92,
        duration: 0.25,
        ease: 'power2.in'
      }, i * staggerDelay);

      // Phase 2: Swap image and fade back in
      tl.call(() => {
        if (img && shuffledImages[i]) {
          img.src = shuffledImages[i].src;
        }
      }, null, (i * staggerDelay) + 0.25);

      tl.to(cell, {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: 'power2.out'
      }, (i * staggerDelay) + 0.28);
    });
  }

  destroy() {
    if (this.timeoutId) {
      clearInterval(this.timeoutId);
    }
  }
}
