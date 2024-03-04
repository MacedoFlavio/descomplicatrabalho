const mostraEsconderMenu = () => {
  if (mostrarMenu.classList.contains("escondeMenu")) {
    mostrarMenu.classList.toggle("mostra-menu");
    mostrarMenu.classList.remove("esconde-menu");
  } else {
    mostrarMenu.classList.toggle("esconde-menu");
    mostrarMenu.classList.remove("mostra-menu");
  }
};

hamburguer.addEventListener("click", () => {
  mostraEsconderMenu();
});
