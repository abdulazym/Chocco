(function(){
    const menu =document.querySelector('.menu');
const openMenu = document.querySelector('.menu--open');
const hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click', (e)=>{
    e.preventDefault();

    menu.classList.toggle('menu--open');
    hamburger.classList.toggle('hamburger--open')
    
    if (menu.classList.contains('menu--open')) {
        document.body.style.overflow = 'hidden';
    }else{
        document.body.style.overflow = '';
    }
})




})();

