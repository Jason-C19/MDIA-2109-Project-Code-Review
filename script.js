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
