document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("favoritos-container");
  
    const receitas = [
      {
        nome: "Lasanha",
        chave: "favorito-lasanha",
        imagem: "lasanhinha.jpg",
        link: "lasanha.html"
      },
      {
        nome: "File de peixe",
        chave: "favorito-file",
        imagem: "filezin.jpg",
        link: "file.html"
      },
      {
        nome: "Arroz carreteiro",
        chave: "favorito-carreteiro",
        imagem: "arrozcarreteiro.jpg",
        link: "carreteiro.html"
      },
      {
        nome: "Bolo de chocolate",
        chave: "favorito-bolo",
        imagem: "bolodechoc.jpg",
        link: "bolo.html"
      },
      {
        nome: "Pudim de leite",
        chave: "favorito-pudim",
        imagem: "pudim.jpg",
        link: "pudim.html"
      },
      {
        nome: "Arroz doce",
        chave: "favorito-arroz",
        imagem: "arrozdoce.jpg",
        link: "arroz.html"
      },
      {
        nome: "Coxinha vegana",
        chave: "favorito-coxinha",
        imagem: "coxinha.jpg",
        link: "coxinha.html"
      },
      {
        nome: "Torta de maçã",
        chave: "favorito-torta",
        imagem: "torta.jpg",
        link: "torta.html"
      },
      {
        nome: "Ratatouille",
        chave: "favorito-rato",
        imagem: "ratatouille.jpg",
        link: "rato.html"
      },
    ];
  
    let encontrouFavorito = false;
  
    receitas.forEach((receita) => {
      const favorito = localStorage.getItem(receita.chave) === "true";
      if (favorito) {
        encontrouFavorito = true;
        const card = document.createElement("a");
        card.href = receita.link;
        card.className = "card-receita";
        card.innerHTML = `
          <img src="${receita.imagem}" alt="${receita.nome}" />
          <p>${receita.nome}</p>
        `;
        container.appendChild(card);
      }
    });
  
    if (!encontrouFavorito) {
      const msg = document.createElement("p");
      msg.textContent = "Nenhuma receita está favoritada!";
      msg.className = "mensagem";
      container.appendChild(msg);
    }
  
    const botao = document.getElementById("botao");
    const menu = document.getElementById("menuB");
    botao.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  });
  