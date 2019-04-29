const mapboxgl = require("mapbox-gl");


module.exports = function buildMarker(mark, coorArr){
    let style;
    if(mark === 'activity'){
        style = 'http://i.imgur.com/WbMOfMl.png'
    } else if (mark === 'hotel'){
        style = 'http://i.imgur.com/D9574Cu.png'
    } else {
        style = 'http://i.imgur.com/cqR6pUI.png'
    }

    const marker = document.createElement("div"); // Create a new, detached DIV
    marker.style.width = "32px";
    marker.style.height = "39px";
    marker.style.backgroundImage = `url(${style})`;

    new mapboxgl.Marker(marker)
        .setLngLat(coorArr)
        .addTo(map);
}