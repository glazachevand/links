const arrows = document.querySelectorAll('h2, h3, h4');
for (const item of arrows) {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
}
