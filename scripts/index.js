const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const cards = document.querySelector('.container');
const dots = document.querySelectorAll('.button__dot');

let currentIndex = 0;
const cardWidth = document.querySelector('.stages__small').offsetWidth;

updateDots();

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex --;
    const offset = -currentIndex * cardWidth;
    cards.style.transform = `translateX(${offset}px)`;
    updateCarousel();
  }
  updateButtonsState()
});

nextButton.addEventListener('click', () => {
  if (currentIndex < cards.children.length - 1) {
    currentIndex ++;
    const offset = -currentIndex * cardWidth;
    cards.style.transform = `translateX(${offset}px)`;
    updateCarousel();
  }
  updateButtonsState()
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

function updateCarousel() {
  cards.scrollTo({
    left: currentIndex * cards.offsetWidth,
    behavior: 'smooth'
  });
  updateDots();
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('button__dot_active', index === currentIndex);
  });
}

// setInterval(clickNext, 4000);

function updateButtonsState() {
  nextButton.disabled = currentIndex >= cards.children.length - 1;
  prevButton.disabled = currentIndex <= 0;

  // Добавляем или удаляем класс disabled в зависимости от состояния кнопок
  nextButton.classList.toggle('button__right_disabled', nextButton.disabled);
  prevButton.classList.toggle('button__left_disabled', prevButton.disabled);
}


document.getElementById('supportButton').addEventListener('click', function() {
  document.getElementById('introSection').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('aboutButton').addEventListener('click', function() {
  document.getElementById('infoSection').scrollIntoView({ behavior: 'smooth' });
});



if (window.matchMedia("(max-width: 768px)").matches) {
  // Получаем ссылки на ячейки с нужными классами
  const cell1 = document.querySelector('.info__table-cell-one');
  const cell2 = document.querySelector('.info__table-cell-two');

  // Получаем текстовое содержимое ячеек
  const text1 = cell1.innerText;
  const text2 = cell2.innerText;

  // Меняем текстовое содержимое ячеек местами
  cell1.innerText = text2;
  cell2.innerText = text1;
}
