let player = document.getElementById('video');
let playerContainer = $('.player');

// const durationSec = player.duration();
// const completedSec = player.currentTime();
// const completedPercent = (completedSec / durationSec) * 100;

// $(".player__sircle").css({
//     left: `${completedPercent}%`
//   });

//  $(".player__playback").click(e => {
//     const bar = $(e.currentTarget);
//     const clickedPosition = e.originalEvent.layerX;

//     const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
//     const newPlaybackPositionSec =
//     (durationSec / 100) * newButtonPositionPercent;

//     $(".player__sircle").css({
//         left: `${newButtonPositionPercent}%`
//       });

//     player.seekable(newPlaybackPositionSec);
//  });


const onPlayerReady = ()=>{
        let interval;
        // const durationSec = player.duration;
        

    interval = setInterval(() => {
        const completedSec = player.currentTime;
        
        console.log(player.duration);
        const completedPercent = (completedSec / player.duration) * 100;

        $(".player__sircle").css({
                left: `${completedPercent}%`
              });        
    }, 1000);

}


let eventsInit = ()=>{
    $('.player__start').click(e=>{
        e.preventDefault();

        const btn = $(e.currentTarget);

        // if(playerContainer.hasClass('paused')){

            // playerContainer.removeClass('paused');
            // player.pause();  
            // $('.pause').css({
            //     display: 'none'
            // })
            // $('.player__start').css({
            //     display: 'block'
            // })       
        // }else{
            playerContainer.addClass('paused');
            player.play();
            $('.pause').css({
                display: 'block'
            });
            $('.player__start').css({
                display: 'none'
            });
        // }
        playerContainer.addClass('player--active');

    });

    $('.pause').click(e=>{
        e.preventDefault();

        playerContainer.removeClass('paused');
        player.pause();  
        $('.pause').css({
            display: 'none'
        })
        $('.player__start').css({
            display: 'block'
        })    
        playerContainer.removeClass('player--active'); 
    })
    $(".player__playback").click(e => {
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
    
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        const newPlaybackPositionSec =
        (player.duration / 100) * newButtonPositionPercent;
    
        $(".player__sircle").css({
            left: `${newButtonPositionPercent}%`
          }); 

          player.currentTime =  newPlaybackPositionSec;       
     });

     $('.player__splash--start').click(e=>{
        player.play();
        playerContainer.addClass('player--active');
        $('.pause').css({
            display: 'block'
        });
        $('.player__start').css({
            display: 'none'
        });
     });

    $('.player__volume--icon').click(e=>{
        if (player.volume > 0){
            player.volume = 0;
            $('.volume--turn').css({
                display: 'block'
            });
        }else{
            player.volume = 1;
            $('.volume--turn').css({
                display: 'none'
            });
        }
    })

}


eventsInit();
onPlayerReady();

// $(player).ready(e=>{
//     onPlayerReady();
// });

