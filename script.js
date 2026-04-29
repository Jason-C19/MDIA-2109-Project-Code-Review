//Navigation://
const navButtons = document.querySelectorAll(".nav__button");

function setActiveButton(buttons, activeButton, activeClass) {
  buttons.forEach(function (button) {
    button.classList.remove(activeClass);
  });

  activeButton.classList.add(activeClass);
}

navButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    setActiveButton(navButtons, button, "nav__button--active");
  });
});

const categoryButtons = document.querySelectorAll(".category-nav__button");

categoryButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    setActiveButton(categoryButtons, button, "category-nav__button--active");
  });
});

const productSections = document.querySelectorAll(".products-section__content");

categoryButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const category = button.dataset.category;

    productSections.forEach(function (section) {
      section.classList.add("is-hidden");

      if (section.classList.contains("products--" + category)) {
        section.classList.remove("is-hidden");
      }
    });
  });
});
