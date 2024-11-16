const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});


menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

let swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


document.getElementById("wa").addEventListener("click", function() {
  // Nomor WhatsApp yang ingin dihubungi
  var phoneNumber = "+6285790203056";

  // Membuat URL WhatsApp
  var whatsappUrl = "https://wa.me/" + phoneNumber;

  // Mengarahkan ke URL WhatsApp
  window.location.href = whatsappUrl;
});

document.getElementById("what").addEventListener("click", function() {
  // Nomor WhatsApp yang ingin dihubungi
  var phoneNumber = "+6285790203056";

  // Membuat URL WhatsApp
  var whatsappUrl = "https://wa.me/" + phoneNumber;

  // Mengarahkan ke URL WhatsApp
  window.location.href = whatsappUrl;
});