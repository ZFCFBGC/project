// 这里的代码不是在浏览器执行
// 而是在node.js环境下执行
// 目的：sass->css
let gulp = require('gulp');
let sass = require('gulp-sass');
//gulp的使用
//gulp都是通过任务的形势来实现某些功能
//
//1.创建任务
gulp.task('compileSass',function(){
    //执行任务时，会执行这里的代码
    //在此把sass编译成css
    //2.找出sass文件
    // console.log(666)
    gulp.src('./src/sass/base.scss')
    // 编译scss->css
    .pipe(sass())
    .pipe(gulp.dest('./src/css/'))
})