const gulp = require('gulp');
const run = require('gulp-run');
const imagemin = require('gulp-imagemin');

let src = './process',
    app = './public';

gulp.task('js', function () {
    return gulp.src(src + '/js/*.js')
        .pipe(gulp.dest(app + '/javascripts'));
});

gulp.task('css', function () {
    return gulp.src(src + '/css/*.css')
        .pipe(gulp.dest(app + '/stylesheets'));
});

gulp.task('vendors', function () {
    gulp.src('node_modules/bootstrap/dist/fonts/**/*')
        .pipe(gulp.dest(app + '/vendors/bootstrap/fonts'));
    gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest(app + '/vendors/bootstrap/css'));
    gulp.src('node_modules/bootstrap/dist/css/bootstrap-theme.min.css')
        .pipe(gulp.dest(app + '/vendors/bootstrap/css'));
    gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest(app + '/vendors/bootstrap/js'));
    gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest(app + '/vendors/jquery'));
    gulp.src('node_modules/knockout/build/output/knockout-latest.js')
        .pipe(gulp.dest(app + '/vendors/knockout'));
    gulp.src('node_modules/moment/min/moment.min.js')
        .pipe(gulp.dest(app + '/vendors/moment'));
    gulp.src('node_modules/moment-timezone/builds/moment-timezone.min.js')
        .pipe(gulp.dest(app + '/vendors/moment/timezone'));
    gulp.src('node_modules/moment-timezone/builds/moment-timezone-with-data.min.js')
        .pipe(gulp.dest(app + '/vendors/moment/timezone'));
    gulp.src('node_modules/moment-timezone/builds/moment-timezone-with-data-2012-2022.min.js')
        .pipe(gulp.dest(app + '/vendors/moment/timezone'));
    gulp.src('node_modules/moment/locale/pt-br.js')
        .pipe(gulp.dest(app + '/vendors/moment/locale'));
    gulp.src('node_modules/select2/dist/js/select2.min.js')
        .pipe(gulp.dest(app + '/vendors/select2/js'));
    gulp.src('node_modules/select2/dist/js/i18n/pt-BR.js')
        .pipe(gulp.dest(app + '/vendors/select2/i18n'));
    gulp.src('node_modules/select2/dist/css/select2.min.css')
        .pipe(gulp.dest(app + '/vendors/select2/css'));
    gulp.src('node_modules/select2-bootstrap-theme/dist/select2-bootstrap.min.css')
        .pipe(gulp.dest(app + '/vendors/select2-bootstrap-theme/css'));
    gulp.src('node_modules/pnotify/dist/pnotify.css')
        .pipe(gulp.dest(app + '/vendors/pnotify/css'));
    gulp.src('node_modules/pnotify/dist/pnotify.buttons.css')
        .pipe(gulp.dest(app + '/vendors/pnotify/css'));
    gulp.src('node_modules/pnotify/dist/pnotify.js')
        .pipe(gulp.dest(app + '/vendors/pnotify/js'));
    gulp.src('node_modules/pnotify/dist/pnotify.buttons.js')
        .pipe(gulp.dest(app + '/vendors/pnotify/js'));
    gulp.src('node_modules/pnotify/dist/pnotify.callbacks.js')
        .pipe(gulp.dest(app + '/vendors/pnotify/js'));
    gulp.src('node_modules/pnotify/dist/pnotify.confirm.js')
        .pipe(gulp.dest(app + '/vendors/pnotify/js'));
    gulp.src('node_modules/pnotify/dist/pnotify.mobile.js')
        .pipe(gulp.dest(app + '/vendors/pnotify/js'));
    gulp.src('node_modules/corejs-typeahead/dist/typeahead.bundle.min.js')
        .pipe(gulp.dest(app + '/vendors/corejs-typeahead'));
    gulp.src('node_modules/font-awesome/fonts/**/*')
        .pipe(gulp.dest(app + '/vendors/fonts'));
    gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest(app + '/vendors/font-awesome/css'));
    // gulp.src('node_modules/daterangepicker/daterangepicker.min.js')
    //     .pipe(gulp.dest(app + '/vendors/daterangepicker/js'));
    // gulp.src('node_modules/daterangepicker/daterangepicker-bs3.min.css')
    //     .pipe(gulp.dest(app + '/vendors/daterangepicker/css'));
    gulp.src('node_modules/bootstrap3-dialog/dist/css/bootstrap-dialog.min.css')
        .pipe(gulp.dest(app + '/vendors/bootstrap3-dialog/css'));
    gulp.src('node_modules/bootstrap3-dialog/dist/js/bootstrap-dialog.min.js')
        .pipe(gulp.dest(app + '/vendors/bootstrap3-dialog/js'));
    gulp.src('node_modules/bootstrap-fileinput/css/fileinput.min.css')
        .pipe(gulp.dest(app + '/vendors/bootstrap-fileinput/css'));
    gulp.src('node_modules/bootstrap-fileinput/js/fileinput.min.js')
        .pipe(gulp.dest(app + '/vendors/bootstrap-fileinput/js'));
    gulp.src('node_modules/bootstrap-fileinput/js/locales/pt-BR.js')
        .pipe(gulp.dest(app + '/vendors/bootstrap-fileinput/js/locales'));
    gulp.src('node_modules/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css')
        .pipe(gulp.dest(app + '/vendors/bootstrap-switch/css'));
    gulp.src('node_modules/bootstrap-switch/dist/js/bootstrap-switch.min.js')
        .pipe(gulp.dest(app + '/vendors/bootstrap-switch/js'));
    gulp.src('node_modules/sweetalert2/dist/sweetalert2.min.css')
        .pipe(gulp.dest(app + '/vendors/sweetalert2/css'));
    gulp.src('node_modules/sweetalert2/dist/sweetalert2.min.js')
        .pipe(gulp.dest(app + '/vendors/sweetalert2/js'));
    gulp.src('node_modules/jquery-form-validator/form-validator/jquery.form-validator.min.js')
        .pipe(gulp.dest(app + '/vendors/jquery-form-validator/js'));
    gulp.src('node_modules/jquery-form-validator/form-validator/theme-default.min.css')
        .pipe(gulp.dest(app + '/vendors/jquery-form-validator/css'));
    gulp.src('node_modules/jquery-touchswipe/jquery.touchSwipe.min.js')
        .pipe(gulp.dest(app + '/vendors/jquery-touchswipe'));
    gulp.src('node_modules/jquery-mask-plugin/dist/jquery.mask.min.js')
        .pipe(gulp.dest(app + '/vendors/jquery-mask/js'));
    gulp.src('node_modules/bootstrap-fileinput/css/fileinput.min.css')
        .pipe(gulp.dest(app + '/vendors/bootstrap-fileinput/css'));
    gulp.src('node_modules/bootstrap-fileinput/img/*.gif')
        .pipe(gulp.dest(app + '/vendors/bootstrap-fileinput/img'));
    gulp.src('node_modules/bootstrap-fileinput/js/fileinput.min.js')
        .pipe(gulp.dest(app + '/vendors/bootstrap-fileinput/js'));
    gulp.src('node_modules/bootstrap-fileinput/js/locales/pt-br.js')
        .pipe(gulp.dest(app + '/vendors/bootstrap-fileinput/js/locales'));
    gulp.src('node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.css')
        .pipe(gulp.dest(app + '/vendors/bootstrap-tagsinput/css'));
    gulp.src('node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js')
        .pipe(gulp.dest(app + '/vendors/bootstrap-tagsinput/js'));
    gulp.src('node_modules/webui-popover/dist/jquery.webui-popover.min.css')
        .pipe(gulp.dest(app + '/vendors/webui-popover/css'));
    gulp.src('node_modules/webui-popover/dist/jquery.webui-popover.min.js')
        .pipe(gulp.dest(app + '/vendors/webui-popover/js'));
    gulp.src('node_modules/pikaday/css/pikaday.css')
        .pipe(gulp.dest(app + '/vendors/pikaday/css'));
    gulp.src('node_modules/pikaday/pikaday.js')
        .pipe(gulp.dest(app + '/vendors/pikaday/js'));
    gulp.src('process/js/pikaday.pt-BR.js')
        .pipe(gulp.dest(app + '/vendors/pikaday/js/locales'));
    // gulp.src('node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css')
    //     .pipe(gulp.dest(app + '/vendors/bootstrap-datepicker/css'));
    // gulp.src('node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js')
    //     .pipe(gulp.dest(app + '/vendors/bootstrap-datepicker/js'));
    // gulp.src('node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.pt-BR.min.js')
    //     .pipe(gulp.dest(app + '/vendors/bootstrap-datepicker/locales'));
    // gulp.src('node_modules/pickadate/lib/compressed/themes/default.css')
    //     .pipe(gulp.dest(app + '/vendors/pickadate/themes'));
    // gulp.src('node_modules/pickadate/lib/compressed/themes/default.date.css')
    //     .pipe(gulp.dest(app + '/vendors/pickadate/themes'));
    // gulp.src('node_modules/pickadate/lib/compressed/themes/default.time.css')
    //     .pipe(gulp.dest(app + '/vendors/pickadate/themes'));
    // gulp.src('node_modules/pickadate/lib/compressed/picker.js')
    //     .pipe(gulp.dest(app + '/vendors/pickadate/js'));
    // gulp.src('node_modules/pickadate/lib/compressed/picker.date.js')
    //     .pipe(gulp.dest(app + '/vendors/pickadate/js'));
    // gulp.src('node_modules/pickadate/lib/compressed/picker.time.js')
    //     .pipe(gulp.dest(app + '/vendors/pickadate/js'));
    // gulp.src('node_modules/pickadate/lib/compressed/translations/pt_BR.js')
    //     .pipe(gulp.dest(app + '/vendors/pickadate/js/translations'));
    // gulp.src('node_modules/simple-web-notification/web-notification.js')
    //     .pipe(gulp.dest(app + '/vendors/simple-web-notification/js'));
    gulp.src('node_modules/pace-js/themes/blue/pace-theme-center-radar.css')
        .pipe(gulp.dest(app + '/vendors/pace-js/themes'));
    gulp.src('node_modules/pace-js/pace.min.js')
        .pipe(gulp.dest(app + '/vendors/pace-js/js'));
});

gulp.task('imageMin', function () {
    gulp.src(src + '/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest(app + '/images'))
});

// gulp.task('watch', ['serve'], function () {
//     gulp.watch(src + '/js/*', ['js']);
//     gulp.watch(src + '/css/*', ['css']);
// });

// gulp.task('serve', ['js', 'css', 'imageMin'], function () {
//     run('node ./bin/www').exec();
// });

// gulp.task('default', ['watch', 'vendors', 'serve']);

gulp.task('watch', ['js', 'css', 'imageMin'], function () {
    gulp.watch(src + '/js/*', ['js']);
    gulp.watch(src + '/css/*', ['css']);
});

gulp.task('default', ['watch', 'vendors']);