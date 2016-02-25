(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
	  // AMD
      define([], factory);
    } else if (typeof exports === 'object') {
	  // Node/CommonJS
      module.exports = factory();
    } else {
	  // Browser globals
      root.proj4 = factory();
    }
  }(this, function() {
	proj4 = {
		testProj4 : "testProj4"
	};  
	return proj4;
  }));
