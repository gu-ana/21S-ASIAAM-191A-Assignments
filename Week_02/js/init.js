// JavaScript const variable declaration
const map = L.map('map').setView([0,0], 2);

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//JavaScript let variable declaration to create a marker
let marker1 = L.marker([35.689487, 139.691711]).addTo(map)
		.bindPopup('Weebing out in Tokyo')
		.openPopup();

let marker2 = L.marker([21.306944, -157.858337]).addTo(map)
.bindPopup('Sipping Pina Coladas in Hawaii')
.openPopup();

let marker3 = L.marker([47.6062, -122.3321]).addTo(map)
.bindPopup('Potential city I want to work in')
.openPopup();

let marker4 = L.marker([41.8781, -87.6298]).addTo(map)
.bindPopup('Potential city I want to work in')
.openPopup();