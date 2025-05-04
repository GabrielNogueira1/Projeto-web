const botao = document.getElementById('botao')
const menuB = document.getElementById('menuB')

botao.addEventListener('click', function(){

menuB.classList.toggle('show')

})

const favoritoIcone = document.getElementById('IconeFavorito');

let estadoFavorito = localStorage.getItem('favorito-file') === 'true';

function atualizarIconeFavorito() {
    if (estadoFavorito) {
        favoritoIcone.textContent = '❤️';
        favoritoIcone.classList.add('favorito');
        favoritoIcone.classList.remove('nao-Favorito');
    } else {
        favoritoIcone.textContent = '🤍';
        favoritoIcone.classList.add('nao-Favorito');
        favoritoIcone.classList.remove('favorito');
    }
}

atualizarIconeFavorito();

favoritoIcone.addEventListener('click', () => {
    estadoFavorito = !estadoFavorito;
    localStorage.setItem('favorito-file', estadoFavorito);
    atualizarIconeFavorito();
});