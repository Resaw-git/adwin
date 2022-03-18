import gulp from 'gulp'
import { path } from './gulp/config/path.js'
import { plugins } from './gulp/config/plugins.js'
import { server } from './gulp/tasks/server.js'

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

import { copy } from './gulp/tasks/copy.js'
import { reset } from './gulp/tasks/reset.js'
import { html } from './gulp/tasks/html.js'
import { style } from './gulp/tasks/style.js'
import { img } from './gulp/tasks/img.js'
import { ftp } from './gulp/tasks/ftp.js'

function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.style, style)
    gulp.watch(path.watch.img, img)
}

const mainTasks = gulp.parallel(copy, html, style, img)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const deployFTP = gulp.series(reset, mainTasks, ftp)

export { deployFTP }

gulp.task('default', dev)