const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

gulp.task("scripts", function () {
  return gulp
    .src([
      "./public/js/aos.js",
      "./public/js/tw-ele.js",
      "./public/js/main.js",
      "./public/js/alpine.js",
      "./public/js/fancybox.js",
      "./public/js/swiper.js",
      "./public/js/bundle.min.js",
      "./public/js/galeri.js"
    ])
    .pipe(concat("bundle.min.js"))
    .pipe(uglify("./public/js/"))
    .pipe(gulp.dest("./public/js/"));
});
