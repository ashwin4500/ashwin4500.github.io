const currentPage = window.location.pathname.split('/').pop() || 'index.html';

for (const link of document.querySelectorAll('.nav-links a')) {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
}
