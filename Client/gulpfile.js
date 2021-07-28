var gulp = require("gulp");
var del = require("del");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var terser = require("gulp-terser");

sass.compiler = require("sass");

var paths = {
    scripts: [
        "./assets/scripts//*.js", "./client/assets/scripts//*.jsx",
    ],
    styles: ["./assets/styles//*.css"],
};

var distPaths = {
    js: "./wwwroot/js",
    css: "./wwwroot/css",
};

gulp.task("clean", function () {
    return del(Object.values(distPaths).map((dir) => dir + "/**/"));
});

gulp.task("site-sass", function () {
    return gulp
        .src(paths.styles)
        .pipe(sass.sync({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(concat("app.css"))
        .pipe(gulp.dest(distPaths.css));
});

gulp.task("js", function () {
    return gulp
        .src(paths.scripts, { sourcemaps: false })
        .pipe(concat("app.js"))
        .pipe(terser({ compress: true, mangle: true }))
        .pipe(gulp.dest(distPaths.js, { sourcemaps: false }));
});

gulp.task("clean-js-post-build", function () {
    return del("./Assets/scripts//*.js");
});

gulp.task(
    "default",
    gulp.series("clean", gulp.parallel("js", "site-sass"), "clean-js-post-build")
);