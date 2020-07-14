(function(){
    let myMap;

const init = () =>{
    var myMap = new ymaps.Map("map", {
        center: [42.96255723, 47.45059026],
        zoom: 12,
        controls: []
    });
    const coords = [
        [42.96683028, 47.54103068],
        [42.97288116, 47.51236323],
        [42.97691475, 47.44095210],
        [42.95018728, 47.50309352]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref:"./img/icons/marker.svg",
        iconImageSize: [46, 57],
        iconImageOffset: [-3, -42]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');

    myMap.controls.add('zoomControl', {
        float: 'none',
        position: {
            left: 40,
            top: 70
        }
    });
}

ymaps.ready(init);
})();

