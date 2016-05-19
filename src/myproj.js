define(['require', 'leaflet', 'proj4', "proj4leaflet-0.7.x", "proj4leaflet-1.0.x"], function (require, L, proj4) {

	  var MyProj = {
          getProj4 : function () {
              return proj4;
          },

          getProj4Leaflet : function () {
              var version = L.version;
			  console.log(version);

			  var proj4leaflet = null;
              if (version.startsWith("0.7")) {
				  console.log("0.7");
                  proj4leaflet = require("proj4leaflet-0.7.x");
              } else if (version.startsWith("1.0")) {
				  console.log("1.0");
                  proj4leaflet = require("proj4leaflet-1.0.x");
              } else {
                  console.log("version leaflet incompatible !");
                  return;
              }
			  console.log(proj4leaflet);
			  L.Proj = proj4leaflet;
              return L.Proj;
          }
      };

	  return MyProj;
});
