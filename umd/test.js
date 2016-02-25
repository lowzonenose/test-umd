;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['leaflet'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('leaflet'));
  } else {
    root.Gp = factory(root.L);
  }
}(this, function(leaflet) {

/* BEGIN CODE */
var proj4, proj4leaflet, test, gp;
(function (root, factory) {
    if (true) {
        proj4 = function () {
            return typeof factory === 'function' ? factory() : factory;
        }();
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.proj4 = factory();
    }
}(this, function () {
    proj4 = { testProj4: 'testProj4' };
    return proj4;
}));
(function (root, factory) {
    if (true) {
        proj4leaflet = function (leaflet, proj4) {
            return typeof factory === 'function' ? factory(leaflet, proj4) : factory;
        }(leaflet, proj4);
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(leaflet, proj4);
    } else {
        factory(root.L, root.proj4);
    }
}(this, function (L, proj4) {
    L.Proj = {
        testProj4Leaflet: 'testProj4Leaflet',
        testProj4: proj4.testProj4
    };
    return L.Proj;
}));
test = function (L, proj4) {
    var test = {};
    test.proj4 = proj4;
    test.proj4leaflet = L.Proj;
    test.leaflet = L;
    return test;
}(leaflet, proj4);
gp = function (Test) {
    var scope = typeof window !== 'undefined' ? window : {};
    var Gp = scope.Gp || { test: Test };
    scope.Gp = Gp;
    return scope.Gp;
}(test);
window.proj4 = proj4;
/* END CODE   */

return Gp;
}));
