document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const recipeCards = document.querySelectorAll('.recipe-card');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {

        filterButtons.forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');
  
        const category = button.getAttribute('data-category');
  
        recipeCards.forEach(card => {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  
    const botao = document.getElementById('botao');
    const menuB = document.getElementById('menuB');
  
    botao.addEventListener('click', function () {
      menuB.classList.toggle('show');
    });
  });
  