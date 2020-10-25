const navbarMenu = document.getElementById("navbar__list");
//select sections
const sections = document.querySelectorAll("section");

//build a nav
function createNav() {
    for (let item of sections) {
        let section = document.createElement("li");
        section.className = "menu__link";
        section.innerText = item.dataset.nav;
        section.setAttribute('data-id', item.id);
        /*navigation scroll*/
        section.addEventListener("click", function () {
            item.scrollIntoView({behavior: "smooth"});
        });
        navbarMenu.appendChild(section);
    }
}
/* Scrolls feature and highlight each section being viewed*/
createNav();

jQuery(window).scroll(function () {
    var position = jQuery(this).scrollTop();

    jQuery('section').each(function () {
        var target = jQuery(this).offset().top;

        var id = jQuery(this).attr('id');
        jQuery('#navbar__list li[data-id=' + id + ']').removeClass('active');
        if (position >= target - 120) {
            jQuery('#navbar__list li').removeClass('active');
            jQuery('#navbar__list li[data-id=' + id + ']').addClass('active');

            jQuery('section').removeClass('active-section');
            jQuery('#'+id).addClass('active-section');
        }
    });

});
