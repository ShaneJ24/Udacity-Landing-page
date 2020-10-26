const navbarMenu = document.getElementById("navbar__list");
//select sections
const sections = document.querySelectorAll("section");

//build a nav
function createNav() {
  for (let item of sections) {
    let section = document.createElement("li");
    section.className = "menu__link";
    section.innerText = item.dataset.nav;
    section.setAttribute("data-id", item.id);
    /*navigation scroll*/
    section.addEventListener("click", function () {
      item.scrollIntoView({ behavior: "smooth" });
    });
    navbarMenu.appendChild(section);
  }
}

createNav();

window.addEventListener("scroll", function (e) {
  var position = window.scrollY;
  document.querySelectorAll("section").forEach((item) => {
    var target = item.offsetTop;
    var id = item.id;
    document
      .querySelector("#navbar__list li[data-id=" + id + "]")
      .classList.remove("active");
    if (position >= target - 120) {
      document.querySelectorAll("#navbar__list li").forEach((item) => {
        item.classList.remove("active");
      });
      document.querySelectorAll("section").forEach((item) => {
        item.classList.remove("active-section");
      });
      document
        .querySelector("#navbar__list li[data-id=" + id + "]")
        .classList.add("active");
      document.querySelector("#" + id).classList.add("active-section");
    }
  });
});
