/*-------------------------NAV_OPTION_WEB-----------------------------*/

const nav = document.querySelector("nav");
const dropdownFeatures = document.querySelector(".features");

const dropdownCompany = document.querySelector(".company");
const middlePageContent = document.querySelector(".middle-page-content");

const careersButton = document.querySelector(
  ".navigation-menu ul li:nth-child(3)"
);
const aboutButton = document.querySelector(".navigation-menu ul li:last-child");

if (window.innerWidth > 660) {
  dropdownFeatures.onclick = function () {
    nav.classList.toggle("active-features");
    nav.classList.remove("active-company");
  };

  dropdownCompany.onclick = function () {
    nav.classList.toggle("active-company");
    nav.classList.remove("active-features");
  };

  middlePageContent.onclick = function () {
    nav.classList.remove("active-features", "active-company");
  };
} else if (window.innerWidth < 660) {
  dropdownFeatures.onclick = function () {
    nav.classList.toggle("active-features");
  };
  dropdownCompany.onclick = function () {
    nav.classList.toggle("active-company");
  };
}

careersButton.addEventListener("click", () => {
  nav.classList.remove("active-features", "active-company");
});

aboutButton.addEventListener("click", () => {
  nav.classList.remove("active-features", "active-company");
});

/*-------------------------NAV_OPTION_WEB-----------------------------*/
/*-------------------------NAV_MENU_MOBILE-----------------------------*/
let menuButton = document.querySelector(".hamburger-menu");
let menuButtonExit = document.querySelector(".menu-slide-exit");

menuButton.onclick = function () {
  nav.classList.add("active-mobile");
};

menuButtonExit.onclick = function () {
  nav.classList.remove("active-mobile");
};

/*-------------------------NAV_MENU_MOBILE-----------------------------*/
