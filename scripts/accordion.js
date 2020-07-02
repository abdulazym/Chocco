
    const team = document.querySelector('.team__list');
    
    team.addEventListener('click', function(e){
        e.preventDefault();
        let link = e.target;
        let listItem = e.currentTarget;
        let name = document.querySelector('.team__name-link');

        if(link.classList.contains('team__name-link')){
            const active = listItem.querySelector('.team__item.team-accordion--active');

                //закрытие
            if(active){
                let info = active.querySelector('.info');
                info.style.height = ""; 
                active.classList.remove('team-accordion--active');
            }

                //открытие
            if(!active || active.querySelector('.team__name-link') != link){//втоорое условие??
                let currentElement = link.closest('.team__item');
                currentElement.classList.add('team-accordion--active');
                let info = currentElement.querySelector('.info');
                info.style.height = info.scrollHeight + 'px';
            }
        }
    })
