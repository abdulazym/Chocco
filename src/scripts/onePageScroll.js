(function(){
    const sections = $('section');
    const display = $('.maincontent');
    const mobileDetect = new MobileDetect(window.navigator.userAgent);
    const isMobile = mobileDetect.mobile();

let inScroll = false;

sections.first().addClass('active');

const performTransition = (sectionEq) =>{

    if (inScroll === false){
        inScroll = true;

        const position = sectionEq * -100;

        const currentSection = sections.eq(sectionEq);
        const menuTheme = currentSection.attr('data-sidemenu-theme');
        const sideMenu = $('.fixed-menu');

        if(menuTheme==='black'){
            sideMenu.addClass('fixed-menu--shadowed');
        }else{
            sideMenu.removeClass('fixed-menu--shadowed');
        }

    display.css({
        transform: `translateY(${position}%)`,
    })

    sections.eq(sectionEq).addClass('active').siblings().removeClass('active');
    setTimeout(() => {
        inScroll = false;

        sideMenu
        .find('.fixed-menu__item')
        .eq(sectionEq)
        .addClass('fixed-menu__item--active')
        .siblings()
        .removeClass('fixed-menu__item--active');
    }, 650);
    }
}

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
        },
      });       
}


})();

