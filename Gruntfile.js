module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'tt_dataviews/static/tt_dataviews/css/dataviews.css' : 'tt_dataviews/static/tt_dataviews/sass/dataviews.sass'
        },
        options: {
          style: 'compressed'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.s?ss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
};
