function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(-23.550172, -46.624208),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapId: 'af21abfa37ef912a'
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    var ponto = new google.maps.LatLng(-23.550172,-46.624208);
    var marker = new google.maps.Marker({
        position: ponto,
        map: map,
        icon: "images/ping.png"
    });
    
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            // LÓGICA PARA ABRIR O MODAL
        }
    })(marker))
}
