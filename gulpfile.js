"use strict";

const gulp = require("gulp");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));

// gulp.task('clean', function () {
//     return gulp.src('./build/**/*')
//         .pipe(clean({ force: true }))
// });

gulp.task("sass", () => {
  return gulp
    .src("./src/**/*.scss")
    .pipe(
      postcss([
        require("autoprefixer"),
        require("tailwindcss/nesting"),
        require("tailwindcss"),
      ])
    )
    .pipe(sass())
    .pipe(
      rename({
        basename: "style",
        suffix: "",
        extname: ".css",
      })
    )
    .pipe(gulp.dest("./src"));
});

gulp.task("watch", function () {
  gulp.watch(
    ["./src/**/*.scss", "./src/**/*.js", "./**/*.html"],
    gulp.series("sass")
  );
});

// gulp.task('build', gulp.series('clean', 'sass'))
