(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['leaflet', 'proj4'], factory);
	} else if (typeof module === 'object' && typeof module.exports === "object") {
		// Node/CommonJS
		module.exports = factory(require('leaflet'), require('proj4'));
	} else {
		// Browser globals
		factory(root.L, root.proj4);
	}
  }(this, function (L, proj4) { // pas d'alias sur ce projet...
	  L.Proj = {
		  testProj4Leaflet : "testProj4Leaflet",
		  testProj4 : proj4.testProj4
	  };
	  return L.Proj;
  }));
