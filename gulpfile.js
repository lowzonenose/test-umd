var gulp = require("gulp");
var umd  = require("gulp-umd");
var requirejs = require("requirejs");

gulp.task("requirejs", function (taskReady) {


        var deps    = {
            leaflet : "empty:",
            proj4 : "../lib/proj4-src",
            "proj4leaflet-0.7.x" : "../lib/proj4leaflet-src",
            "proj4leaflet-1.0.x" : "../lib/1.0.0/proj4leaflet-src",
        };

        requirejs.optimize({
            // mainConfigFile : ,
            paths : deps,
            baseUrl: "./src",
            optimize: 'none',
            uglify2: {
                output: {
                    beautify: false
                },
                warnings: false,
                mangle: false
            },
            include: [
				"gp",
                "test"
            ],
            out : "./js/test.js",
            findNestedDependencies: false,
            preserveLicenseComments: false, //  ne semble pas fonctionner !?
            useStrict: true,
            onModuleBundleComplete: function (data) {

                var fs = require("fs"),
                         amdclean = require("amdclean"),
                         outputFile = data.path;

                fs.writeFileSync(outputFile, amdclean.clean({
					globalModules: ['proj4'], // rendre un module globale (browser)
                    filePath : outputFile,
                    prefixMode : "camelCase",
                    wrap : {
                        start : "\n/* BEGIN CODE */\n",
                        end  : "\n/* END CODE   */\n"
                       },
                    "escodegen" :{
                         "comment" :false,
                         "format" :{
                           "indent" :{
                             "style" :"    ",
                             "adjustMultilineComment" :true
                           }
                         }
                       }
                }));
            }
        }, function () {
            taskReady();
        }, function (error) {
            console.error("requirejs task failed!?", JSON.stringify(error));
            process.exit(1);
        });
    });

gulp.task("umd", ["requirejs"], function () {

	return gulp.src("./js/*.js")
            .pipe(umd({
                exports: function (file) {
                    return "Gp" ;
                },
                namespace: function (file) {
                    return "Gp" ;
                },
                dependencies: function(file) {
                  return [{name :"leaflet", amd :"leaflet", cjs :"leaflet", global :"L", param :"leaflet"}];
                }
            }))
            .pipe(gulp.dest('./umd'))
});
gulp.task("default", function () {
    gulp.start("umd");
});
