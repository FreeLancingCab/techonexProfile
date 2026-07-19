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
      cell.className = 'relative overflow-hidden';
      cell.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';

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
      this.shuffleGrid();
    }, this.interval);
  }

  shuffleGrid() {
    const shuffledImages = this.shuffle([...this.images]);
    const delay = 80;

    this.cells.forEach((cell, i) => {
      setTimeout(() => {
        cell.style.opacity = '0';
        cell.style.transform = 'scale(0.9)';

        setTimeout(() => {
          const img = cell.querySelector('img');
          if (img && shuffledImages[i]) {
            img.src = shuffledImages[i].src;
          }
          cell.style.opacity = '1';
          cell.style.transform = 'scale(1)';
        }, 300);
      }, i * delay);
    });
  }

  destroy() {
    if (this.timeoutId) {
      clearInterval(this.timeoutId);
    }
  }
}
