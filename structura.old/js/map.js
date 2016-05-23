/*
 Map stuff
*/


 // BASIC MAP STUFF
var layer1 = L.tileLayer(
    'http://{s}.legacysurvey.org/viewer/static/tiles/{id}/{ver}/{z}/{x}/{y}.jpg',{
    id:'unwise-neo1',
    subdomains:'abcd',
    ver:'1',
    attribution:'UNWISE',
});




var layer2 = L.tileLayer(
    'http://{s}.legacysurvey.org/viewer/static/tiles/{id}/{ver}/{z}/{x}/{y}.jpg',{
        id:'sdssco',
        subdomains:'abcd',
        ver:'1',
        opacity:0.7,
        attribution:'SDSS | Legacy Survey',
});
//
// var layer2 = L.tileLayer(
//     'http://{s}.legacysurvey.org/viewer/static/tiles/{id}/{ver}/{z}/{x}/{y}.jpg',{
//         id:'decals-dr2',
//         subdomains:'abcd',
//         ver:'2',
//         opacity:0.9,
//         attribution:'SDSS | Legacy Survey',
// });
// var layer2 = L.tileLayer('https://mts{s}.google.com/vt/lyrs=h@186112443&hl=x-local&src=app&x={x}&y={y}&z={z}&s=Galile', {
//     subdomains: '0123',
//     attribution: '&copy; Google Maps',
//     zIndex: 4
// })



// var layer_mellinger = L.tileLayer('{id}/{z}/{x}/{y}.png', {
//     id:'mellinger',
//     attribution:'Mellinger',
//     opacity: 1.0,
//     zIndexOffset: 1,
// });
// var layer_sdss = L.tileLayer('{id}/{z}/{x}/{y}.png', {
//     id:'sdss_invert',
//     attribution:'SDSS DR12',
//     // id:'mellinger',
//     // attribution:'Mellinger',
//     opacity: 0.6,
//     zIndexOffset:2,
// });

// var zoom = 1;
// var center = [0,0];
var zoom = 3;
// var center = [-34,2.4];w
// var center = [55.6295, -17.7264];
var center = [35.6295, -7.7264];
var map = L.map('map', {
    // layers: [layer_mellinger, layer_sdss],
    layers: [layer1, layer2],
    center: center,
    zoom: zoom,
    minZoom:0, 
    maxZoom:7,
    continuousWorld: false,
    noWrap: true,
    // unloadInvisibleTiles: true,
    // worldCopyJump: false,
    // continuousWorld: false,
    // noWrap: true,
});
// var map2 = L.map('map2', {
//     layers: [layer2],
//     center: center,
//     zoom: zoom,
//     minZoom:0,
//     maxZoom:8,
//     zoomControl: false,
//     unloadInvisibleTiles: true,
//     worldCopyJump: false,
//     continuousWorld: false,
//     noWrap: true,
// })
// map.sync(map2);
// map2.sync(map);

// Zoom Opacity
// map.on('zoomend', function(e) {
//     if (e.target._zoom >= 3) {
//         layer2.setOpacity(0.8);
//         // map.removeLayer(layer1);
//         // layer2.options.opacity = 0.99;
//     } else {
//         layer2.setOpacity(0.6);
//         // map.addLayer(layer1);
//         // layer2.options.opacity >= 0.70;
//     };
// });



/// VISUALS
 AstroControl = L.Control.Scale.extend(
     {options: {
         imperial: false,
         maxWidth: 300,
     },
     _updateMetric: function (maxMeters) {
         // meters -> arcsec
         maxArcsec = maxMeters / 30.87;
         maxUnit = maxArcsec;
         unitName = 'arcsec';
         if (maxArcsec > 7200) {
             // degrees
             maxUnit /= 3600;
             unitName = 'deg';
         } else if (maxArcsec >= 180) {
             // arcmin
             maxUnit /= 60;
             unitName = 'arcmin';
         }
         var unit = this._getRoundNum(maxUnit);
         this._mScale.style.width = this._getScaleWidth(unit / maxUnit) + 'px';
         this._mScale.innerHTML = unit + ' ' + unitName;
     },
 });
 new AstroControl().addTo(map);




// Control
// var baseLayers = {
//         "Mellinger": layer_mellinger,
//         "SDSS": layer_SDSS
//     };
// L.control.layers(baseLayers).addTo(map);



// USER INTERACTION
function lat2dec(lat) {return lat;}
function long2ra(lng) {ra = 180. - lng; if (ra < 0) {ra += 360.;}return ra;}

var popup = L.popup();
function onMapClick(e) {
    ra  = long2ra(e.latlng.lng);
    dec = lat2dec(e.latlng.lat);
    txt = 'RA,Dec = ' +  ra.toFixed(4) + ', ' + dec.toFixed(4) + ' : '+e.latlng.lng.toFixed(4)+','+e.latlng.lat.toFixed(4);
    // txt = 'RA,Dec = ' +  ra.toFixed(1) + ', ' + dec.toFixed(1);
    
    popup.setLatLng(e.latlng).setContent(txt).openOn(map);
}
map.on('click', onMapClick);



L.circleMarker([39,-8])
 .addTo(map)
 .bindPopup('Movie Centered here!')
 .openPopup();

L.polygon([
    [-2.8, -65],
    [35.8, -85],
    
    [68.2, -45],
    [68.2, 35],
    
    [35.8, 75],
    [-2.8, 55],
    ],
    {color:'white', 
    opacity:0.5,
    fillOpacity:0}
 ).addTo(map);


var locationBoxActive = true;
var locationBox = L.control();
locationBox.onAdd = function (map) {
    this._div = document.getElementById('locationbox');
    // this._div = L.DomUtil.create('div', 'info');
    return this._div;
};
locationBox.addTo(map);
function onMouseMove(e) {
    ra  = long2ra(e.latlng.lng);
    dec = lat2dec(e.latlng.lat);
    lastLatLng = e.latlng;
    if (locationBoxActive) {
        locationBox._div.innerHTML = 'RA, Dec = ' + ra.toFixed(4) + ", " + dec.toFixed(4) + ", zoom " + map.getZoom();
    }
}
map.on('mousemove', onMouseMove);
// container = locationBox.getContainer();
// L.DomEvent
//   .disableClickPropagation(container)
//   .disableScrollPropagation(container);
// L.DomEvent.on(container, 'click', locationBoxClicked);

