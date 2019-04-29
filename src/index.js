console.log('hey world');

const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = "pk.eyJ1IjoiYWdlaXNtYXIiLCJhIjoiY2p2MmpxNm1sMHhnaTQ0b2JnaTZka2xydSJ9.5W2gYT_-3QQre_Qvr7lfDw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

buildMarker("hotel", [-74.009151, 40.705086]);