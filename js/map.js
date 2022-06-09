mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0dGktdiIsImEiOiJja3VmdTZrNDYwcHkwMnBxazNqYWY1NGI0In0.R-6uSuzRj2vUMTR13mUWXQ';
export default () => {
  //map creation
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    zoom: 15.76,
    center: [2.33635, 48.86092],
});
  //map navigation bar
  const nav = new mapboxgl.NavigationControl({
  showCompass: true,
  showZoom: true,
});

  map.addControl(nav, 'top-right');

  //add markers to the map
  const marker1 = new mapboxgl.Marker({ color: 'black'})
.setLngLat([2.3364, 48.86091])
.addTo(map);

  const marker2 = new mapboxgl.Marker({ color: 'grey'})
.setLngLat([2.3333, 48.8602])
.addTo(map);

  const marker3 = new mapboxgl.Marker({ color: 'grey'})
.setLngLat([2.3397, 48.8607])
.addTo(map);

  const marker4 = new mapboxgl.Marker({ color: 'grey'})
.setLngLat([12.3330, 48.8619])
.addTo(map);

  const marker5 = new mapboxgl.Marker({ color: 'grey'})
.setLngLat([2.3365, 48.8625])
.addTo(map);


  window.addEventListener('resize', () => {
    let width = document.documentElement.clientWidth;
    if (width <= 768) {
      map.setZoom(15.7);
      map.setCenter([2.33784, 48.86157]);
    }
    if (width <= 420) {
      map.setZoom(16);
    }
  });
} 