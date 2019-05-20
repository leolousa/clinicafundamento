// Initialize and add the map
function initMap() {
  // A localização da Clínica -15.831523, -48.017480
  var fundamento = {lat: -15.831523, lng: -48.017480};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 18, center: fundamento});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: fundamento,
    map: map,
    title: 'Clínica FundamenTO',
    icon:'img/fundamento@64.png',
    animation: google.maps.Animation.BOUNCE
  });
}