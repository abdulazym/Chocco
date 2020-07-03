
    const slider =
        $('.slider').bxSlider({
            pager: false,
            controls: false
        });

    $('.arrow__left').on('click', (e)=>{
        e.preventDefault();

        slider.goToPrevSlide();
    });

    $('.arrow__right').on('click', (e)=>{
        e.preventDefault();
        slider.goToNextSlide();
    });