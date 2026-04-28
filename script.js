const toggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('[data-nav] a').forEach((a) => {
  if (a.getAttribute('href') === path) a.classList.add('active');
});

const filters = {
  grade: document.querySelector('#gradeFilter'),
  subject: document.querySelector('#subjectFilter'),
  type: document.querySelector('#typeFilter')
};

const cards = [...document.querySelectorAll('[data-product]')];
function filterProducts() {
  if (!cards.length) return;
  const values = Object.fromEntries(
    Object.entries(filters).map(([k, el]) => [k, el ? el.value : 'all'])
  );

  cards.forEach((card) => {
    const isVisible = ['grade', 'subject', 'type'].every((key) =>
      values[key] === 'all' ? true : card.dataset[key] === values[key]
    );
    card.style.display = isVisible ? '' : 'none';
  });
}
Object.values(filters).forEach((el) => el && el.addEventListener('change', filterProducts));
filterProducts();
