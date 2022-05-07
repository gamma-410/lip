// accordion-menu
const menu = document.querySelectorAll(".js-menu");

function toggle() {
  const content = this.nextElementSibling;
  this.classList.toggle("is-active");
  content.classList.toggle("is-open");
}

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", toggle);
}




// header-script
const responsive_menu_btn = document.querySelector('.responsive_btn');
responsive_menu_btn.addEventListener('click', menuToggle);

function menuToggle() {
    const header_menu_detail = document.querySelector('.header_nav');
    header_menu_detail.classList.toggle('menu_active');
}