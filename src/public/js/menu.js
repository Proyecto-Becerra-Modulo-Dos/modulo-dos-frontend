let listElements = document.querySelectorAll(".list__button--click");

listElements.forEach((element) => {
  element.addEventListener("click", () => {
    // Cerrar todos los menús abiertos
    listElements.forEach((el) => {
      if (el !== element) {
        el.classList.remove("arrow");
        el.nextElementSibling.style.height = "0";
      }
    });

    // Alternar el menú clicado
    element.classList.toggle("arrow");

    let height = 0;
    let menu = element.nextElementSibling;
    if (menu.clientHeight == "0") {
      height = menu.scrollHeight;
    }

    menu.style.height = `${height}px`;
  });
});
