module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON "package.json"
    sass:
      dist:
        files:
          "tt_dataviews/static/tt_dataviews/css/app.css": "tt_dataviews/static/tt_dataviews/sass/app.sass"
        options:
          style: "compressed"
    watch:
      css:
        files: "tt_dataviews/**/*.s?ss"
        tasks: ["sass", ]

  grunt.loadNpmTasks "grunt-contrib-sass"
  grunt.loadNpmTasks "grunt-contrib-watch"

  grunt.registerTask "default", ["watch", ]
