define(['leaflet', 'proj4', 'proj4leaflet'], function (L, proj4) {
	  var test = {};
	  test.proj4 = proj4;
	  test.proj4leaflet = L.Proj;
	  test.leaflet = L;
	  return test;
});
