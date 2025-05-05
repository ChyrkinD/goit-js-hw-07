function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input[type="number"]');
const createBoxes = (amount) => {
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
  }
  boxes.append(...elements);
};
const destroyBoxes = () => {
  boxes.innerHTML = '';
};
createBtn.addEventListener('click', () => {
  const amount = input.value;
  createBoxes(amount);
});
destroyBtn.addEventListener('click', destroyBoxes);