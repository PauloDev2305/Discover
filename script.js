const toggleMode = () => {
  const html = document.documentElement

  // ! Esté atributo toggle é a mesma coisa que o if e esle feito abaixo
  html.classList.toggle("light")
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  // pegar a tag img
  const img = document.querySelector("#profile img ")

  // substiruir img
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img light
    img.setAttribute("src", "./src/assets/avatar-light.png")
  } else {
    // se estiver sem light mode, manter img normal
    img.setAttribute("src", "./src/assets/avatar.png")
  }
}