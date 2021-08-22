function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(-23.550172, -46.624208),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapId: 'af21abfa37ef912a'
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    fetch("http://localhost:3000/reportes").then((response) => {
        return response.json();
    }).then((data) => {
        for(let i = 0; i < data.length; i++){
            var ponto = new google.maps.LatLng(data[i].lat, data[i].lng);
            var marker = new google.maps.Marker({
                position: ponto,
                map: map,
                icon: "images/ping.png",
                id: data[i].id
            });
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    $('#modal-reporte'+marker.id).modal('show');
                }
            })(marker));
        }
    });
}
