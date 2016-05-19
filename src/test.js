define(['leaflet', 'myproj'], function (L, MyProj) {
	  var test = {};
	  test.proj4 = MyProj.getProj4();
	  test.proj4leaflet = MyProj.getProj4Leaflet();
	  test.leaflet = L;
	  return test;
});
