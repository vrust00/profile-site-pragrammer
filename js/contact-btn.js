const openmenu = document.querySelector('#open-menu');
const closemenu = document.querySelector('#close-menu');
const menu = document.querySelector('.menu');

openmenu.addEventListener('click', () => {
   
      menu.classList.add('menu-unslide');
   
      
})

closemenu.addEventListener('click', () => {
   
      menu.classList.remove('menu-unslide');
   
   
})

