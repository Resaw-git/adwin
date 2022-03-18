import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass( dartSass )
import bulk from 'gulp-sass-bulk-importer'
import prefixer from 'gulp-autoprefixer'
import clean from 'gulp-clean-css'
import concat from 'gulp-concat'
import map from 'gulp-sourcemaps'

export const style = () => {
	return app.gulp.src(app.path.src.sass, { sourcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SASS",
                message: "Error: <%= error.message %>",
            })
        ))
		.pipe(map.init())
		.pipe(bulk())
		.pipe(sass({
			outputStyle: 'compressed',
		}))
		.pipe(prefixer({
			overrideBrowserslist: ['last 8 versions'],
			browsers: [
				'Android >= 4',
				'Chrome >= 20',
				'Firefox >= 24',
				'Explorer >= 11',
				'iOS >= 6',
				'Opera >= 12',
				'Safari >= 6',
			],
		}))
		.pipe(clean({
			level: 2,
		}))
		.pipe(concat('style.min.css'))
		.pipe(map.write('/'))
		.pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream())
}