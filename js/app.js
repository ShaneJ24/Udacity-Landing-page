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
const section1 = document.getElementById("sectionOne");
const section2 = document.getElementById("sectionTwo");
const section3 = document.getElementById("sectionThree");

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