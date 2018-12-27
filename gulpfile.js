'use stric'
// npm install -g gulp-cli
// npm init
// npm install --save-dev gulp
const gulp = require("gulp");
// npm install gulp-sass
const sass = require("gulp-sass");
// npm install gulp-autoprefixer
const autoprefixer = require("gulp-autoprefixer");
// npm install browser-sync
const browserSync = require("browser-sync").create();
// npm install -g eslint
// eslint --init
// npm install gulp-eslint
const eslint = require("gulp-eslint");
// npm install gulp-concat
const concat = require('gulp-concat');
// npm i gulp-uglify - do not support ES6
const uglify = require('gulp-uglify');
// npm i gulp-replace
const replace = require('gulp-replace');
// npm install --save-dev gulp-babel
const babel = require('gulp-babel');
// npm i gulp-sourcemaps
const sourcemaps = require('gulp-sourcemaps');
// npm i imagemin
const imagemin = require('gulp-imagemin');
// npm i pngquant
const pngquant = require('imagemin-pngquant');

const styles = (done) => {
    gulp
      .src("./sass/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(
        autoprefixer({
          browsers: ["last 4 versions"]
        })
      )
      .pipe(gulp.dest("./css"))
      .pipe(browserSync.stream());
    done();
  };

const serve = (done) => {
    console.log("hello server production");
    browserSync.init({
      server: {
        baseDir: "./"
      },
      port: 3000
    });
    done();
  }

const watch = () => {
    gulp.watch("sass/**/*.scss", styles);
}

const watchlint = () => {
    gulp.watch("./js/**/*.js", lint);
  }

const lint = () => {
    return gulp
        .src(['js/**/*.js'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
};


// distribution ----------------------------
const styles_dist = (done) => {
    gulp
      .src("./sass/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(
        sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError)
      )
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions"]
        })
      )
      .pipe(gulp.dest("./dist/css"))
      .pipe(browserSync.stream());
    done();
  };

const scripts = (done) => {
	gulp
		.src('./js/**/*.js')
		.pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js'));
    done();
};

const scripts_dist = (done) => {
	gulp
		.src('./js/**/*.js')
    .pipe(concat('all.js'))

    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify()).on('error', (e) => {
      console.log(e);
    })
    .pipe(sourcemaps.write('.'))

    .pipe(gulp.dest('./dist/js'));
    done();
};

const copy_html = (done) => {
    gulp
        .src('./index.html')
        .pipe(replace('app.js', 'all.js'))
        .pipe(gulp.dest('./dist'));
    console.log('index.html change: app.js > all.js')
    done();
};

const copy_images = (done) => {
    gulp
      .src('./img/*')
      .pipe(imagemin({
        progressive: true,
        use: [pngquant()]
      }))
      .pipe(gulp.dest('./dist/img'));
    done();
};

const copy_sounds = (done) => {
    gulp.src('./sound/*').pipe(gulp.dest('./dist/sound'));
    done();
};

const serve_dist = (done) => {
    console.log("hello server distribution");
    browserSync.init({
      server: {
        baseDir: "./dist"
      },
      port: 3000
    });
    done();
  }


const run = gulp.series(styles, gulp.parallel(serve, watch, watchlint));
run.description = 'serve compiled source on local server at port 3000';

gulp.task('default', run);

const dist = gulp.series(
    // also change app.js to all.js
    copy_html,
    copy_images,
    copy_sounds,
    styles_dist,
    // lint,
    scripts_dist,
    // scripts,
    serve_dist
    );

dist.description = 'serve distributed source on local server at port 3000';

gulp.task('dist', dist);
gulp.task('styles', gulp.series(styles_dist));
gulp.task('scr', gulp.series(scripts_dist));
