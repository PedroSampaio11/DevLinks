document.addEventListener("DOMContentLoaded", function () {
    const btnMostrarProjetos = document.querySelector(".btn-mostrar-projetos");
    const projetos = document.querySelectorAll(".projeto");
  
    let mostrandoTodosProjetos = false;
  
    btnMostrarProjetos.addEventListener("click", function () {
      if (mostrandoTodosProjetos) {
        projetos.forEach(projeto => {
          if (!projeto.classList.contains("ativo")) {
            projeto.style.display = "none";
          }
        });
        btnMostrarProjetos.innerText = "Mostrar mais";
        mostrandoTodosProjetos = false;
      } else {
        projetos.forEach(projeto => {
          projeto.style.display = "block";
        });
        btnMostrarProjetos.innerText = "Mostrar menos";
        mostrandoTodosProjetos = true;
      }
    });
});