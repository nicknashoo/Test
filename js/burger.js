let burger = () => {
  const menu = document.querySelector('.menu');
  const burger = document.querySelector('.navbar-burger');


  burger.addEventListener("click", function () {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    if (menu.classList.contains("active")) {
      menu.style.maxWidth = 100 + '%';
    } else {
      menu.style.maxWidth = '0';
    }
  });

  menu.addEventListener("click", function () {
    menu.classList.remove('active');
    menu.style.maxWidth = '0';
    burger.classList.remove('active');
  });
}
burger();