
/* BEGIN CODE */
var proj4, proj4leaflet07x, proj4leaflet10x, myproj, test, gp;
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
        proj4leaflet07x = function (leaflet, proj4) {
            return typeof factory === 'function' ? factory(leaflet, proj4) : factory;
        }(leaflet, proj4);
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(leaflet, proj4);
    } else {
        factory(root.L, root.proj4);
    }
}(this, function (L, proj4) {
    L.Proj = {
        testProj4Leaflet: 'testProj4Leaflet-0.7.7',
        testProj4: proj4.testProj4
    };
    return L.Proj;
}));
(function (root, factory) {
    if (true) {
        proj4leaflet10x = function (leaflet, proj4) {
            return typeof factory === 'function' ? factory(leaflet, proj4) : factory;
        }(leaflet, proj4);
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(leaflet, proj4);
    } else {
        factory(root.L, root.proj4);
    }
}(this, function (L, proj4) {
    L.Proj = {
        testProj4Leaflet: 'testProj4Leaflet-1.0.0',
        testProj4: proj4.testProj4,
        version: '1.0.0'
    };
    return L.Proj;
}));
myproj = function (require, L, proj4) {
    var MyProj = {
        getProj4: function () {
            return proj4;
        },
        getProj4Leaflet: function () {
            var version = L.version;
            console.log(version);
            var proj4leaflet = null;
            if (version.startsWith('0.7')) {
                console.log('0.7');
                proj4leaflet = proj4leaflet07x;
            } else if (version.startsWith('1.0')) {
                console.log('1.0');
                proj4leaflet = proj4leaflet10x;
            } else {
                console.log('version leaflet incompatible !');
                return;
            }
            console.log(proj4leaflet);
            L.Proj = proj4leaflet;
            return L.Proj;
        }
    };
    return MyProj;
}({}, leaflet, proj4);
test = function (L, MyProj) {
    var test = {};
    test.proj4 = MyProj.getProj4();
    test.proj4leaflet = MyProj.getProj4Leaflet();
    test.leaflet = L;
    return test;
}(leaflet, myproj);
gp = function (Test) {
    var scope = typeof window !== 'undefined' ? window : {};
    var Gp = scope.Gp || { test: Test };
    scope.Gp = Gp;
    return scope.Gp;
}(test);
window.proj4 = proj4;
/* END CODE   */
