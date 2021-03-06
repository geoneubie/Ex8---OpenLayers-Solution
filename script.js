
var url =
  'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/' + 'Specialty/ESRI_StateCityHighway_USA/MapServer';

var esriLayer = new ol.layer.Image({
      source: new ol.source.ImageArcGISRest({
        ratio: 1,
        params: {},
        url: url
      })
    });

var map = new ol.Map({
  target: 'map',
  layers: [
    esriLayer
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-105.27, 40.0150]),
    zoom: 6
  })
});