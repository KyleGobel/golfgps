var gulp = require("gulp"),
	cordova = require("cordova-lib").cordova,
	ts = require("gulp-typescript");

gulp.task("before-build", function() {

});

gulp.task("scripts", function() {
	gulp.src("ts/**/*.ts")
		.pipe(ts({
			noImplicitAny: false,
			noEmitOnError: true,
			removeComments: false,
			sourceMap: true,
			out: "appBundle.js",
			target: "es5"
		}))
		.pipe(gulp.dest("www/js"));
});
gulp.task("default", ["scripts"], function(callback) {

});

gulp.task("watch", ["scripts"], function() {
	gulp.watch("ts/**/*.ts", ["scripts"]);
});
gulp.task("publish", function (callback) {
	cordova.build({
		"platforms": ["android", "browser"],
		"options": {
            argv: ["--release","--gradleArg=--no-daemon"]
        }
	}, callback);
})

