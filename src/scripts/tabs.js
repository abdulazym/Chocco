(function(){
    const tabs = document.querySelectorAll('.reviews__display');
    const buttons = document.querySelectorAll('.reviews__switcher-item');

function change (target, index, buttons, tabs,  buttonActive, tabActive){

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('interactive-avatar--active');
        tabs[i].classList.remove('reviews__display-active');
    }
    target.classList.add(buttonActive);
    tabs[index].classList.add(tabActive);
}


    for (let index = 0; index < buttons.length; index++) {
        const buttonElem = buttons[index];
        
        buttonElem.addEventListener('click', (e)=>{
            e.preventDefault();
            
            change(e.currentTarget, index, buttons, tabs, 'interactive-avatar--active', 'reviews__display-active');
        });
    }

})();

