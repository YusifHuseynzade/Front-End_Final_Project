let map_parameters = { center: { lat: 40.37735, lng: 49.85400 }, zoom: 8 };
let map = new google.maps.Map(document.getElementById('map'), map_parameters);

let flag = 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png';

let position = {
    position: { lat: 40.37735, lng: 49.85400 },
    map: map, icon: flag, title: "Code Academy Baku"
};

let marker = new google.maps.Marker(position);

function marker_clicked() {
    info.setContent(this.getTitle());
    info.open(map, this);
}

let info = new google.maps.InfoWindow();
marker.addListener('click', marker_clicked);
