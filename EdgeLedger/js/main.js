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

// Sticky menu background
window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = '0.8';
  } else {
    document.querySelector('#navbar').style.opacity = '1';
  }
});

// Smooth Scrolling by JQuery
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

// Enter current Year in copyright span
const date = new Date().getFullYear();
document.querySelector('.cur-date').textContent = date.toString();
