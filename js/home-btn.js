const btn = document.querySelector('.home__home-btn');
const mainbg = document.querySelector('.home-bg');
// const mainblocks = document.querySelector('.hide');

btn.addEventListener('click', () => {
   mainbg.classList.add('slide');
   // mainblocks.classList.remove('hide');
   
   mainbg.addEventListener('transitionend', ()=>{
      mainbg.style.display = 'none'
      
   })
})