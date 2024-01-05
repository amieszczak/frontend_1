/*-------------------------NAV_OPTION_WEB-----------------------------*/

let nav = document.querySelector("nav");
let dropdown = document.querySelector(".features");

dropdown.onclick = function () {
  nav.classList.toggle("active");
  nav.classList.remove("active1");
};

let dropdown1 = document.querySelector(".company");

dropdown1.onclick = function () {
  nav.classList.toggle("active1");
  nav.classList.remove("active");
};

let middlePageContent = document.querySelector(".middle-page-content");

middlePageContent.onclick = function () {
  nav.classList.remove("active");
  nav.classList.remove("active1");
};

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
/*-------------------------NAV_OPTION_MOBILE_DROPDOWN-----------------------------*/
/*-------------------------DROPDOWN_1-----------------------------*/
let featuresMobile = document.querySelector(".features-mobile");

featuresMobile.onclick = function () {
  nav.classList.toggle("active-mobile-dropdown-features");
};

/*-------------------------DROPDOWN_1-----------------------------*/
/*-------------------------DROPDOWN_2-----------------------------*/
let companyMobile = document.querySelector(".company-mobile");

companyMobile.onclick = function () {
  nav.classList.toggle("active-mobile-dropdown-company");
};

/*-------------------------DROPDOWN_2-----------------------------*/

/*-------------------------NAV_OPTION_MOBILE_DROPDOWN-----------------------------*/
