module.exports = function(grunt) {
grunt.initConfig({
 pkg: grunt.file.readJSON('package.json'),
// SASS TO CSS COMPILING
 sass: {
    dist: {
     files: [{
       expand: true,
       cwd: 'build/sass',
       src: ['*.scss'],
     dest: 'css',
     ext: '.css'
     }]
    }
 },
// CONCAT JS AND CSS
 concat: {
basic : {
 src: ['css/style.css', 'css/normalize.css'],
 dest: 'css/production.css',
 },
extras : {
 src: ['js/scripts.js', 'js/boostrap.js'],
 dest: 'js/production.js',
 },
},
// CSS MIN
 cssmin: {
    options: {
    keepSpecialComments: 0
    },
    combine: {
     files: {
     'css/production.min.css': ['css/production.css']
      }
    }
 },
// UGLIFY
 uglify: {
    my_target: {
    files: {
     'js/production.min.js': ['js/production.js']
    }
   }
 },
watch: {
 scripts: {
   files: ['**/build/sass/*.scss', '**/js/*.js', '**/*.html', '**/*.php'],
   tasks: ['sass', 'concat', 'cssmin', 'uglify'],
 options: {
   spawn: false,
   livereload: true
 },
 },
 }
});
// Load the plugin that provides the "sass" task.
 grunt.loadNpmTasks('grunt-contrib-sass');
 // Load the plugin that provides the "watch" task.
 grunt.loadNpmTasks('grunt-contrib-watch');
 // Load the plugin that provides the "concat" task.
 grunt.loadNpmTasks('grunt-contrib-concat');
 // Load the plugin that provides the "cssmin" task.
 grunt.loadNpmTasks('grunt-contrib-cssmin');
 // Load the plugin that provides the "uglify" task.
 grunt.loadNpmTasks('grunt-contrib-uglify');
// Default task(s).
 grunt.registerTask('default', ['watch']);
};