module.exports = function(grunt) {
  grunt.initConfig({
    env: {
      dev: {
        NODE_ENV: 'development'
      }
    },
    nodemon: {
      dev: {
        script: 'app.js',
        options: {
          ext: 'js,html'
        }
      }
    },
    ngAnnotate: {
      app1: {
        files: {
          'public/app/js/controllers/todoCtrl.js': ['public/app/js/controllers/todoCtrl.js'],
          'public/app/js/services/todoStorage.js': ['public/app/js/services/todoStorage.js'],
          'public/app/js/directives/todoFocus.js': ['public/app/js/directives/todoFocus.js'],
          'public/app/js/directives/todoEscape.js': ['public/app/js/directives/todoEscape.js'],
          'public/app/js/app.js': ['public/app/js/app.js']
        }
      }
    },
    concat: {
      js: {
        src: 'public/app/js/**/*.js',
        dest: 'public/app/js/conapp.js'
      }
    },
    uglify: {
      js: {
        src: 'public/app/js/conapp.js',
        dest: 'public/app/js/miniapp.js'
      }
    },
    jshint: {
      all: {
        src: ['app.js', 'config/**/*.js', 'public/app/js/**/*.js', 'controllers/*.js',
        'models/*.js', 'routes/*.js' ]
      }
    },
    csslint: {
      all: {
        src: 'public/stylesheets/*.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['env:dev', 'nodemon']);
  grunt.registerTask('lint', ['jshint', 'csslint']);
  grunt.registerTask('minify', ['ngAnnotate', 'concat', 'uglify']);
};
