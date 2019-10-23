function initMap() {
  //Your location
  const loc = { lat: 50.4501, lng: 30.5234 };

  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    center: loc,
    zoom: 14
  });

  //Marker
  const marker = new google.maps.Marker({ position: loc, map: map });
}
