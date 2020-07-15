


(function() {
    const measureWidth = (item)=>{
    item = $(item) 
        const screenWidth = $(window).width();
        const container = item.closest('.accordeon__list');
        const titleBlocks = container.find('.accordeon__trigger');
        const titleWidth = titleBlocks.width() * titleBlocks.length;
        const triggerWidth = $('.accordeon__trigger').width();
    
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        const isPhone = window.matchMedia('(max-width: 480px)').matches;

        if(isPhone){
            return screenWidth - triggerWidth;
        }

        if(isMobile) {
            return screenWidth - titleWidth;
        } else {
            return 530;
        }
    }

    function Accordeon(selector, active) {
        const acco = document.querySelector(selector);
        const items = document.querySelector('[data-list]').children;
    
        acco.addEventListener('click', function(e){
            e.preventDefault();
    
            const target = e.target.closest('[data-trigger]');
            const closeElem = e.target.closest('.hamburger--open');
            const block = e.target.closest('.accordeon__item');
            const closeWrap = e.target.closest('.accordeon__wrap');
            
            if(closeElem) {
                block.classList.remove(active);
                closeWrap.style.width = 0;
            }
    
            if (!target) return;
            
            const item = target.parentNode;

           const currentWidth =  measureWidth(item);
           
           const currentWrap = item.querySelector('.accordeon__wrap');

           const content = item.querySelector('.accordeon__content');
    
            if (item.classList.contains(active)){
                currentWrap.style.width = 0;
                item.classList.remove(active);
            }else{
                for (let i = 0; i < items.length; i++) {
                    items[i].querySelector('.accordeon__wrap').style.width = 0;
                    items[i].classList.remove(active);
                }
    
                item.classList.add(active);
                currentWrap.style.width = currentWidth + "px";
                content.style.minWidth = currentWidth + "px";
                // const closeElem = e.target.classList.contains('hamburger--open');
    
                // if (closeElem){
                //     item.classList.remove(active);
                // }
            }

            
            // const screenWidth = $(window).width();
            // const container = block.closest('.accordeon__list');
            // const titleBlocks = container.find('.accordeon__trigger');
            // const titleWidth = titleBlocks.width() * titleBlocks.length;
        })
    }
    
    new Accordeon('#acc-menu', 'accordeon__item-active');
})();
