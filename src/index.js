'use strict';

const container = document.querySelector('.main__container'),
  scoreCount = document.querySelector('.main__header-score');
let score = 0;

function createCube() {
  //create div.cube
  const cube = document.createElement('div');
  cube.classList.add('cube');
  //create vars которые вычитают из длинны и ширины длинну и ширину кубика
  const maxX = container.clientWidth - cube.clientWidth - 70;
  const maxY = container.clientHeight - cube.clientHeight - 70;
  // создание рандомов для стороны и высоты
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  //
  cube.style.left = randomX + 'px';
  cube.style.top = randomY + 'px';

  cube.addEventListener('click', () => {
    if (cube.classList.contains('cube')) {
      cube.classList.remove('cube');
      cube.classList.add('red');
      score++;
      scoreCount.textContent = score;
      if (score === 10) {
        alert('Вы поймали 10 красных кубиков и победили!');
      }
    }
  });

  container.appendChild(cube);

  setTimeout(() => {
    if (cube.classList.contains('cube')) {
      cube.remove();
    }
  }, Math.random() * 1400);
}
setInterval(createCube, 1000);