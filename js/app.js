$(document).ready(function(){
    $("#button").click(function(){
        var resultSearch = $("#search").val();
        // console.log(resultSearch);
        if ($("#search").val() === "italiana") {
            // console.log("italiana");
            var filteredRestaurants = restaurantes.filter(food => food.type === 'italiana');
            console.log(filteredRestaurants);

        }
        else if ($("#search").val() === "arabe") {
            // console.log("arabe");
        }
        else if ($("#search").val() === "japonesa") {
            // console.log("japonesa");
        }
        else if ($("#search").val() === "vegana") {
            // console.log("vegana");
        }
        else if ($("#search").val() === "fast-food") {
            // console.log("fast-food");
        } else {
            // console.log("Nenhum resutado! ;(");        
        }
    });
});

var map, infoWindow;
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -23.557443, lng: -46.662968},
    zoom: 6
});
infoWindow = new google.maps.InfoWindow;

// Try HTML5 geolocation.
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    infoWindow.setPosition(pos);
    infoWindow.setContent('Location found.');
    infoWindow.open(map);
    map.setCenter(pos);
    }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
    });
} else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
infoWindow.setPosition(pos);
infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
infoWindow.open(map);
}
