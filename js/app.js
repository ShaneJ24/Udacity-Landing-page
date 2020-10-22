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
function createNav(){
  for (let item of sections){
    let section = document.createElement("li");
    section.className = "menu__link";
    section.innerText = item.dataset.nav;
    navbarMenu.appendChild(section);
    
  };  
};
createNav();

const section1 = document.getElementsByClassName("firstSection");
const section2 = document.getElementsByClassName("secondSection");
const section3 = document.getElementsByClassName("thirdSection");

/**
 * End Global Variables

 * Begin Events
 * 
*/
/* Created an event so when the section in the Nav is selected it listens for the click
   and then scrolls to that section*/
section1.addEventListener("click", function(){
    window.location = "index.html#section1"
})

section2.addEventListener("click", function(){
    window.location = "index.html#section2"
})

section3.addEventListener("click", function(){
    window.location = "index.html#section3"
})
