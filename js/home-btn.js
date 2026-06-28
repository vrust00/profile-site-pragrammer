const btn = document.querySelector('.home__home-btn');
const homebg = document.querySelector('.home-bg');
const blocks = document.querySelectorAll('.header, .main');

btn.addEventListener('click', () => {
   homebg.classList.add('slide');
   blocks.forEach(block => block.classList.add('unslide'));
   
   
   homebg.addEventListener('transitionend', ()=>{
      homebg.style.display = 'none'
      
   })
})