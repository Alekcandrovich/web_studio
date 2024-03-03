document.addEventListener('DOMContentLoaded', function () {
  function hideAllProducts() {
    const products = document.querySelectorAll('.content__clik');
    products.forEach(product => {
      product.style.display = 'none';
    });
  }

  function showProductsByType(productType) {
    const products = document.querySelectorAll(`.content__clik.js-${productType}`);
    products.forEach(product => {
      product.style.display = 'block';
    });
  }

  function handleFilterClick(event) {
    event.preventDefault();
    const button = event.target;
    const filterType = button.dataset.filter;

    const filterButtons = document.querySelectorAll('.button-filter');
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    hideAllProducts();

    if (filterType === 'all') {
      const allProducts = document.querySelectorAll('.content__clik');
      allProducts.forEach(product => {
        product.style.display = 'block';
      });
    } else {
      showProductsByType(filterType);
    }
  }

  const filterButtons = document.querySelectorAll('.button-filter');
  filterButtons.forEach(button => {
    button.addEventListener('click', handleFilterClick);
  });

  const overlayLinks = document.querySelectorAll('.overlay-action');
  overlayLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
    });
  });
});
