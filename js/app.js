/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */
/**
 * Define Global Variables
 *
 */
const navbarMenu = document.getElementById("navbar__list");
//select sections
const sections = document.querySelectorAll("section");
//build a nav
function createNav() {
  for (let item of sections) {
    let section = document.createElement("li");
    section.className = "menu__link";
    section.innerText = item.dataset.nav;
    section.addEventListener('click', function () {
            item.scrollIntoView({behavior: "smooth"})
        })
    navbarMenu.appendChild(section);
  }
}
createNav();
const section1 = document.getElementsByClassName("firstSection");
const section2 = document.getElementsByClassName("secondSection");
const section3 = document.getElementsByClassName("thirdSection");
/*Navigation scroll*/
function myfunction() {
var element = document.getElementById("menu__link");
element.scrollIntoView("landing__container");
element.scrollIntoView({behavior: "smooth"});
document.addEventListener('click', section1)
}
