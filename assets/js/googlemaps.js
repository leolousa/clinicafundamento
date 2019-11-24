// GOOGLE MAPS
// Initialize and add the map
function initMap() {
  // A localização da Clínica -15.841678, -48.023933
  var fundamento = {lat: -15.841678, lng: -48.023933};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: fundamento});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: fundamento,
    map: map,
    title: 'Clínica FundamenTO',
    icon:'assets/img/fundamento@32.png',
    animation: google.maps.Animation.BOUNCE,
    disableDefaultUI: true
  });
  var styles = {
    default: null,
    hide: [
      {
        featureType: 'poi.business',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'transit',
        elementType: 'labels.icon',
        stylers: [{visibility: 'on'}]
      }
    ]
  };

  map.setOptions({styles: styles['hide']});
}