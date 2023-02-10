(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header-nav-bar");
  const menuCloseItem = document.querySelector(".header-nav-close");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header-nav-bar-active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header-nav-bar-active");
  });
})();
