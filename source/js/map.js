const LAT = 59.96836;
const LNG = 30.31758;

const map = L.map('map')
  .setView({
    lat: LAT,
    lng: LNG,
  }, 90);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const markerIcon = L.icon({
  iconUrl: './img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 52],
});

const marker = L.marker(
  {
    lat: LAT,
    lng: LNG,
  },
  {
    icon: markerIcon,
  },
).addTo(map);
