const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const cards = document.querySelector('.participant__card-container');

let currentIndex = 0;
const cardWidth = document.querySelector('.participant__card').offsetWidth;

nextButton.addEventListener('click', () => {
  if (currentIndex < cards.children.length - 3) {
    currentIndex += 4;
    const offset = -currentIndex * cardWidth;
    cards.style.transform = `translateX(${offset}px)`;
  }
  updateButtonsState();
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex -= 4;
    const offset = -currentIndex * cardWidth;
    cards.style.transform = `translateX(${offset}px)`;
  }
  updateButtonsState();
});

function updateButtonsState() {
  nextButton.disabled = currentIndex >= cards.children.length - 3;
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
