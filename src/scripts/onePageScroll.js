(function(){
    const sections = $('section');
    const display = $('.maincontent');
    const sideMenu = $('.fixed-menu');
    const menuItems = sideMenu.find(".fixed-menu__item");
    const mobileDetect = new MobileDetect(window.navigator.userAgent);
    const isMobile = mobileDetect.mobile();

let inScroll = false;

sections.first().addClass('active');

const countSectionPosition = (sectionEq) =>{
    return sectionEq * -100;
};

const changeMenuThemeForSection = (sectionEq)=>{
    const currentSection = sections.eq(sectionEq);
    const menuTheme = currentSection.attr('data-sidemenu-theme');
    const activeClass = "fixed-menu--shadowed";

        if(menuTheme==='black'){
            sideMenu.addClass(activeClass);
        }else{
            sideMenu.removeClass(activeClass);
        }
};

const resetActiveClassForItem = (items, itemEq, activeClass)=>{
    items.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
};
const performTransition = (sectionEq) =>{

    if (inScroll) return;
        inScroll = true;

    const position = countSectionPosition(sectionEq);
    changeMenuThemeForSection(sectionEq);

    display.css({
        transform: `translateY(${position}%)`,
    });

    resetActiveClassForItem(sections, sectionEq, "active");
    setTimeout(() => {
        inScroll = false;

        resetActiveClassForItem(menuItems, sectionEq, "fixed-menu__item--active");
        // sideMenu
        // .find('.fixed-menu__item')
        // .eq(sectionEq)
        // .addClass('fixed-menu__item--active')
        // .siblings()
        // .removeClass('fixed-menu__item--active');
    }, 1300);
    };


const scrollViewport = () =>{
    const activeSection = sections.filter('.active');
    const prevSection = activeSection.prev();
    const nextSection = activeSection.next();//console.log(nextSection)
    
    return{
        next(){
            if (nextSection.length){
                performTransition(nextSection.index());
            }
        },
        prev(){
            if (prevSection.length){
                performTransition(prevSection.index());
            }
        },
    };
};

$(window).on('wheel', (e)=>{

    const deltaY = e.originalEvent.deltaY;
    const scroller =  scrollViewport();

    if (deltaY > 0) {
        scroller.next();
        // scrollViewport("next");
    }

    if (deltaY < 0){
        scroller.prev();
        // scrollViewport("prev");
    }
});

$(window).on('keydown', (e)=>{

    const tagName = e.target.tagName.toLowerCase();
    const scroller =  scrollViewport();

    if(tagName != "input" && tagName != "textarea"){

        switch (e.keyCode) {
            case 38:
                scroller.prev();
                // scrollViewport("prev");
                break;
    
            case 40: 
                scroller.next();
                break;
                // scrollViewport("next");
        }

    }
});

$(".wrapper").on('touchmove', e => e.preventDefault());

$('[data-scroll-to]').click(e =>{
    e.preventDefault;

    const $this = $(e.currentTarget);
    const target = $this.attr('data-scroll-to');//...
    const reqSection = $(`[data-section-id = ${target}]`);
    
    performTransition(reqSection.index());
    
});

if (isMobile){
    $("body").swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction) {
            const scroller = scrollViewport();
            let scrollDirection = "";
    
            if(direction === "up") scrollDirection = "next";
            if(direction === "down") scrollDirection = "prev";
    
            scroller[scrollDirection]();

            if(scroller[scrollDirection]){
                scroller[scrollDirection]();
            }
        },
      });       
}


})();

