
function openMenu() {
  document.body.classList.add("menu--open");

  document.querySelector(".navbar .btn__menu")
    .setAttribute("aria-expanded", "true");
}

function closeMenu() {
  document.body.classList.remove("menu--open");

  document.querySelector(".navbar .btn__menu")
    .setAttribute("aria-expanded", "false");
}

// Close menu after selecting a link
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".modal__link").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
});
