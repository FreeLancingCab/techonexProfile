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
    this.tl = null;

    this.init();
  }

  init() {
    this.preloadImages().then(() => {
      this.populateGrid();
      this.startShuffle();
    });
  }

  preloadImages() {
    const promises = this.images.map(img => {
      return new Promise(resolve => {
        const preloader = new Image();
        preloader.onload = resolve;
        preloader.onerror = resolve;
        preloader.src = img.src;
      });
    });
    return Promise.all(promises);
  }

  populateGrid() {
    this.container.innerHTML = '';
    this.cells = [];

    const totalCells = this.cols * this.rows;
    const shuffledImages = this.shuffle([...this.images]);

    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement('div');
      cell.className = 'shuffle-cell';
      cell.style.cssText = 'position:relative;overflow:hidden;will-change:transform,opacity;';

      // Current visible image
      const imgA = document.createElement('img');
      imgA.alt = '';
      imgA.draggable = false;
      imgA.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;will-change:opacity;transform:translateZ(0);';
      if (shuffledImages[i]) {
        imgA.src = shuffledImages[i].src;
      }

      // Crossfade overlay image (hidden initially)
      const imgB = document.createElement('img');
      imgB.alt = '';
      imgB.draggable = false;
      imgB.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;will-change:opacity;transform:translateZ(0);opacity:0;pointer-events:none;';
      imgB.setAttribute('aria-hidden', 'true');

      cell.appendChild(imgA);
      cell.appendChild(imgB);
      this.container.appendChild(cell);
      this.cells.push({ el: cell, imgA, imgB, flipped: false });
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
    const staggerDelay = 0.025;
    const fadeDuration = 0.22;

    if (this.tl) {
      this.tl.kill();
    }

    this.tl = gsap.timeline({
      onComplete: () => { this.isAnimating = false; }
    });

    // Phase 1: Set new images on hidden layers
    this.cells.forEach((cell, i) => {
      const nextImg = cell.flipped ? cell.imgA : cell.imgB;
      if (shuffledImages[i]) {
        nextImg.src = shuffledImages[i].src;
      }
    });

    // Phase 2: Batch crossfade — all cells in ONE tween with stagger
    this.cells.forEach((cell, i) => {
      const fadeOutLayer = cell.flipped ? cell.imgB : cell.imgA;
      const fadeInLayer = cell.flipped ? cell.imgA : cell.imgB;

      this.tl.to(fadeInLayer, {
        opacity: 1,
        duration: fadeDuration,
        ease: 'power1.inOut',
        force3D: true
      }, i * staggerDelay);

      this.tl.to(fadeOutLayer, {
        opacity: 0,
        duration: fadeDuration,
        ease: 'power1.inOut',
        force3D: true
      }, i * staggerDelay);

      cell.flipped = !cell.flipped;
    });
  }

  destroy() {
    if (this.timeoutId) {
      clearInterval(this.timeoutId);
      this.timeoutId = null;
    }
    if (this.tl) {
      this.tl.kill();
      this.tl = null;
    }
  }
}
