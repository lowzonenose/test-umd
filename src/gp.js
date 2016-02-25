define(['test'], function (Test) {
    var scope = typeof window !== 'undefined' ? window : {};
    var Gp = scope.Gp || {
	  test : Test
    };
    scope.Gp = Gp;
    return scope.Gp;
});
