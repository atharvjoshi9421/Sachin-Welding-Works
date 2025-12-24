// navbar-loader.js
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;
  })
  .catch(error => console.error('Error loading navbar:', error));

//navbar

  document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const productsToggleMobile = document.querySelector(".mobile-only .products-toggle");
    const productDropdown = document.querySelector(".mobile-only .product-dropdown");

    if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
      });
    }

    if (productsToggleMobile && productDropdown) {
      productsToggleMobile.addEventListener("click", (e) => {
        e.preventDefault();
        productDropdown.classList.toggle("show");
      });
    }
  });
