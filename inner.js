    const track = document.querySelector('.carrossel-track');
    const slides = Array.from(document.querySelectorAll('.slide'));
    let a = 0;

    function mover() {
      a = (a + 1) % slides.length;
      track.style.transform = `translateX(-${a * 100}%)`;
    }

setInterval(mover, 3000);

const botao = document.getElementById('botao')
const menuB = document.getElementById('menuB')

botao.addEventListener('click', function(){

menuB.classList.toggle('show')

})

