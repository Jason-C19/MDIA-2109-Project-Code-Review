//Navigation-Component:
const navButtons = document.querySelectorAll(".nav__button");
const categoryButtons = document.querySelectorAll(".category-nav__button");

for (let i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener("click", function () {
    for (let j = 0; j < navButtons.length; j++) {
      navButtons[j].classList.remove("nav__button--active");
    }
    this.classList.add("nav__button--active");
  });
}

for (let i = 0; i < categoryButtons.length; i++) {
  categoryButtons[i].addEventListener("click", function () {
    for (let j = 0; j < categoryButtons.length; j++) {
      categoryButtons[j].classList.remove("category-nav__button--active");
    }
    this.classList.add("category-nav__button--active");
  });
}
