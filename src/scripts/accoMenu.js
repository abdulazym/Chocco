

// const measureWidth = (item)=>{
//     const screenWidth = $(window).width();
//     const container = item.closest('.accordeon__list');
//     const titleBlocks = container.find('.accordeon__trigger');
//     const titleWidth = titleBlocks.width() * titleBlocks.length;

//     const isMobile = window.matchMedia('(max-width: 768px)').matches;

//     if(isMobile) {
//         return screenWidth - titleWidth;
//     } else {
//         return 530;
//     }
// }
(function() {
    function Accordeon(selector, active) {
        const acco = document.querySelector(selector);
        const items = document.querySelector('[data-list]').children;
    
        acco.addEventListener('click', function(e){
            e.preventDefault();
    
            const target = e.target.closest('[data-trigger]');
            const closeElem = e.target.closest('.hamburger--open');
            const block = e.target.closest('.accordeon__item');
    
            if(closeElem) {
                block.classList.remove(active);
            }
    
            if (!target) return;
            
            const item = target.parentNode;
    
            if (item.classList.contains(active)){
                item.classList.remove(active);
            }else{
                for (let i = 0; i < items.length; i++) {
                    items[i].classList.remove(active);
                }
    
                item.classList.add(active);
    
                // const closeElem = e.target.classList.contains('hamburger--open');
    
                // if (closeElem){
                //     item.classList.remove(active);
                // }
            }
            const screenWidth = $(window).width();
            const container = block.closest('.accordeon__list');
            // const titleBlocks = container.find('.accordeon__trigger');
            // const titleWidth = titleBlocks.width() * titleBlocks.length;
        })
    }
    
    new Accordeon('#acc-menu', 'accordeon__item-active');
})();
